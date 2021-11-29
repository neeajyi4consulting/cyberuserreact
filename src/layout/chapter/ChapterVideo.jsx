import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ReactTooltip from 'react-tooltip';
import Vimeo from "@u-wave/react-vimeo";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  getChapterClientList,
  setCertificate,
} from "../../redux/actions/courseAction";
import { changeStatusOfChapter } from "../../redux/actions/chapterAction";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function ChapterVideo() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, course } = useSelector((state) => state);;
  const loading = course?.loading;
  const currentUser = user?.currentUser;
  const statuses = course?.chapterClientList;
  const isPassed = course?.chapterClientList?.ispass;
  const courseList = course?.chapterClientList?.chapter_data;
  const [chapter, setChapter] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoLink, setVideoLink] = useState();

  const handleFetchCourse = () => {
    const data = new FormData();
    data.append("user_id", currentUser.user_id);
    data.append("course_id", id);
    dispatch(getChapterClientList(data));
  };

  

  const handleOnChangeVideo = (val) => {
    console.log("this is chapter id", chapter);
    setChapter(val?.id)
    setVideoLink(val?.link);
  };
  const handleOnFinishVideo = (res) => {
    const data = new FormData();
    data.append("user_id", currentUser.user_id);
    data.append("chapter_id", chapter);
    data.append("course_id", id);
    data.append("status", res.percent);
    data.append("completedVideoLenght", res.seconds);
    data.append("totalVideoLength", res.duration);
    dispatch(changeStatusOfChapter(data));
    if (courseList.length - 1 > currentIndex) {
      handleFetchCourse();
      setCurrentIndex(currentIndex + 1);
    }else{
      console.log("something went wrong");
      handleFetchCourse();
    }
  };

  const autoPlayNextVideo = () => {
    setVideoLink(courseList ? courseList[currentIndex].link : "not available");
    setChapter(!courseList ?null:courseList[currentIndex]?.id)
  };




  useEffect(() => {
    handleFetchCourse();
  }, []);
;

  useEffect(() => {
    autoPlayNextVideo();
  }, [courseList]);

  if (loading) {
    return (
      <div className="absolute bottom-0 left-0 z-40 text-center bg-gray-900 opacity-90 h-screen w-screen">
        <div className="my-auto mx-auto h-32 w-32 mt-64">
          <div className="h-28 w-28 border-blue-400 rounded-full animate-spin border-t-2 p-4">
            <div className="h-24 w-24 border-blue-400 rounded-full animate-spin border-t-2 p-4">
              <div className="h-20 w-20 border-blue-400 rounded-full animate-spin border-t-2">
                <div className="h-16 w-16 border-blue-400 rounded-full animate-spin border-t-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-32 w-64 mx-auto text-gray-50 mt-4 text-center">
          &nbsp;&nbsp;&nbsp;please wait <br /> this may take a few seconds
        </div>
      </div>
    );
  }

  return (
    <>
    <Helmet>
        <meta charset="utf-8" />
        <title>Chapter Video | CyberFrat</title>
        <meta name="description" content="This is Chapter Video page" />
      </Helmet>
      <div className="bg-gray-200 pt-8">
        <div className="bg-gray-100 sm:px-5 sm:py-3 sm:mx-16 sm:p-6 rounded-lg shadow-lg">
          <div className="mb-3 p-1">
            <span className="font-bold text-2xl">Chapter Video</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 w-full my-3">
            <div className="bg-white relative col-span-2 shadow-lg">
              <div>
                <Vimeo
                  video={
                    courseList===undefined
                      ? 
                      "https://vimeo.com/636273863/eb39c99700"
                      : videoLink
                  }
                  // height="600px"
                  // width="900px"
                  responsive={true}
                  showByline={false}
                  showPortrait={false}
                  showTitle={false}
                  onError={(error)=>{toast.error("There's some error playing video"); console.log("this is error", error);}}
                  onEnd={(res) => handleOnFinishVideo(res)}
                />
              </div>
              <div className="h-auto border-b-1 border-gray-700 shadow-lg bg-white grid grid-cols-1 md:grid-cols-5">
                <div
                  to="/"
                  className="text-blue-400 mx-3 py-4 px-8 border-b-2 text-center border-blue-400"
                >
                  About
                </div>
                {
                !statuses.Quiz_Completed &&
                statuses?.course_status === "completed" 
                // true
                ? (
                  <a
                  rel="noreferrer"
                    href={`/courses/chapterquiz/${id}`}
                    target="_blank"
                    className={
                      "text-gray-700 mx-3 py-4 px-8 text-center relative"
                    }
                  >
                    Quiz
                  </a>
                ) : (
                  <button className="text-gray-400 text-center cursor-not-allowed">
                    Quiz
                  </button>
                )}
                {statuses.Quiz_Completed &&
                statuses?.course_status === "completed" ? (
                   isPassed ? (
                    <button
                      onClick={() => {
                        history.push(`/certificate/${id}`);
                        const data = new FormData();
                        data.append("user_id", currentUser?.user_id);
                        data.append("course_id", id);
                        dispatch(setCertificate(data));
                      }}
                      className={
                        "text-gray-700 mx-3 py-4 px-8 text-center relative"
                      }
                    >
                      Certificate
                    </button>
                  ) : (
                    <button className="text-gray-400 text-center cursor-not-allowed">
                      <div data-tip="Sorry, You failed test" type="success" >
                      Certificate</div><ReactTooltip /> 
                    </button>
                  )
                ) : (
                  <button className="text-gray-400 text-center cursor-not-allowed">
                    Certificate
                  </button>
                )}
              </div>
              <div className="bg-white pt-5">
                <p className="text-gray-500 px-5 py-2 h-auto ">
                  {!statuses?.chapter_data
                    ? "About this Course"
                    : statuses?.chapter_data[0]?.course?.about}
                  {/* {!chapter ? "" : chapter.name?.about}  */}
                </p>
              </div>
            </div>
            <div
              style={{ overflow: "auto", height: "auto", maxHeight: "620px" }}
            >
              <div className="bg-white shadow-xl w-full">
                <div className="p-5">
                  <p className="text-lg font-bold">Chapters In This Course</p>
                </div>
                <div>
                  {!courseList || courseList === undefined
                    ? null
                    : courseList.map((val) => {
                        return (
                          <div key={val?.id}>
                            <div
                              className={`border-t-2 border-fuchsia-600 p-5 duration-300 hover:bg-gray-200 cursor-pointer ${
                                val?.chapter_status?.is_completed
                                  ? "bg-green-200 text-gray-700 shadow-lg hover:bg-green-300"
                                  : "bg-white hover:bg-gray-200"
                              } `}
                              onClick={() => handleOnChangeVideo(val)}
                            >
                              <p className="inline-block overflow-hidden">
                                &nbsp; {val?.chapter_name}
                              </p>
                              <p className="text-sm text-gray-600 pl-7">
                                {val?.chapter_file ? (
                                  <Link to="/">Attatched File</Link>
                                ) : (
                                  "Video" 
                                )}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChapterVideo;
