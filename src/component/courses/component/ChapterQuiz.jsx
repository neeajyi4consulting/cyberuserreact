import React, { useEffect, useState } from "react";
import checkIcon from "../../../assets/img/check-mark.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { checkResult, checkScore, getQuiz } from "../../../redux/actions/courseAction";
import Sidebar from "../../sidebar/Sidebar";
import { Link } from "react-router-dom";

export default function ChapterQuiz() {
  const { id } = useParams();
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const quizResult = useSelector((state) => state.course.quizResult);
  const scores = useSelector((state) => state.course?.score);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const quizData = useSelector((state) => state.course.courseQuiz);
  const testOption = quizData[currentQuestion].options.split(",");


  const [showScore, setShowScore] = useState(false);
  const [isPassed, setIsPassed] = useState(false);
  const [finalSubmit, setFinalSubmit] = useState(true);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = async(val) => {
    const courseId = +id;
    const questionId = quizData[currentQuestion].id;
    const answers = [questionId] + ":" +val
    const data = new FormData();
    data.append("user_id", currentUser.user_id);
    data.append("course_id", courseId);
    data.append("answers", answers);
    console.log(answers);
    dispatch(checkResult(data))
    if (quizResult?.data[0]?.score==1) {
      console.log(+quizResult?.data[0]?.score);
      dispatch(checkScore((+quizResult?.data[0]?.score)+scores))
      setScore(score + 1);
      if (scores<2) {
        setIsPassed(false)
      } else {
        setIsPassed(true)
      }
      
    }

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
          <span className="text-red-500 font-bold text-sm">DO NOT REFRESH THIS PAGE</span>
          
        </div>
        <div className="mt-5 md:mx-16 rounded-md bg-white p-10 pb-20">
          {finalSubmit?(
            <button className="bg-red-600 p-3 rounded-lg text-white hover:bg-red-500" onClick={()=>{setFinalSubmit(false)}}>Submit your Quiz</button>
          ):(
            <div>
            <div className="text-4xl text-center my-12">
          You scored <span className="text-blue-500"> {score}</span> out of <span className="text-green-600">{quizData.length}</span>
        </div>
        {/* <div className="text-4xl text-center my-12">
          Your Result is <span className="text-blue-500"> {resultPercent}</span> out of <span className="text-green-600">100</span>
        </div> */}
        <div className="text-center mb-10 mt-40">
          <Link to={isPassed?"/certificate":"/dashboard"} className="bg-red-600 p-3 rounded-lg text-white hover:bg-red-500">{isPassed?"Download Certificate":"Go To Home"}</Link>
        </div>
        </div>
          )}
          
        {/* <div className="text-4xl text-center my-12">
          You scored <span className="text-blue-500"> {score}</span> out of <span className="text-green-600">{quizData.length}</span>
        </div>
        <div className="text-4xl text-center my-12">
          Your Result is <span className="text-blue-500"> {resultPercent}</span> out of <span className="text-green-600">100</span>
        </div>
        <div className="text-center mb-10 mt-40">
          <Link to={true?"/certificate":"/dashboard"} className="bg-red-600 p-3 rounded-lg text-white hover:bg-red-500">{true?"Download Certificate":"Go To Home"}</Link>
        </div> */}
        </div>
      </div>
      ) : (
        <>
          <div className="bg-gray-200 pt-5  z-50">
            <div className="bg-white px-5 py-3 mx-16 rounded-lg hidden md:block">
              <span className="font-bold text-2xl mx-8">Course Quiz</span>
              <span className="text-red-500 font-bold text-sm">DO NOT REFRESH THIS PAGE</span>
              
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
                    onClick={()=>{handleAnswerOptionClick(val)}}
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
