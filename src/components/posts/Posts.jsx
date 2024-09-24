import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Wang Yi Bo",
      userId: 1,
      profilePic:
        "https://i.pinimg.com/564x/ff/58/07/ff5807af56f44029982bf8c578de338b.jpg",
      desc: "Never tell your feelings to anyone. Nobody truly cares.",
      img: "https://i.pinimg.com/564x/88/b6/58/88b6583a34a31a483b384544177cbd15.jpg",
    },
    {
      id: 2,
      name: "Xiao Zhan",
      userId: 2,
      profilePic:
        "https://i.pinimg.com/564x/6d/7b/ef/6d7bef906abecf876211bc48b8a29817.jpg",
      desc: "If you can do it, so can I. And I will do it even better.",
      img: "https://i.pinimg.com/564x/2e/57/ef/2e57efb7df72fa43f6f15c87951e4a5a.jpg",
    },
    {
      id: 3,
      name: "Huang Jing Yu",
      userId: 3,
      profilePic:
        "https://i.pinimg.com/564x/80/07/46/800746be2a277f65d059e7d53bec2723.jpg",
      desc: "We believe in miracles, but we also believe in creating miracles for ourselves. It is matter!",
      img: "https://i.pinimg.com/736x/0e/de/42/0ede42e51e4a4631ff5b66ff6a50258a.jpg",
    },
    {
      id: 4,
      name: "Dilireba",
      userId: 4,
      profilePic:
        "https://i.pinimg.com/564x/e5/3b/79/e53b7955a9992a44440bdc1b88dde0a8.jpg",
      desc: "Beauty and brains, pleasure and usability - they should go hand in hand.",
      img: "https://i.pinimg.com/736x/a6/3d/76/a63d76485d166a3f1ecca3306e01b6a9.jpg",
    },
    {
      id: 5,
      name: "Lin Yi",
      userId: 5,
      profilePic:
        "https://i.pinimg.com/564x/62/6b/0d/626b0dc346546ef2fcd553e1ec576276.jpg",
      desc: "Our love is indestructable. You're my soft spot.",
      img: "https://i.pinimg.com/564x/91/61/9c/91619c2a7b3d0b5789b3fec142a532f6.jpg",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
