import React, { useState, useEffect } from "react";

// React-Flip-Move
import FlipMove from "react-flip-move";

// Icons
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  PostAdd,
  Subscriptions,
} from "@material-ui/icons";

// Components
import InputOption from "./InputOption";
import Post from "./Post";

// Css
import "../../styles/Feed/Feed.css";

// Firebase
import { db } from "../../firebase";
import firebase from "firebase";

// Redux
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption
            onClick={sendPost}
            Icon={PostAdd}
            title="Post"
            color="#ac66cc"
          />
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* Post */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={!!photoUrl ? photoUrl : name[0]}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
