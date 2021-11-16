import React, { useEffect, useState } from "react";
import Vimeo from "@u-wave/react-vimeo";
import Sidebar from "../sidebar/Sidebar";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getChapterClientList } from "../../redux/actions/courseAction";
import { changeStatusOfChapter } from "../../redux/actions/chapterAction";
import { toast } from "react-toastify";

function ChapterVideo() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const storedData = useSelector((state) => state);
  const { user, course } = storedData;
  const loading = course?.loading;
  const currentUser = user?.currentUser;
  const statuses = course?.chapterClientList;
  const courseList = course?.chapterClientList?.chapter_data;
  const [chapter, setChapter] = useState();

  const handleFetchCourse = () => {
    const data = new FormData();
    data.append("user_id", currentUser.user_id);
    data.append("course_id", id);
    dispatch(getChapterClientList(data));
  };

  const handleOnChangeVideo = (val, index) => {
    setChapter(val);
    // console.log("this is test val for chpater name",val);
    // console.log("this is index of", index);
  };

  const handleOnFinishVideo = (res) => {
    const data = new FormData();
    data.append("user_id", currentUser.user_id);
    data.append("chapter_id", chapter?.id);
    data.append("course_id", id);
    data.append("status", res.percent);
    data.append("completedVideoLenght", res.seconds);
    data.append("totalVideoLength", res.duration);
    dispatch(changeStatusOfChapter(data));
    handleFetchCourse();
    // window.location.reload();
  };

  useEffect(() => {
    handleFetchCourse();
  }, []);

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
      <Sidebar />
      <div className="bg-gray-200 pt-8">
        <div className="bg-gray-100 sm:px-5 sm:py-3 sm:mx-16 sm:p-6 rounded-lg shadow-lg">
          <div className="mb-3 p-1">
          <span className="font-bold text-2xl">Chapter Video</span>
          <span className="float-right my-2">Home / Dashboard</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 w-full my-3">
            <div className="bg-white relative col-span-2 shadow-lg">
              <div>
                <Vimeo
                  video={
                    !chapter
                      ? "https://vimeo.com/636273863/eb39c99700"
                      : chapter?.link
                  }
                  // height="600px"
                  // width="900px"
                  responsive={true}
                  showByline={false}
                  showPortrait={false}
                  showTitle={false}
                  onError={()=>{toast.error("There's some error playing video")}}
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
                {!statuses.Quiz_Completed &&
                statuses?.course_status === "completed" ? (
                  <button
                    onClick={() => history.push(`/courses/chapterquiz/${id}`)}
                    className={
                      "text-gray-700 mx-3 py-4 px-8 text-center relative"
                    }
                  >
                    Quiz
                  </button>
                ) : (
                  <button className="text-gray-400 text-center cursor-not-allowed">
                    Quiz
                  </button>
                )}
                {statuses.Quiz_Completed &&
                statuses?.course_status === "completed" ? (
                  <button
                    disabled={!statuses.Quiz_Completed}
                    onClick={() => history.push(`/certificate/${id}`)}
                    className={
                      "text-gray-700 mx-3 py-4 px-8 text-center relative"
                    }
                  >
                    Certificate
                  </button>
                ) : (
                  <button className="text-gray-400 text-center cursor-not-allowed">
                    Certificate
                  </button>
                )}
              </div>
              <div className="bg-white pt-5">
                <p className="text-gray-500 px-5 py-2 h-auto ">
                  {/* {!courseAbout */}
                    ? "About this Course"
                    {/* : courseAbout[0]?.name?.course?.about} */}
                  {/* {!chapter ? "" : chapter.name?.about} */}
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white shadow-xl w-full">
                <div className="p-5">
                  <p className="text-lg font-bold">Chapters In This Course</p>
                </div>
                <div>
                  {!courseList || courseList === undefined
                    ? null
                    : courseList.map((val, index) => {
                        return (
                          <div key={val?.id}>
                            <div
                              className={`border-t-2 border-fuchsia-600 p-5  cursor-pointer ${
                                val?.chapter_status?.is_completed
                                  ? "bg-green-200 text-gray-700 shadow-lg"
                                  : "bg-white"
                              } `}
                              onClick={() => handleOnChangeVideo(val, index)}
                            >
                              <p className="inline-block overflow-hidden">
                                &nbsp; {val?.chapter_name}
                              </p>
                              <p className="text-sm text-gray-600 pl-7">
                                Video
                                
                              </p>
                            </div>
                          </div>
                        );
                      })
                    }
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
