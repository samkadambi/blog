import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {VerticalTimeline} from "react-vertical-timeline-component";
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './App.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import img from "../src/images/bruh.jpeg";

function App() {
  return (
        <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
                    <div className="Events">
          <VerticalTimeline lineColor="white">
        
        <VerticalTimelineElement
        className="Samarth-Morocco"
        date="December 2022"
        iconStyle={{ background: "#e9d35b", color: "green"}}
        icon={<WbSunnyIcon/>}
        >
          <h1> Samarth ran up morocco</h1>
          <Popup trigger={<button className="button"> Morocco </button>} 
          modal
          nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> BRUH </div>
                <div className="content">
                  {' '}
                  EPIC BRUH MOMENT
                </div>
                <img src={img} alt="bruh"/>
              </div>
            )}
          </Popup>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="Samarth-Morocco"
        date="December 2022"
        iconStyle={{ background: "#e9d35b", color: "green"}}
        icon={<WbSunnyIcon/>}
        >
          <h1> Maanas has a vaj</h1>
          <Popup trigger={<button className="button"> click for a milli </button>} 
          modal
          nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> BRUH </div>
                <div className="content">
                  {' '}
                  EPIC BRUH MOMENT
                </div>
                <img src={img} alt="bruh"/>
              </div>
            )}
          </Popup>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="Samarth-Morocco"
        date="December 2022"
        iconStyle={{ background: "#e9d35b", color: "green"}}
        icon={<WbSunnyIcon/>}
        >
          <h1> Maanas has a vaj</h1>
          <Popup trigger={<button className="button"> click for a milli </button>} 
          modal
          nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> BRUH </div>
                <div className="content">
                  {' '}
                  EPIC BRUH MOMENT
                </div>
                <img src={img} alt="bruh"/>
              </div>
            )}
          </Popup>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="Samarth-Morocco"
        date="December 2022"
        iconStyle={{ background: "#e9d35b", color: "green"}}
        icon={<WbSunnyIcon/>}
        >
          <h1> Maanas has a vaj</h1>
          <Popup trigger={<button className="button"> click for a milli </button>} 
          modal
          nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> BRUH </div>
                <div className="content">
                  {' '}
                  EPIC BRUH MOMENT
                </div>
                <img src={img} alt="bruh"/>
              </div>
            )}
          </Popup>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div >
    </div>
      
  );
}

export default App;
