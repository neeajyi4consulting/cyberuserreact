import React, { useEffect, useState } from "react";
import checkIcon from "../../assets/img/check-mark.svg";
import { Link } from "react-router-dom";
import Vimeo from "@u-wave/react-vimeo";
import Sidebar from "../sidebar/Sidebar";
import { useParams } from "react-router";
import {
  changeChapterStatus,
  fetchChapterClientList,
  getChapterDetails,
  getChapterList,
} from "../../api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCourseDetails, getChapterClientList, getQuiz } from "../../redux/actions/courseAction";
import { changeStatusOfChapter, chapterStatus } from "../../redux/actions/chapterAction";

function ChapterVideo() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [chapterList, setChapterList] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [chapterId, setChapterId] = useState();
  const [chapterName, setChapterName] = useState("");
  const [chapterLink, setChapterLink] = useState("https://vimeo.com/603867023");
  const [chapterAbout, setChapterAbout] = useState("");
  const [status, setStatus] = useState();
  const [seconds, setSeconds] = useState(0);
  const [totalVideoLength, setTotalVideoLength] = useState();

  // const array = [ {id:23}, {id:45}, {id:67}, {id:89}, {id:12} ]
  // const largerThanSixty = array.filter( number => { 
  //   return number.id > 60
  // })
  // console.log(largerThanSixty);
  const loading = useSelector((state)=> state.course?.loading)
  const currentUser = useSelector((state) => state.user?.currentUser);
  const statusOfChapter = useSelector((state)=> state.chapter?.chapterStatus);
  const chapterClientList = useSelector((state)=>state.course?.chapterClientList);
  

  const fetchChapterList = async (id) => {
    const response = await getChapterList(id);
    setCourseName(response.data?.data[0]?.course.course_title);
    // setChapterList(response.data?.data);
  };

  const handleVideoPlay = async () => {
    const data = new FormData();
    data.append("user_id", currentUser.user_id);
    data.append("chapter_id", chapterId);
    data.append("status", status);
    data.append("completedVideoLenght", seconds);
    data.append("totalVideoLength", totalVideoLength);
    dispatch(changeStatusOfChapter(data))
  };

  const handleClick = async (val) => {
    setChapterId(val.id);
    const response = await getChapterDetails(val.id);
    setChapterName(response.data?.data?.chapter_name);
    setChapterLink(response.data?.data?.link);
    setChapterAbout(response.data?.data?.about);
    const data = new FormData();
    data.append("user_id", currentUser?.user_id);
    data.append("chapter_id", val.id);
    dispatch(chapterStatus(data))
    console.log(statusOfChapter?.is_completed);
    
  }

  const getClientChapterList = async () =>{
    const data = new FormData();
    data.append("user_id", currentUser?.user_id);
    data.append("course_id", id);
    dispatch(getChapterClientList(data))
  
    // console.log(chapterClientList[0]?.name?.id);
  }
  
 

  

  useEffect(() => {
    getClientChapterList();
   
    fetchChapterList(id);
    fetchCourseDetails(id);
    
    dispatch(getQuiz(id))
  }, []);

 
if (loading) {
  return ( <div class="flex h-screen w-screen justify-center items-center">
  <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
  <div>&nbsp;&nbsp;&nbsp;please wait</div>
</div>)
} 

  return (
    <>
      <Sidebar />
      <div className="bg-gray-200 pt-8">
        <div className="bg-white px-5 py-3 mx-16 rounded-lg hidden md:block">
          <span className="font-bold text-2xl mx-8">
            {" "}
            {chapterName ? chapterName : courseName}
            
          </span>
          <span className="float-right ">Home / Dashboard</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:mx-16 mt-10">
          <div className="bg-white  relative col-span-2">
            <div>
              <Vimeo
                video={chapterLink}
                height="600px"
                width="900px"
                responsive
                // onEnd={}
                onTimeUpdate={(response) => {
                  setStatus(response.percent);
                  setSeconds(response.seconds);
                  setTotalVideoLength(response.duration);
                  handleVideoPlay();
                }}
              />
            </div>
            <div className="h-auto border-b-1 border-gray-700 shadow-md bg-white grid grid-cols-1 md:grid-cols-5">
              <Link
                to="/"
                className="text-blue-400 mx-3 py-4 px-8 border-b-2 border-blue-400"
              >
                About
              </Link>
              <Link
                to={`/courses/chapterquiz/${id}`}
                
                className={`text-gray-700 mx-3 py-4 px-8 relative has-tooltip  ${
                  true ? "cursor-not-allowed" : ""
                }`}
              >
                {/* <span className="mt-8 tooltip rounded shadow-lg p-1 text-sm bg-gray-100 text-red-500 w-48 absolute top-12 -left-10 ">
                  "Sorry, Quiz is not available yet, You need to have 80% of the
                  chapter at least completed."
                </span> */}
                Quiz
              </Link>
            </div>
            <div className="bg-white">
              <p className="p-5">About This Course</p>
              <p className="text-gray-500 px-5 py-2 h-auto">{chapterAbout}</p>
            </div>
          </div>
          <div>
            <div className="bg-white">
              <div className="p-5">
                <p className="text-lg font-bold">Chapters In This Course</p>
                {/* <div className="relative pt-1 ">
                  <div className="overflow-hidden h-1 w-auto mr-12 mb-4 text-xs flex rounded bg-gray-200 ">
                    <div
                      style={{ width: `30%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-800"
                    ></div>
                  </div>
                  <p className="float-right -mt-8 ">30%</p>
                </div> */}
                {/* <div className="text-sm bg-pink-900 text-white p-2 h-16 md:h-auto">
                  Target: 1 Aug 2021 To 10 Sept 2021{" "}
                  <span className="border-r-1 border-red-500 float-right">
                    40 Days &nbsp; <Link to="/">Edit</Link>
                  </span>
                </div> */}
                {/* <br /> */}
              </div>
              <div>
                {!chapterClientList? null : chapterClientList.map((val) => {
                  return (
                    <div key={val?.name?.id}>
                      <div
                        className={`border-t-2 border-fuchsia-600 p-5  cursor-pointer ${val?.is_completed?"bg-red-400":"bg-white"} `}
                        onClick={()=>
                         
                          handleClick(val)}
                      >
                        {/* <img
                          src={checkIcon}
                          alt="...."
                          className="inline-block"
                        /> */}
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
