import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./layout/Admin";
import Auth from "./layout/Auth";
import SignupScreen from "./layout/SignupScreen";
import MyAddress from "./component/MyAddress";
import ForgetPassword from "./layout/ForgetPassword";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Courses from "./component/courses/Courses";
import AboutCourse from "./component/courses/component/AboutCourse";
import ChapterVideo from "./component/chapter/ChapterVideo";
import Dashboard from "./component/dashboard/Dashboard";
import TabsRender from "./component/chapter/TrialComp";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserAction } from "./redux/actions/authActions";
import Certificate from "./component/certificate/export-pdf.component";
import ChapterQuiz from "./component/courses/component/ChapterQuiz";
import Trialcomp from "./component/chapter/TrialComp";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAction());
  }, []);
  return (
    <>
      {!currentUser ? (
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/signup" component={SignupScreen} />
          <Route exact path="/forgetpassword" component={ForgetPassword} />
        </Switch>
      ) : (
        <>
          <Navbar />
          <Switch>
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/profile/myaddress" component={MyAddress} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/courses/aboutcourse" component={AboutCourse} />
            <Route exact path="/courses/chapterquiz/:id" component={ChapterQuiz}/>
            <Route
              exact
              path="/courses/chaptervideo/:id"
              component={ChapterVideo}
            />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/certificate" component={Certificate}/>
            {/* <Redirect exact from="/" to="/dashboard"/> */}
           
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
