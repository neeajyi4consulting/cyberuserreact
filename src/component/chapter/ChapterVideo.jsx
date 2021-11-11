import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Vimeo from "@u-wave/react-vimeo";
import Sidebar from "../sidebar/Sidebar";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { getChapterClientList } from "../../redux/actions/courseAction";
import { changeStatusOfChapter } from "../../redux/actions/chapterAction";

function ChapterVideo() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const storedData = useSelector((state) => state);
  const { user, course } = storedData;
  const loading = course?.loading;
  const currentUser = user?.currentUser;
  const courseList = course?.chapterClientList;
  const courseAbout = course?.chapterClientList?.data;
  const [chapter, setChapter] = useState();

  const handleFetchCourse = () => {
    const data = new FormData();
    data.append("user_id", currentUser.user_id);
    data.append("course_id", id);
    dispatch(getChapterClientList(data));
  };

  const handleOnChangeVideo = (val) => {
    setChapter(val);
  };

  const handleOnFinishVideo = (res) => {
    const data = new FormData();
    data.append("user_id", currentUser.user_id);
    data.append("chapter_id", chapter.name?.id);
    data.append("course_id", id);
    data.append("status", res.percent);
    data.append("completedVideoLenght", res.seconds);
    data.append("totalVideoLength", res.duration);
    dispatch(changeStatusOfChapter(data));
    handleFetchCourse();
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
          &nbsp;&nbsp;&nbsp;please wait <br/> this may take a few seconds
        </div>
      </div>
    );
  }

  return (
    <>
      <Sidebar />

      <div className="bg-gray-200 pt-8">
        <div className="bg-white px-5 py-3 mx-16 rounded-lg shadow-lg hidden md:block">
          <span className="font-bold text-2xl mx-8">Chapter Video</span>
          <span className="float-right ">Home / Dashboard</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:mx-16 mt-10">
          <div className="bg-white  relative col-span-2 shadow-lg">
            <div>
              <Vimeo
                video={
                  !chapter
                    ? "https://vimeo.com/636273863/eb39c99700"
                    : chapter.name?.link
                }
                height="600px"
                width="900px"
                responsive
                onEnd={(res) => handleOnFinishVideo(res)}
              />
            </div>
            <div className="h-auto border-b-1 border-gray-700 shadow-lg bg-white grid grid-cols-1 md:grid-cols-5">
              <Link
                to="/"
                className="text-blue-400 mx-3 py-4 px-8 border-b-2 text-center border-blue-400"
              >
                About
              </Link>

              {!courseList.Quiz_Completed ? (
                <button
                  onClick={() => history.push(`/courses/chapterquiz/${id}`)}
                  className={"text-gray-700 mx-3 py-4 px-8 text-center relative"}
                >
                  Quiz
                </button>
              ) : (
                <button className="text-gray-400 text-center cursor-not-allowed">Quiz</button>
              )}
              {courseList.Quiz_Completed && courseList?.course_status==="completed" ? (
                <button
                  disabled={!courseList.Quiz_Completed}
                  onClick={() => history.push(`/certificate/${id}`)}
                  className={"text-gray-700 mx-3 py-4 px-8 text-center relative"}
                >
                  Certificate
                </button>
                ) : (
                <button className="text-gray-400 text-center cursor-not-allowed">Certificate</button>
              )}
            </div>
            <div className="bg-white pt-5">
              {/* <p className="p-5">About This Course</p> */}
              <p className="text-gray-500 px-5 py-2 h-auto ">
                {!courseAbout ? "About this Course" :courseAbout[0]?.name?.course?.about}
                {!chapter ? "" : chapter.name?.about}
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white shadow-xl">
              <div className="p-5">
                <p className="text-lg font-bold">Chapters In This Course</p>
              </div>
              <div>
                {!courseList?.data || courseList === undefined
                  ? null
                  : courseList?.data.map((val) => {
                      return (
                        <div key={val?.name?.id}>
                          <div
                            className={`border-t-2 border-fuchsia-600 p-5  cursor-pointer ${
                              val.is_completed
                                ? "bg-green-200 text-gray-700 shadow-lg"
                                : "bg-white"
                            } `}
                            onClick={() => handleOnChangeVideo(val)}
                          >
                            <p className="inline-block overflow-hidden">
                              &nbsp; {val?.name?.chapter_name}
                            </p>
                            <p className="text-sm text-gray-600 pl-7">Video</p>
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChapterVideo;
