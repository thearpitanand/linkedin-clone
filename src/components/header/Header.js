// CSS
import "../../styles/header/Header.css";

// Icons
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { BusinessCenter, Chat, Notifications } from "@material-ui/icons";

// Components
import HeaderOption from "./HeaderOption";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt="Linked In"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notification" />
        <HeaderOption
          avatar="https://media-exp1.licdn.com/dms/image/C4E03AQEVVphnmICMIQ/profile-displayphoto-shrink_800_800/0/1597674671926?e=1628121600&v=beta&t=a3KZrJlWJkxSH1mbR4XNDsqqMGwCr1Tf9j-5inJKb94"
          title="Me"
        />
      </div>
    </div>
  );
};

export default Header;
