import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.scss";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      desc: "Love this energy! Keep pushing for greatness. 💯",
      name: "Wang Yi Bo",
      userId: 1,
      profilePicture:
        "https://i.pinimg.com/564x/ff/58/07/ff5807af56f44029982bf8c578de338b.jpg",
    },
    {
      id: 2,
      desc: "You're already setting yourself up for success with this attitude! 🚀",
      name: "Huang Jing Yu",
      userId: 3,
      profilePicture:
        "https://i.pinimg.com/564x/80/07/46/800746be2a277f65d059e7d53bec2723.jpg",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1hr ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
