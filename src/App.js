import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {VerticalTimeline} from "react-vertical-timeline-component";
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ParticleBackground from 'react-particle-backgrounds';
import './App.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import img from "../src/images/bruh.jpeg";
import chef from "../src/images/SamarthMorocco/chef.JPG";
import bluestairs from "../src/images/SamarthMorocco/bluestairs.JPG";
import chefstreet from "../src/images/SamarthMorocco/chefstreet.JPG";
import food from "../src/images/SamarthMorocco/food.JPG";
import weirdcafe from "../src/images/SamarthMorocco/weirdcafe.JPG";
import chefsunset from "../src/images/SamarthMorocco/chefsunset.JPG";
import bday1 from "../src/images/Maanas21st/bday1.jpg";
import bday2 from "../src/images/Maanas21st/bday2.jpg";
import bday3 from "../src/images/Maanas21st/bday3.jpg";
import bday4 from "../src/images/Maanas21st/bday4.jpg";
import bday5 from "../src/images/Maanas21st/bday5.jpg";
import bday6 from "../src/images/Maanas21st/bday6.jpg";
import bday7 from "../src/images/Maanas21st/bday7.jpg";
import bday8 from "../src/images/Maanas21st/RAGER.MOV";
import brussels1 from "../src/images/MaanasBrussels/brussels1.jpg";
import brussels2 from "../src/images/MaanasBrussels/brussels2.jpg";
import brussels3 from "../src/images/MaanasBrussels/brussels3.jpg";
import brussels4 from "../src/images/MaanasBrussels/brussels4.jpg";
import brussels5 from "../src/images/MaanasBrussels/brussels5.jpg";
import brussels6 from "../src/images/MaanasBrussels/brussels6.jpg";
import brussels7 from "../src/images/MaanasBrussels/brussels7.jpg";
import brussels8 from "../src/images/MaanasBrussels/brussels8.jpg";
import brussels9 from "../src/images/MaanasBrussels/brussels9.jpg";
import brussels10 from "../src/images/MaanasBrussels/brussels10.jpg";
import barca from "../src/images/Spain/barca.jpeg";
import bball from "../src/images/Spain/bball.jpeg";
import chill from "../src/images/Spain/chill.jpeg";
import club from "../src/images/Spain/club.jpeg";
import lisbon from "../src/images/Spain/lisbon.jpeg";
import madrid from "../src/images/Spain/madrid.jpeg";
import strat from "../src/images/Spain/strat.jpeg";
import italy1 from "../src/images/MaanasItaly/italy1.jpg";
import italy2 from "../src/images/MaanasItaly/italy2.jpg";
import italy3 from "../src/images/MaanasItaly/italy3.jpg";
import italy4 from "../src/images/MaanasItaly/italy4.jpg";
import italy5 from "../src/images/MaanasItaly/italy5.jpg";
import italy6 from "../src/images/MaanasItaly/italy6.jpg";
import germany1 from "../src/images/MaanasMunich/germany1.jpg";
import germany2 from "../src/images/MaanasMunich/germany2.jpg";
import germany3 from "../src/images/MaanasMunich/germany3.jpg";
import germany4 from "../src/images/MaanasMunich/germany4.jpg";
import germany5 from "../src/images/MaanasMunich/germany5.jpg";
import budapest1 from "../src/images/MaanasBudapest/budapest1.jpg"
import budapest2 from "../src/images/MaanasBudapest/budapest2.jpg"
import budapest3 from "../src/images/MaanasBudapest/budapest3.jpg"
import budapest4 from "../src/images/MaanasBudapest/budapest4.MOV"
import budapest5 from "../src/images/MaanasBudapest/budapest5.jpg"
import budapest6 from "../src/images/MaanasBudapest/budapest6.jpg"
import { ReactPhotoCollage } from "react-photo-collage";
import Button from '@mui/material/Button';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

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
    { source: bday8 },
  ],
  showNumOfRemainingPhotos: true
};

const brussels_collage = {
  width: '600px',
  height: ['250px', '170px'],
  layout: [1, 4],
  photos: [
    { source: brussels1 },
    { source: brussels2 },
    { source: brussels3 },
    { source: brussels4 },
    { source: brussels5 },
    { source: brussels6 },
    { source: brussels7 },
    { source: brussels8 },
    { source: brussels9 },
    { source: brussels10 },
  ],
  showNumOfRemainingPhotos: true
};

const italy_collage = {
  width: '600px',
  height: ['250px', '170px'],
  layout: [1, 4],
  photos: [
    { source: italy1 },
    { source: italy2 },
    { source: italy3 },
    { source: italy4 },
    { source: italy5 },
    { source: italy6 },
  ],
  showNumOfRemainingPhotos: true
};

const germany_collage = {
  width: '600px',
  height: ['250px', '170px'],
  layout: [1, 4],
  photos: [
    { source: germany1 },
    { source: germany2 },
    { source: germany3 },
    { source: germany4 },
    { source: germany5 },
  ],
  showNumOfRemainingPhotos: true
};

const budapest_collage = {
  width: '600px',
  height: ['250px', '170px'],
  layout: [1, 4],
  photos: [
    { source: budapest1 },
    { source: budapest2 },
    { source: budapest3 },
    { source: budapest4 },
    { source: budapest5 },
    { source: budapest6 },
  ],
  showNumOfRemainingPhotos: true
};

const spain_collage = {
  width: '600px',
  height: ['250px', '170px'],
  layout: [1, 4],
  photos: [
    { source: barca },
    { source: bball },
    { source: chill },
    { source: club },
    { source: lisbon },
    { source: madrid },
    { source: strat },
  ],
  showNumOfRemainingPhotos: true
}



function App() {
  const settings = {
      particle: {
        particleCount: 35,
        color: "#fff",
        minSize: 1,
        maxSize: 4
      },
      velocity: {
        minSpeed: 0.2,
        maxSpeed: 0.4
      },
      opacity: {
        minOpacity: 0,
        maxOpacity: 0.6,
        opacityTransitionTime: 10000
      }
  }
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
        iconStyle={{ background: "white", color: "blue"}}
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
        date="January 14, 2023"
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
                  In less than a week I catch a flight to a foreign country whose language and culture I have only a basic understanding of. 
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
        className="MaanasBrussels"
        date="January 27th - 29th"
        iconStyle={{ background: "white", color: "blue"}}
        icon={<NightlifeIcon/>}
        >
          <h1> Maanas touches down in Brussels</h1>
          <Popup trigger={<Button  variant="contained" className="button"> click for a milli </Button>} 
          modal
          nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Kevin de Bruyne is my DADDY!!!! </div>
                <div className="content">
                  {' '}
                  Ah yes, Belgium. The land of waffles, beer, fries, chocolate, and a random statue of a baby that has been pissing 
                  since my parents visited it 25 years ago. And no, I'm not kidding about that last one, just Google the "Mannekin Piss" and
                  take a look for yourself. 
                  To start off the night, we grabbed some fries, then went to one of the clubs in town called "La Machine" and the vibes were
                  instantly there. I heard them playing "Goosebumps" by Travis Scott from outside the club and I rushed in, nobody checking IDs at the front. We stayed pretty late 
                  and were on our way back until we came across this awkwardly placed stoplight that was facing the sidewalk, not really serving
                  much of a purpose. So we decided to give it one. We turned the stoplight towards the street and waited for cars to come rolling through to see
                  if they would fall for it. In the next 5 minutes it was a straight up traffic jam! I don't think I'd laughed harder in my life. The second day consisted of going
                  to different cathedrals and other major tourist attractions including a chocolate museum and that pissing baby I was talking about earlier. Later that night, we went
                  to the one of the biggest bars in Brussels called Delirium. I remember I had purchased a massive stein from a gift shop earlier in the day and thought to myself "Hey, why
                  don't I put this to good use." I took it out and asked them to fill it to the brim with their best beer. The bartenders spoke amongst themselves for a minute and finally 
                  agreed on filling it up. I don't think I had ever felt more Belgian than I did that night. 
                  The last day was a bit mellow- we went to the Atomium, which is where the world fair was hosted in the 50s. I also had a dance off with a random drunk dude who was blasting one of my favorite TikTok bangers on his bluetooth speaker,
                  the one that goes "BRRR SKIPPITY DOP DOP DOP DOP DOP YES YES YES YES SKIP SKIPPITY DIP DIPPITY DUBBLA DUBBLA DUBBLA DUBBLA YES YES YES YES"--- if you know, you know. Before long it was time to head back, and all I could think about was how much of a nose dive I took
                  into European culture in a span of just 3 days. I ate and drank like a Belgian, and turned up like a Frenchman. I even got some of the French students to sing "Ramenez la coupe a la maison"
                  with me on the way back.
                  I will definitely be back at some point to visit the more scenic parts of Belgium,
                  most notably Brugge. Until next time, this is Maanas, signing off.
                </div>
                <ReactPhotoCollage {...brussels_collage} />
              </div>
            )}
          </Popup>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="MaanasItaly"
        date="January 2023"
        iconStyle={{ background: "white", color: "blue"}}
        icon={<LocalPizzaIcon/>}
        >
          <h1> Maanas munches pizza in Italy</h1>
          <Popup trigger={<Button variant="contained" className="button"> click for a milli </Button>} 
          modal
          nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Ciao! </div>
                <div className="content">
                  {' '}
                  Italia! I got to kill multiple birds with one stone during this trip. 1. Catch up w/ my homegirl Ipsa. 2. Munch on some top tier pizza 3. Cop some new drip
                  in the fashion capital of the world, Milan. My only regret is not being able to see the Leaning Tower of Pisa or Rome, then I realized those are both on the 
                  other side of the country, which I realized after I had landed in Milan. Certified bruh moment. Milan is a beautiful city though, and just like literally every
                  other big city in Europe, there is something to do on every corner. Wandered around various shops and food tasting events, most notably the Dolce and Gabbana home store.
                  They had this crazy visualizer room and after a couple seconds of being in it I was geeking pretty hard. It was cray cray, if you will. And obviously a weekend in Italy 
                  wouldn't be right without some clubbing. First one was litty, had a panda bussing it down on the dance floor. Second one was aight, they played "Way Too Sexy" so they made 
                  up for the fact that they didn't have a dancing panda. Copped a nice trench coat, don't ask where I bought it from. If you need a restaurant reccomendation, hit Piz Milano.
                  Got to see Lake Como the last day, very scenic and is definitely a great spot to go for a quick reset. 
                  Think I've touched all the bases on this trip, solid weekend if I do say so myself. This is Maanas, signing off.
                </div>
                <ReactPhotoCollage {...italy_collage} />
              </div>
            )}
          </Popup>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="Maanas-Munich"
        date="February 2023"
        iconStyle={{ background: "white", color: "blue"}}
        icon={<AirplanemodeActiveIcon/>}
        >
          <h1>Maanas taps into his inner German</h1>
          <Popup trigger={<Button variant="contained" className="button"> click for a milli </Button>} 
          modal
          nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Allemagne </div>
                <div className="content">
                  {' '}
                  Got to cross off Germany from my bucket list, bless up. More importantly, got to see the Allianz Arena in person, which was 
                  breathtaking. It's a completely different vibe seeing various camera angles of it before a match of Fifa,
                  and actually seeing in in person. Some of the most magical goals ever scored in the history
                  of the sport were scored there. Ok sorry, kind of a nerd emoji moment. We did some frolicking around the English Gardens, kinda cute. 
                  The most German thing we probably did on the trip was go 
                  to this restaurant called Hofbrauhaus. Hella tables yet finding one took upwards of half an hour. There was an absolutely dripped out
                  band playing banger after banger while people chowed down and washed their food down with beer. Our group burned through 7 or 8 liters and
                  some wine as well, not too shabby. We hit this techno club later that night and it was exceedingly mid. I remember asking someone if it's always
                  this dead in there and they conceded that it in fact is always this dull, after which I deadass fell asleep. First time falling asleep in a club
                  in my life. The last day was a drastic vibe switch. We went to Dachau, which is the concentration camp which all the other Nazi concentration camps
                  were modeled after. Walking through the various chambers was a pivotal experience to say the least. I don't think I've had worse chills ever.
                  With that, it was time to catch the train to Budapest, which was also a pivotal experience, in a completely different way. Until then, this is Maanas,
                  signing off. 
            
                </div>
                <ReactPhotoCollage {...germany_collage} />
              </div>
            )}
          </Popup>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="Maanas-Budapest"
        date="February 2023"
        iconStyle={{ background: "white", color: "blue"}}
        icon={<AirplanemodeActiveIcon/>}
        >
          <h1>Maanas bags in Budapest</h1>
          <Popup trigger={<Button variant="contained" className="button"> click for a milli </Button>} 
          modal
          nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Does Buda wipe Pest or Vice Versa? </div>
                <div className="content">
                  {' '}
                  Hungary. I remember thinking this was the goofiest name for a country ever during history classes 
                  throughout grade school. Budapest too. Sounds like the name of some exotic species of flies. Anyways,
                  I had no clue what it was known for until I Googled it on the train ride there, and apparently they're known
                  for their baths. So that was the first thing we hit. While we are going around one of the whirpools in the baths,
                  one of my friends sees a girl recording a video of herself on the outside of the whirlpool and says "Maanas, you 
                  won't go up and crash her video right now." I'm always up for a challenge, so I did just that. I started checking
                  myself out through her video camera, saying shit like "Damn, I look really good in this." She proceeded to ask me 
                  if I was American and told me to be American somewhere else. Little did she know, I'm rather persistent. I went around
                  a couple more times in the whirlpool and we lock eyes each time. Then I go back and asked if she would send me the video
                  so I could see where I come in. She agrees and we start texting back and forth. Later that night we link at a shisha bar,
                  one thing leads to another and let's just say the rest of the night was a movie ;) The next day was fun too, got to see the 
                  more scenic side of Budapest, most notably Buda castle. Finished the night by hitting the Ferris wheel and sipping wine on 
                  a boat just chillin on the Danube. Easily my favorite place in Europe so far, and for obvious reasons. Caught my flight
                  back to France the next morning where I met this Korean dude who studied Spanish in college and was fluent, which may or may
                  not have come in handy for my trip to Spain coming up the following week. Until then, this is Maanas signing off.
            
                </div>
                <ReactPhotoCollage {...budapest_collage} />
              </div>
            )}
          </Popup>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="Samarth-Maanas-Spain"
        date="February 2023"
        iconStyle={{ background: "white", color: "blue"}}
        icon={<AirplanemodeActiveIcon/>}
        >
          <h1>The rizzlers hit Spain</h1>
          <Popup trigger={<Button variant="contained" className="button"> click for a milli </Button>} 
          modal
          nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Meet up </div>
                <div className="content">
                  {' '}
                  Over spring break, We met up in Spain for a week of great fun. Our first stop was Madrid, and we immediately hit the club. We turnt up in a 7 story joint, et bien sur, we rizzed.
                  We visited some parks, museums, and bars; you know, the touristy shit. Lemme tell you tho, these Europeans stink. I swear they do not shower and just douse themselves in cologne. Imagine mixing straight must with dior sauvage.
                  Another highlight of Madrid was a pub crawl we ventured on. Maanas almost got finessed by a stripper, but I (Sam) saved him. We met a dutch feller, shared a few drinks, and clowned on him a little. We then met up again Barcelona.
                  We saw some old friends, visited the Sagrada Familia, and clubbed again. I also went to Lisbon for a day and half. Pretty chiller city; super hilly, pretty, and all around ferda. Europe was one hell of an experience, and I hope to be back there soon

                  Ok, my turn! Trip was a movie no kizzy. My theme for the Madrid / Barcelona trip was the concept of "flaneur." Wandering around the streets of Spain just does something for the soul. So many compelling street performances
                  and interesting people at every corner. Speaking of, do you remember the Korean dude who happened to be fluent in Spanish that I met at the Budapest airport? Well, we ended up meeting again in Barcelona and he gave me a tour
                  around the city. The looks people would give him when he busted out perfect Spanish were perfect, like "I'm off a perc rn this can't be happening." And yes, unfortunately Samarth had to save me from getting caught lackin with 
                  a stripper who I attempted to bag with some Google Translate rizz. The first red flag is that she knew zero english, should've known. The Dutch dude was the goofiest person I've met in Europe to date. We accused him of getting no girls 
                  and he instantly whipped out his phone and showed us a video of him getting some sloppy toppy. Like alright buddy, we stand corrected. All in all, Spain was absolutely clownin and I definitely want to come back at some point, possibly to see
                  the El Clasico live, and not in a bar in Barcelona while wearing a Real Madrid Jersey (yikes).
            
                </div>
                <ReactPhotoCollage {...spain_collage} />
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