import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/736x/07/72/a6/0772a68d15fc47e371c6be673b5da2c2.jpg"
                alt="Wang Yi Bo"
              />
              <span>Wang Yi Bo</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/736x/07/72/a6/0772a68d15fc47e371c6be673b5da2c2.jpg"
                alt="Wang Yi Bo"
              />
              <span>Wang Yi Bo</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/736x/07/72/a6/0772a68d15fc47e371c6be673b5da2c2.jpg"
                alt="Wang Yi Bo"
              />
              <p>
                <span>Wang Yi Bo</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/736x/07/72/a6/0772a68d15fc47e371c6be673b5da2c2.jpg"
                alt="Wang Yi Bo"
              />
              <p>
                <span>Wang Yi Bo</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/736x/07/72/a6/0772a68d15fc47e371c6be673b5da2c2.jpg"
                alt="Wang Yi Bo"
              />
              <p>
                <span>Wang Yi Bo</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/736x/07/72/a6/0772a68d15fc47e371c6be673b5da2c2.jpg"
                alt="Wang Yi Bo"
              />
              <div className="online" />
              <span>Wang Yi Bo</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/736x/07/72/a6/0772a68d15fc47e371c6be673b5da2c2.jpg"
                alt="Wang Yi Bo"
              />
              <div className="online" />
              <span>Wang Yi Bo</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/736x/07/72/a6/0772a68d15fc47e371c6be673b5da2c2.jpg"
                alt="Wang Yi Bo"
              />
              <div className="online" />
              <span>Wang Yi Bo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
