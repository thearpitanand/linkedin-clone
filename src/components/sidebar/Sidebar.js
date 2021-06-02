import { Avatar } from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import React from "react";
import "../../styles/sidebar/Sidebar.css";

const Sidebar = () => {
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
          src="https://media-exp1.licdn.com/dms/image/C4E03AQEVVphnmICMIQ/profile-displayphoto-shrink_800_800/0/1597674671926?e=1628121600&v=beta&t=a3KZrJlWJkxSH1mbR4XNDsqqMGwCr1Tf9j-5inJKb94"
        />
        <h2>Arpit Anand</h2>
        <h4>arpitssanand@gmail.com</h4>
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
