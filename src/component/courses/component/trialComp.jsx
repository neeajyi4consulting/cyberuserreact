import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { checkAnswer, fetchquiz } from "../../../api";
import checkIcon from "../../../assets/img/check-mark.svg";
import Sidebar from "../../sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { getQuiz } from "../../../redux/actions/courseAction";
// import Sidebar from "../../sidebar/Sidebar";

function ChapterQuiz() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const quizData = useSelector((state)=>state.course.courseQuiz)
  
  let arrId = 0;
  
  const currentUser = useSelector((state)=> state.user.currentUser)
  
  
  const variationData = JSON.parse(
        quizData[currentQuestion].options.replace(/'/g, '"')
      );
  const [chapterQuestion, setChapterQuestion] = useState("");
  const [questionOptions, setQuestionOptions] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState();
  const [progressPercent, setProgressPercent] = useState();
  // const [arrId, setArrId] = useState(0);
  const [questionId, setQuestionId] = useState();
  const [selectedOptions, setSelectedOptions] = useState();

  const handleNext = () => {
    arrId++
    // setArrId(1);
    console.log(selectedOptions);

    setSelectedOptions(questionId + ":" + selectedOptions +"," + questionId + ":" + localStorage.getItem(`testAnswer ${questionId}`))
    console.log(selectedOptions);
    // const selectedOption = localStorage.getItem(`testAnswer ${questionId}`)
    loadQuiz()
  };

  const handleSubmit = async() => {

    const data = new FormData();
    data.append("user_id", currentUser.user_id)
    data.append("course_id", id)
    data.append("answers", selectedOptions)
    console.log();
    await checkAnswer(data)
    .then((response)=>{
      alert("Your Score is: "+ response.data?.data[0].score )
      console.log("this is response", response.data);
    })
    .catch((error)=>{
      console.log("this is error", error);
    })
  }

  const loadQuiz = async () => {
    dispatch(getQuiz(id))
    // await fetchquiz(id).then((response) => {
    //   if (response.data.data) {
    //     setTotalQuestions(response.data?.data.length);
    //   setQuestionId(response.data?.data[arrId].id)
    //   setChapterQuestion(response.data?.data[arrId].question);
    //   const variationData = JSON.parse(
    //     response.data?.data[arrId].options.replace(/'/g, '"')
    //   );
    //   setQuestionOptions(variationData);
    //   const per = (arrId+1 / totalQuestions) * 100;
    //   setProgressPercent(per);
    //   } else{
    //     alert("no quiz added")
    //   }
    // });
  };

  useEffect(() => {
    loadQuiz();
  }, []);
  return (
    <>
    <Sidebar/>
      <div className="bg-gray-200 pt-28 z-50">
        <div className="bg-white px-5 py-3 mx-16 rounded-lg hidden md:block">
          <span className="font-bold text-2xl mx-8">Course Quiz</span>
          <span className="text-blue-500 text-sm">
            Number of Questions {totalQuestions}
          </span>
          <span className="float-right ">Home / Dashboard / Course Quiz</span>
        </div>
        <div className="mt-5 md:mx-16 rounded-md bg-white p-10 pb-20">
          {/* <p className="text-blue-800">Completed {arrId} of {totalQuestions}</p> */}
          <div className="md:text-2xl text-md font-bold py-5">
            {quizData[currentQuestion].question}
          </div>
          {/* <div className="relative pt-1 lf:w-96">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
              <div
                style={{
                  width: `${progressPercent}%`,
                  background:
                    "linear-gradient(to right, #0675dc 0%, #8e1259 100%)",
                }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
              ></div>
            </div>
          </div> */}    
          {variationData.map((val)=>{
            return(
              <div
                className="mt-5 hover:bg-gray-200  p-5 rounded-full curser-pointer"
                key={val.id}
                // onClick={() => localStorage.setItem(`testAnswer ${questionId}`, val)}
              >
                
                  <img src={checkIcon} alt="...." className="inline-block" />
                  &nbsp; {val}
                </div>
            )
          })}
          {/* {quizData[0].options.map((val) => {
            return (
              <div
                className="mt-5 hover:bg-gray-200  p-5 rounded-full curser-pointer"
                key={val.id}
                onClick={() => localStorage.setItem(`testAnswer ${questionId}`, val)}
              >
                
                  <img src={checkIcon} alt="...." className="inline-block" />
                  &nbsp; {val}
                </div>
              
            );
          })} */}
          {/* <div className="mt-5 hover:bg-gray-200 p-5 rounded-full">
            <img src={checkIcon} alt="...." className="inline-block" />
            &nbsp; Trozan
          </div> */}

          {/* <button onClick={()=>{alert("hello")}} className="bg-red-500 text-white p-3 rounded-lg mt-5">Next</button> */}
          <button className={`bg-red-500 text-white p-3 rounded-lg mt-3 ${false ? "cursor-not-allowed hover:text-gray-200" : ""}`} onClick={handleSubmit}>Submit</button>
          <button onClick={handleNext} className="float-right bg-red-500 text-white p-3 rounded-lg mt-3"  >Next</button>
        </div>
      </div>
    </>
  );
}

export default ChapterQuiz;





// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { useSelector } from "react-redux";
// import { checkAnswer, fetchquiz } from "../../../api";
// import checkIcon from "../../../assets/img/check-mark.svg";
// import Sidebar from "../../sidebar/Sidebar";
// import { useDispatch } from "react-redux";
// import { getQuiz } from "../../../redux/actions/courseAction";
// // import Sidebar from "../../sidebar/Sidebar";

// function ChapterQuiz() {
//   const { id } = useParams();
//   const dispatch = useDispatch()

//   let arrId = 0;

//   const currentUser = useSelector((state)=> state.user.currentUser)
//   const quizData = useSelector((state)=>state.course.courseQuiz)
//   console.log();

//   const [chapterQuestion, setChapterQuestion] = useState("");
//   const [questionOptions, setQuestionOptions] = useState([]);
//   const [totalQuestions, setTotalQuestions] = useState();
//   const [progressPercent, setProgressPercent] = useState();
//   // const [arrId, setArrId] = useState(0);
//   const [questionId, setQuestionId] = useState();
//   const [selectedOptions, setSelectedOptions] = useState();

//   const handleNext = () => {
//     arrId++
//     // setArrId(1);
//     console.log(selectedOptions);
//     setSelectedOptions(questionId + ":" + selectedOptions +"," + questionId + ":" + localStorage.getItem(`testAnswer ${questionId}`))
//     console.log(selectedOptions);
//     // const selectedOption = localStorage.getItem(`testAnswer ${questionId}`)
//     loadQuiz()
//   };

//   const handleSubmit = async() => {

//     const data = new FormData();
//     data.append("user_id", currentUser.user_id)
//     data.append("course_id", id)
//     data.append("answers", selectedOptions)
//     console.log();
//     await checkAnswer(data)
//     .then((response)=>{
//       alert("Your Score is: "+ response.data?.data[0].score )
//       console.log("this is response", response.data);
//     })
//     .catch((error)=>{
//       console.log("this is error", error);
//     })
//   }

//   const loadQuiz = async (courseId) => {
//     dispatch(getQuiz(courseId))
//     // const variationData = JSON.parse(
//     //   quizData[0].options.replace(/'/g, '"')
//     // );
//     setQuestionOptions(quizData[0].options)
//     console.log();
//     // console.log("data", quizData);
//     // await fetchquiz(id).then((response) => {
//     //   if (response.data.data) {
//     //     setTotalQuestions(response.data?.data.length);
//     //   setQuestionId(response.data?.data[arrId].id)
//     //   setChapterQuestion(response.data?.data[arrId].question);
//     //   const variationData = JSON.parse(
//     //     response.data?.data[arrId].options.replace(/'/g, '"')
//     //   );
//     //   setQuestionOptions(variationData);
//     //   const per = (arrId+1 / totalQuestions) * 100;
//     //   setProgressPercent(per);
//     //   } else{
//     //     alert("no quiz added")
//     //   }
//     // });
//   };

//   useEffect(() => {
//     loadQuiz(id)
//   }, []);
//   return (
//     <>
//     <Sidebar/>
//       <div className="bg-gray-200 pt-28 z-50">
//         <div className="bg-white px-5 py-3 mx-16 rounded-lg hidden md:block">
//           <span className="font-bold text-2xl mx-8">Course Quiz</span>
//           <span className="text-blue-500 text-sm">
//             Number of Questions {totalQuestions}
//           </span>
//           <span className="float-right ">Home / Dashboard / Course Quiz</span>
//         </div>
//         <div className="mt-5 md:mx-16 rounded-md bg-white p-10 pb-20">
//           <p className="text-blue-800">Completed {arrId} of {totalQuestions}</p>
//           <div className="md:text-2xl text-md font-bold py-5">
//             {quizData[0].question}
//           </div>
//           <div className="relative pt-1 lf:w-96">
//             <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
//               <div
//                 style={{
//                   width: `${progressPercent}%`,
//                   background:
//                     "linear-gradient(to right, #0675dc 0%, #8e1259 100%)",
//                 }}
//                 className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
//               ></div>
//             </div>
//           </div>
//           {/* {questionOptions.map((val) => {
//             return (
//               <div
//                 className="mt-5 hover:bg-gray-200  p-5 rounded-full curser-pointer"
//                 key={val}
//                 onClick={() => localStorage.setItem(`testAnswer ${questionId}`, val)}
//               >
                
//                   <img src={checkIcon} alt="...." className="inline-block" />
//                   &nbsp; {val}
//                 </div>
              
//             );
//           })} */}
//           {/* <div className="mt-5 hover:bg-gray-200 p-5 rounded-full">
//             <img src={checkIcon} alt="...." className="inline-block" />
//             &nbsp; Trozan
//           </div> */}

//           {/* <button onClick={()=>{alert("hello")}} className="bg-red-500 text-white p-3 rounded-lg mt-5">Next</button> */}
//           <button className={`bg-red-500 text-white p-3 rounded-lg mt-3 ${false ? "cursor-not-allowed hover:text-gray-200" : ""}`} onClick={handleSubmit}>Submit</button>
//           <button onClick={handleNext} className="float-right bg-red-500 text-white p-3 rounded-lg mt-3"  >Next</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ChapterQuiz;



import React, { useEffect, useState } from "react";
import checkIcon from "../../../assets/img/check-mark.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { checkResult, getQuiz } from "../../../redux/actions/courseAction";
import Sidebar from "../../sidebar/Sidebar";
import { Link } from "react-router-dom";

export default function ChapterQuiz() {
  const { id } = useParams();
  const currentUser = useSelector((state) => state.user.currentUser);
  const quizResult = useSelector((state) => state.course.quizResult);

  const dispatch = useDispatch();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const quizData = useSelector((state) => state.course.courseQuiz);
  const testOption = quizData[currentQuestion].options.split(",");
  const [selectedOptions, setSelectedOptions] = useState();



  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (val) => {
    const questionId = quizData[currentQuestion].id;
    setSelectedOptions(questionId + ":" + selectedOptions +"," + questionId + ":" + localStorage.getItem(`testAnswer ${questionId}`))
    const courseId = +id;
    const answers = [16, " check three"]
    //  {[questionId]:val}
    answers[questionId] = val
    const data = new FormData();
    data.append("user_id", currentUser.user_id);
    data.append("course_id", courseId);
    data.append("answers", selectedOptions);
    console.log(answers);
    dispatch(checkResult(data))
    console.log("quiz Result",quizResult);
    // if (true) {
    //   setScore(score + 1);
    // }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    getQuiz(id);
  }, []);
  return (
    <div className="app">
      <Sidebar />
      {showScore ? (
        <div className="bg-gray-200 pt-5  z-50">
        <div className="bg-white px-5 py-3 mx-16 rounded-lg hidden md:block">
          <span className="font-bold text-2xl mx-8">Course Quiz</span>
          {/* <span className="text-blue-500 text-sm">test value</span> */}
          <span className="float-right ">
            Home / Dashboard / Course Quiz
          </span>
        </div>
        <div className="mt-5 md:mx-16 rounded-md bg-white p-10 pb-20">
          
          
        <div className="text-4xl text-center my-12">
          You scored <span className="text-blue-500"> {score}</span> out of <span className="text-green-600">{quizData.length}</span>
        </div>
        <div className="text-center mb-10 mt-40">
          <Link to={false?"/certificate":"/dashboard"} className="bg-red-600 p-3 rounded-lg text-white hover:bg-red-500">{false?"Download Certificate":"Go To Home"}</Link>
        </div>
        </div>
      </div>
      ) : (
        <>
          <div className="bg-gray-200 pt-5  z-50">
            <div className="bg-white px-5 py-3 mx-16 rounded-lg hidden md:block">
              <span className="font-bold text-2xl mx-8">Course Quiz</span>
              {/* <span className="text-blue-500 text-sm">test value</span> */}
              <span className="float-right ">
                Home / Dashboard / Course Quiz
              </span>
            </div>
            <div className="mt-5 md:mx-16 rounded-md bg-white p-10 pb-20">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{quizData.length}
              </div>

              <div className="md:text-2xl text-md font-bold py-5">
                {quizData[currentQuestion].question}
              </div>
              <div className="answer-section">
                {testOption.map((val) => (
                  <div
                    onClick={()=>{ 
                      localStorage.setItem(`testAnswer ${quizData[currentQuestion].id}`, val)
                      handleAnswerOptionClick(val)}}
                    className="mt-5 hover:bg-gray-200  p-5 rounded-full curser-pointer"
                  >
                    <img src={checkIcon} alt="...." className="inline-block" />{" "}
                    &nbsp;{val}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="question-section">
            <div className="mt-5 md:mx-16 rounded-md bg-white p-10 pb-20">
             
            </div>
          </div> */}
        </>
      )}
    </div>
  );
}

{
  /**onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} */
}
