import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const stories = [
    {
      id: 1,
      name: "Lin Yi",
      img: "https://i.pinimg.com/736x/b6/bd/0c/b6bd0cb7dcf857d611a9c5aad5daa251.jpg",
    },
    {
      id: 2,
      name: "Huang Jing Yu",
      img: "https://i.pinimg.com/564x/80/07/46/800746be2a277f65d059e7d53bec2723.jpg",
    },
    {
      id: 3,
      name: "Wang Yi Bo",
      img: "https://i.pinimg.com/564x/ff/58/07/ff5807af56f44029982bf8c578de338b.jpg",
    },
    {
      id: 4,
      name: "Xiao Zhan",
      img: "https://i.pinimg.com/564x/6d/7b/ef/6d7bef906abecf876211bc48b8a29817.jpg",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
