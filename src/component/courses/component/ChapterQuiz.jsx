import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { checkAnswer, fetchquiz } from "../../../api";
import checkIcon from "../../../assets/img/check-mark.svg";
import Sidebar from "../../sidebar/Sidebar";
// import Sidebar from "../../sidebar/Sidebar";

function ChapterQuiz() {
  const { id:jandeyrr } = useParams();
  console.log("hehehe this is chpater idfor you", jandeyrr);

  const currentUser = useSelector((state)=> state.user.currentUser)

  const [chapterQuestion, setChapterQuestion] = useState("");
  const [questionOptions, setQuestionOptions] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState();
  const [progressPercent, setProgressPercent] = useState();
  const [arrId, setArrId] = useState(0);
  const [questionId, setQuestionId] = useState();
  const [selectedOptions, setSelectedOptions] = useState();

  const handleNext = () => {
    setArrId(1);
    setSelectedOptions(questionId + ":" + selectedOptions +"," + questionId + ":" + localStorage.getItem(`testAnswer ${questionId}`))
    console.log(selectedOptions);
    // const selectedOption = localStorage.getItem(`testAnswer ${questionId}`)
    loadQuiz()
  };

  const handleSubmit = async() => {
    // const testOption = `${questionId}:${selectedOption},${questionId}:${selectedOption}`
    const chapterId = jandeyrr

    const data = new FormData();
    data.append("user_id", currentUser.user_id)
    data.append("chapter_id", chapterId)
    data.append("answers", selectedOptions)
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
    await fetchquiz(jandeyrr).then((response) => {
      if (response.data.data) {
        setTotalQuestions(response.data?.data.length);
      setQuestionId(response.data?.data[arrId].id)
      setChapterQuestion(response.data?.data[arrId].question);
      const variationData = JSON.parse(
        response.data?.data[arrId].options.replace(/'/g, '"')
      );
      setQuestionOptions(variationData);
      const per = (arrId+1 / totalQuestions) * 100;
      setProgressPercent(per);
      } else{
        alert("no quiz added")
      }
    });
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
          <p className="text-blue-800">Completed {arrId} of {totalQuestions}</p>
          <div className="md:text-2xl text-md font-bold py-5">
            {chapterQuestion}
          </div>
          <div className="relative pt-1 lf:w-96">
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
          </div>
          {questionOptions.map((val) => {
            return (
              <div
                className="mt-5 hover:bg-gray-200  p-5 rounded-full curser-pointer"
                key={val}
                onClick={() => localStorage.setItem(`testAnswer ${questionId}`, val)}
              >
                
                  <img src={checkIcon} alt="...." className="inline-block" />
                  &nbsp; {val}
                </div>
              
            );
          })}
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
