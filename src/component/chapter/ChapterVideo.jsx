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
  console.log("this is course list", courseList?.course_status, "and ", courseList.Quiz_Completed);
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
      <div className="flex h-screen w-screen justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        <div>&nbsp;&nbsp;&nbsp;please wait</div>
      </div>
    );
  }

  return (
    <>
      <Sidebar />

      <div className="bg-gray-200 pt-8">
        <div className="bg-white px-5 py-3 mx-16 rounded-lg hidden md:block">
          <span className="font-bold text-2xl mx-8">Chapter Video</span>
          <span className="float-right ">Home / Dashboard</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:mx-16 mt-10">
          <div className="bg-white  relative col-span-2">
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
            <div className="h-auto border-b-1 border-gray-700 shadow-md bg-white grid grid-cols-1 md:grid-cols-5">
              <Link
                to="/"
                className="text-blue-400 mx-3 py-4 px-8 border-b-2 border-blue-400"
              >
                About
              </Link>

              {!courseList.Quiz_Completed ? (
                <button
                  disabled={courseList.Quiz_Completed}
                  onClick={() => history.push(`/courses/chapterquiz/${id}`)}
                  className={"text-gray-700 mx-3 py-4 px-8 relative"}
                >
                  Quiz
                </button>
              ) : (
                <button className="text-gray-400">quiz</button>
              )}
              {courseList.Quiz_Completed && courseList?.course_status==="completed" ? (
                <button
                  disabled={!courseList.Quiz_Completed}
                  onClick={() => history.push(`/certificate/${id}`)}
                  className={"text-gray-700 mx-3 py-4 px-8 relative"}
                >
                  Certificate
                </button>
                ) : (
                <button className="text-gray-400">Certificate</button>
              )}
            </div>
            <div className="bg-white">
              <p className="p-5">About This Course</p>
              <p className="text-gray-500 px-5 py-2 h-auto">
                {!chapter ? "" : chapter.name?.about}
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white">
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
                                ? "bg-green-500 text-gray-100"
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
