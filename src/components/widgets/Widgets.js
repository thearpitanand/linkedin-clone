import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";

// CSS
import "../../styles/widgets/Widgets.css";

const widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h2>{heading}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("Arpit Anand created linked In Clone","Top News - 990829 readers")}
      {newsArticle("Follow Arpit Anand on Linked In thearpitanand","Top News - 290899 readers")}
      {newsArticle("Bitcoin to be worth more than $500,000 in 2030","Crypto - 82999 readers")}
      {newsArticle("Is Redux too good?","Code - 290899 readers")}
      {newsArticle("Microsoft’s WinGet 1.0 released for real: Here’s why you want it","Terminal - 290819 readers")}
      {newsArticle("What’s the Diff: Programs, Processes, and Threads","Operating System - 2908 readers")}
    </div>
  );
};

export default widgets;
