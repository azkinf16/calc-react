import React from "react";
import "./Buttons.css";

export default function Buttons(props) {
  const { content, onButtonClick, type } = props;
  return (
    <div className={`Button ${content === "0" ? "zero" : ""} ${type || ""}`} 
    onClick={onButtonClick(content)}>
      {content}
    </div>
  );
}
