import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {VerticalTimeline} from "react-vertical-timeline-component";
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './App.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import img from "../src/images/bruh.jpeg";
import chef from "../src/images/chef.JPG";
import bluestairs from "../src/images/bluestairs.JPG";
import chefstreet from "../src/images/chefstreet.JPG";
import food from "../src/images/food.JPG";
import weirdcafe from "../src/images/weirdcafe.JPG";
import chefsunset from "../src/images/chefsunset.JPG";
import { ReactPhotoCollage } from "react-photo-collage";


const morocco_collage = {
  width: '600px',
  height: ['250px', '170px'],
  layout: [1, 4],
  photos: [
    { source: chef },
    { source: chefstreet },
    { source: chefsunset },
    { source: food },
    { source: weirdcafe },
    { source: bluestairs },
  ],
  showNumOfRemainingPhotos: true
};

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
        date="Dec. 2022 - Jan. 2023"
        iconStyle={{ background: "#e9d35b", color: "green"}}
        icon={<WbSunnyIcon/>}
        >
          <h1>Samarth ran up morocco</h1>
          <Popup trigger={<button className="button"> Morocco </button>} 
          modal
          nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> SHUKRAN! </div>
                <div className="content">
                  {' '}
                  Over Winter Break, my extended family and I made a tumultuous journey to Morocco. It was my first time traveling to Africa, so I was beyond excited...and boy was I in for a culture shock. 
                  We visited cities in this order: Rabat, Chefchouan, Fes, Marrakech, then Casablanca. They were all similar in that they had an "old city", called the Medina. The Medina is surrounded by a fort from the old days when they were colonized by the French and Spanish. The "new city" expands from the Medina and is a result of independence and population growth. Inside the Medina, there are tight and packed streets, street vendors everywhere, small homes, and so many cats. It’s absurd! We had a tour guide and a bus driver, so within each city, the guide took us around the famous buildings, shops, and mosques. Our guide's name was Abdou and he was uhhh HOW SAY THAT...a chiller. Absolute legend, love that guy. Made the trip so enjoyable. 
                  One memorable amount of the trip was when I went to a club in Marrakech with my cousin and his friends. This cousin wasn't part of the original extended family that I went on the trip with. Coincidentally, him and his friends were in Morocco and Marrakech at the same time as us. So, as we should've, we bought a table and went brazy! That is all I'll say about that. 
                  I was also fascinated by the coffee shop culture it's literally so weird. First, people only sit outside for the most part. Second, all chairs are facing either away from the shop, or perpendicular to that chair, never towards the shop. Then, people never sit across from each other, only adjacent. Finally, they just people watch. It's like they are at a theater, and we are the film. I was so fascinated by this concept and I couldn't stop seeing it. Everywhere we went. Every shop. 
                  Overall, It was so interesting to see how different peoples' lives are there vs. in America. Everyone lives so simply: they wake up, open up their local shop that sells fake designer and random souvenirs, and sit in front of it. Absurd amounts of cigarettes are smoked. No wonder they are so addicted: they literally do nothing all day! I don't mean to undermine them, but objectively that is what they do. I had so much fun, and I would definitely recommend to anyone interested. See pictures for some moments. Until next time…
                </div>
                <ReactPhotoCollage {...morocco_collage} />
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
