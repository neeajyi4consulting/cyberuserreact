import React, { useEffect, useState } from "react";
import checkIcon from "../../assets/img/check-mark.svg";
import { Link } from "react-router-dom";
import Vimeo from "@u-wave/react-vimeo";
import Sidebar from "../sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  getChapterDetails,
  getCourseDetails,
  getChapterStatus,
} from "../../api";
import { ChapterStatus } from "../../redux/actions/chapterAction";

function ChapterVideo() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const [listofChapter, setListofChapter] = useState([]);
  const [isVideoPaused, setIsVideoPaused] = useState(true);
  const [courseName, setCourseName] = useState("");
  const [chapterId, setChapterId] = useState();
  const [videoDetails, setVideoDetails] = useState({
    completedVideoLength: "",
    totalVideoLength: "",
    videoProgress: "0",
  });
  const [detailsOfChapter, setDetailsOfChapter] = useState({
    about: "",
    link: "551694700",
    chapterName: "",
    id: "",
  });

  const startTime = videoDetails.completedVideoLength;

  const currentUser = useSelector((state) => state.user.currentUser);

  const fetchChapterList = async (id) => {
    await getCourseDetails(id).then((response) => {
      const chapterInfo = response.data?.chapters;
      setListofChapter(chapterInfo);
      setCourseName(response.data?.data.course_title);
    });
  };

  const handleVideoPlay = (response) =>{
    console.log("play video response",response);
  }

  const handleVideoPause = (response) =>{
    console.log("pause Video Response",response);
  }

  const saveVideoDetails = () => {
    setInterval(() => {
     
        const completedVideoLength = localStorage.getItem(
          "completedVideoLength"
        );
        const videoProgress = localStorage.getItem("videoProgress");
        const status = videoProgress * 100;
        const totalVideoLength = localStorage.getItem("totalVideoLength");
        const data = new FormData();
        data.append("user_id", currentUser.user_id);
        data.append("chapter_id", detailsOfChapter.id);
        data.append("status", status);
        data.append("completedVideoLenght", completedVideoLength);
        data.append("totalVideoLength", totalVideoLength);
        dispatch(ChapterStatus(data));
      
    }, 10000);
  };

  const handlePause = () => {
    // localStorage.removeItem("totalVideoLength");
    // localStorage.removeItem("totalVideoLength");
    // localStorage.removeItem("videoProgress");
    setIsVideoPaused(true);
  };

  const handleClick = () => {
    console.log(chapterId);
  };

  useEffect(() => {
    // chapterDetails(courseId);
    fetchChapterList(id);
  }, []);
  return (
    <>
      <Sidebar />
      <div className="bg-gray-200 pt-8">
        <div className="bg-white px-5 py-3 mx-16 rounded-lg hidden md:block">
          <span className="font-bold text-2xl mx-8">
            {detailsOfChapter.chapterName
              ? detailsOfChapter.chapterName
              : courseName}
          </span>
          <span className="float-right ">Home / Dashboard</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:mx-16 mt-10">
          <div className="bg-white  relative col-span-2">
            <div>
              <Vimeo
                video={detailsOfChapter.link}
                // start={startTime}
                // controls={false}
                height="600px"
                width="900px"
                responsive
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                // onPlay={saveVideoDetails}
                // onPause={handlePause}
                // onTimeUpdate={(res) => {
                //   setVideoDetails({
                //     completedVideoLength: res.seconds,
                //     totalVideoLength: res.duration,
                //     videoProgress: res.percent,
                //   });
                //   localStorage.setItem(
                //     "completedVideoLength",
                //     videoDetails.completedVideoLength
                //   );
                //   localStorage.setItem(
                //     "videoProgress",
                //     videoDetails.videoProgress
                //   );
                //   localStorage.setItem(
                //     "totalVideoLength",
                //     videoDetails.totalVideoLength
                //   );
                  // console.log(videoDetails.totalVideoLength);
                // }}
              />
            </div>
            <div className="h-auto flex items-center border-b-1 border-gray-700 shadow-md bg-white grid grid-cols-1 md:grid-cols-5">
              <Link
                to="/"
                className="text-blue-400 mx-3 py-4 px-8 border-b-2 border-blue-400"
              >
                About
              </Link>
              <Link
                to={`/courses/chapterquiz/${detailsOfChapter.id}`}
                className={`text-gray-700 mx-3 py-4 px-8 relative has-tooltip ${
                  false ? "cursor-not-allowed" : ""
                }`}
              >
                {/* <span className="mt-8 tooltip rounded shadow-lg p-1 text-sm bg-gray-100 text-red-500 w-48 absolute top-12 -left-10 ">
                  "Sorry, Quiz is not available yet, You need to have 80% of the
                  chapter at least completed."
                </span> */}
                Quiz
              </Link>
              <Link
                to="/certificate"
                className={`text-gray-700 mx-3 py-4 px-8 col-span-3 ${
                  false ? "cursor-not-allowed" : ""
                }`}
              >
                Certificates
              </Link>
            </div>
            <div className="bg-white">
              <p className="p-5">About This Course</p>
              <p className="text-gray-500 px-5 py-2 h-auto">
                {detailsOfChapter.about}
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white">
              <div className="p-5">
                <p className="text-lg font-bold">Chapter List</p>
                <div className="relative pt-1 ">
                  <div className="overflow-hidden h-1 w-auto mr-12 mb-4 text-xs flex rounded bg-gray-200 ">
                    <div
                      style={{ width: `${videoDetails.videoProgress * 100}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-800"
                    ></div>
                  </div>
                  <p className="float-right -mt-8 ">
                    {videoDetails.videoProgress * 100}%
                  </p>
                </div>
                <div className="text-sm bg-pink-900 text-white p-2 h-16 md:h-auto">
                  Target: 1 Aug 2021 To 10 Sept 2021{" "}
                  <span className="border-r-1 border-red-500 float-right">
                    40 Days &nbsp; <Link to="/">Edit</Link>
                  </span>
                </div>
                <br />
              </div>
              <div>
                {listofChapter.map((val) => {
                  return (
                    <div key={val.id} id={val.id}>
                      {/* {setSomeId(val.id)} */}
                      <div
                        className={`border-t-2 border-fuchsia-600 p-5 ${
                          videoDetails.videoProgress === 1
                            ? "bg-red-200"
                            : "bg-white"
                        } cursor-pointer`}
                        onClick={async () =>{
                          const
                        }}
                      >
                        <img
                          src={checkIcon}
                          alt="...."
                          className="inline-block"
                        />
                        <p className="inline-block">
                          &nbsp; {val.chapter_name}
                        </p>
                        <p className="text-sm text-gray-600 pl-7">Video</p>
                        <button onClick={handleClick}>click me</button>
                      </div>
                    </div>

                    // <Chapters
                    //   key={val.id}
                    //   chapterName={val.chapter_name}
                    //   id={val.id}
                    //   onClick={chapterDetails}
                    // />
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
