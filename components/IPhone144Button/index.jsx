import React from "react";
import Notification from "../Notification";
import Button from "../Button";
import "./IPhone144Button.css";

function IPhone144Button(props) {
  const { hlal1, text12, spanText1, spanText2, spanText3, spanText4, text13, text14, text15 } = props;

  return (
    <div className="container-center-horizontal">
      <form className="iphone-14-4-button screen" name="form2" action="form2" method="post">
        <div className="overlap-group1">
          <Notification />
          <a href="javascript:SubmitForm('form2')">
            <img
              className="ellipse-19"
              src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/ellipse-18@2x.png"
              alt="Ellipse 19"
            />
          </a>
          <img className="arrow-5" src={hlal1} alt="Arrow 5" />
        </div>
        <div className="overlap-group">
          <Button />
          <h1 className="text-1">{text12}</h1>
          <img
            className="hlal-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c22bc18a727f7c0ccc704/img/hlal-1@2x.png"
            alt="Hlal 1"
          />
          <img
            className="vector-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-1-1@2x.png"
            alt="Vector 1"
          />
          <div className="rectangle-5"></div>
          <div className="rectangle-6"></div>
          <div className="rectangle-7"></div>
          <div className="rectangle-8"></div>
          <div className="group-5">
            <div className="rectangle-2"></div>
            <div className="rectangle-3"></div>
            <div className="rectangle-11"></div>
            <div className="rectangle-9"></div>
          </div>
          <img
            className="vector"
            src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-30@2x.png"
            alt="Vector"
          />
          <img
            className="vector-2"
            src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-31@2x.png"
            alt="Vector"
          />
          <img
            className="vector-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-32@2x.png"
            alt="Vector"
          />
          <p className="text-3">
            <span className="notosansarabic-normal-spring-wood-14px">{spanText1}</span>
            <span className="span1">{spanText2}</span>
            <span className="notosansarabic-normal-spring-wood-14px">{spanText3}</span>
            <span className="span3">{spanText4}</span>
          </p>
          <img
            className="group-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/group-3.png"
            alt="Group 3"
          />
          <div className="text-4 notosansarabic-normal-black-12px">{text13}</div>
          <div className="text-5 notosansarabic-normal-black-12px">{text14}</div>
          <div className="text-6 notosansarabic-normal-black-12px">{text15}</div>
        </div>
      </form>
    </div>
  );
}

export default IPhone144Button;
