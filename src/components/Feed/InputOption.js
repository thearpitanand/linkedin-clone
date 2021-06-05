import React from "react";

// CSS
import "../../styles/Feed/InputOption.css";

const InputOption = ({ onClick, Icon, title, color }) => {
  return (
    <div onClick={onClick} className="inputOption">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOption;
