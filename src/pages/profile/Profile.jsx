import React from "react";
import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/237718/pexels-photo-237718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="cover"
        />
        <img
          src="https://i.pinimg.com/564x/6d/7b/ef/6d7bef906abecf876211bc48b8a29817.jpg"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://facebook.com">
              <FacebookTwoToneIcon />
            </a>
            <a href="https://instagram.com">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com">
              <TwitterIcon />
            </a>
            <a href="https://linkedin.com">
              <LinkedInIcon />
            </a>
            <a href="https://pinterest.com">
              <PinterestIcon />
            </a>
          </div>
          <div className="center">
            <span>Xiao Zhan</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>China</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>xiaozhan.actor</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
