import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import IPhone144Button from "./components/IPhone144Button";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|iphone-14-4-button)">
          <IPhone144Button {...iPhone144ButtonData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const iPhone144ButtonData = {
    hlal1: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/arrow-4@2x.png",
    text12: "مصحح التلاوة :",
    spanText1: "قال رسول الله",
    spanText2: <React.Fragment>   <br /></React.Fragment>,
    spanText3: "( يقال لصاحب القرآن: اقرأ وارتق ورتل, كما كنت ترتل في الدنيا, فإن منزلك عند آخر آية تقرؤها )",
    spanText4: ".",
    text13: "تسجيل",
    text14: "تشغيل",
    text15: "توقف",
};

