import { Avatar } from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "../../styles/sidebar/Sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  const groupItem = (topic) => (
    <div className="sidebar__group">
      <GroupIcon className="sidebar_groupIcon" />
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt=""
        />
        <Avatar
          className="sidebar__avatar"
          src={!!user && !!user.photoUrl ? user.photoUrl : user.displayName[0]}
        >
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">1,400</p>
        </div>
      </div>
      <div className="sidebar__button">
        <p>Recent</p>
        {recentItem("reactJs")}
        {recentItem("programing")}
        {recentItem("nodejs")}
        {recentItem("design")}
        {recentItem("developer")}
        {recentItem("javascript")}
        <p className="sidebar__buttonGroupTitle">Groups</p>
        {groupItem("React js")}
        {groupItem("Developers")}
        {groupItem("Full Stack Developer")}
        {groupItem("Front End Developer")}
        {groupItem("Back End Developer")}
      </div>
    </div>
  );
};

export default Sidebar;
