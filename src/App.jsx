import "./App.css";
import { RiNotionFill } from "react-icons/ri";

function App() {
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": 10 }}>
        <div className="item" style={{ "--position": 1 }}>
          <img src="Images/img1.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src="Images/img2.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src="Images/img3.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src="Images/img4.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src="Images/img5.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <img src="Images/img6.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <img src="Images/img7.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 8 }}>
          <img src="Images/img8.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 9 }}>
          <img src="Images/img9.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 10 }}>
          <img src="Images/img10.jpg" alt="" />
        </div>
      </div>

      <div className="content">
        <h1 data-content="I'M MILES">I'M MILES</h1>
        <div className="author">
          <h2>
            <b>Khanm Design</b>
          </h2>
          <p>Read my case study for this project.</p>
          <div className="notionIcon">
            <a
              href="https://khanm.notion.site/I-M-MILES-19737496fdb580abbc60c8d37c44eb09"
              target="_blank"
            >
              <RiNotionFill className="icon" />
            </a>
          </div>
        </div>
        <div className="model"></div>
      </div>
    </div>
  );
}

export default App;
