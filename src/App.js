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
import bday1 from "../src/images/bday1.jpg"
import bday2 from "../src/images/bday2.jpg"
import bday3 from "../src/images/bday3.jpg"
import bday4 from "../src/images/bday4.jpg"
import bday5 from "../src/images/bday5.jpg"
import bday6 from "../src/images/bday6.jpg"
import bday7 from "../src/images/bday7.jpg"
import { ReactPhotoCollage } from "react-photo-collage";
import Button from '@mui/material/Button';
import NightlifeIcon from '@mui/icons-material/Nightlife';

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

const bday_collage = {
  width: '600px',
  height: ['250px', '170px'],
  layout: [1, 4],
  photos: [
    { source: bday6 },
    { source: bday5 },
    { source: bday1 },
    { source: bday2 },
    { source: bday3 },
    { source: bday4 },
    { source: bday7 },
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
        iconStyle={{ background: "white", color: "orange"}}
        icon={<WbSunnyIcon/>}
        >
          <h1>Samarth ran up morocco</h1>
          <Popup trigger={<Button variant="contained" className="button"> click for a milli </Button>} 
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
        className="Maanas-21st"
        date="January 14, 2022"
        iconStyle={{ background: "white", color: "blue"}}
        icon={<NightlifeIcon/>}
        >
          <h1> Maanas becomes legal</h1>
          <Popup trigger={<Button variant="contained" className="button"> click for a milli </Button>} 
          modal
          nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> I'm like that </div>
                <div className="content">
                  {' '}
                  Wow, here we are. The big 21. 21 revolutions around the globe, 21 opportunities to be grateful for all the blessings that have fallen in my lap each year. Oh, and 21 years of being the undisputed GOAT. 
                  Famous street poet Aubrey "Drake" Graham once asked a rather profound question: "21, can you do sum' for me?" Like Drizzy, I too wonder what 21 has in store.
                  I guess one thing is I got to throw an absolute rager at a crib that wasn't even mine. Another would be that I got to drink an alcoholic beverage for the first time! Who knew it could be so exhilarating?
                  Jokes aside, what lies ahead in my script breeds a lot of excitement and a tinge of uncertainty. 
                  In less than a week I catch a flight to a foreign country whose language and culture I have a pretty basic understanding of. 
                  It's still so crazy to think about- a whole semester and then some away from home, I really do feel like a bird leaving its nest for the first time. But experiences like these are necessary for 
                  personal growth, almost as necessary as the ability to rizz up baddies- a skill in which I have plenty of room for improvement.

                </div>
                <ReactPhotoCollage {...bday_collage} />
                {/* tried to put a video, didnt work, is cut off */}
                {/* <video width="400" controls autoplay>
                  <source src="../src/images/RAGER.MOV" type="video/mp4"/>
                </video> */}
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
          <Popup trigger={<Button  variant="contained" className="button"> click for a milli </Button>} 
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
          <Popup trigger={<Button variant="contained" className="button"> click for a milli </Button>} 
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
