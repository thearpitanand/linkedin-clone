import { Avatar } from "@material-ui/core";
import "../../styles/header/HeaderOption.css";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={avatar}>
          {avatar}
        </Avatar>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
