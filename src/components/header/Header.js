// CSS
import "../../styles/header/Header.css";

// Icons
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import {
  BusinessCenter,
  Chat,
  ExitToApp,
  Notifications,
} from "@material-ui/icons";

// Components
import HeaderOption from "./HeaderOption";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutFromApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header" style={{ display: !user ? "none" : "" }}>
      <div className="header__left">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt="Linked In"
        />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notification" />
        <HeaderOption
          avatar={
            !!user
              ? !!user.photoUrl
                ? user.photoUrl
                : user.displayName[0]
              : ""
          }
          title="Me"
        />
        <HeaderOption
          Icon={ExitToApp}
          onClick={logoutFromApp}
          title="Log Out"
        />
      </div>
    </div>
  );
};

export default Header;
