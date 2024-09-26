
import React from 'react';
import Navbar from '../Components/Navbar';
import play from '../assets/images/play.png';
import info from '../assets/images/info.png';
import TitleCards from '../Components/TitleCards';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="hero relative">
        <img
          src="https://external-preview.redd.it/c9WaCkTDMTtuxtG-NGDcFaYdGavd0PedaeKla76HKPE.jpg?auto=webp&s=1e7e6aa421b6107d0f3c78af802dba7328f84879"
          alt=""
          className="w-full h-auto object-cover" 
        />
        <div className="hero-caption absolute w-full pl-[6%] bottom-0 text-white">
          <img
            src="https://seeklogo.com/images/G/game-of-thrones-logo-3A574D3ECB-seeklogo.com.png"
            alt="Game of Thrones Logo"
            width={150}
            className="mb-4"
          />
          <p className="max-w-[700px] text-sm mb-5">
            "Game of Thrones" is an epic fantasy series that follows the power struggles among noble families vying for control of the Iron Throne in the fictional land of Westeros. The show is renowned for its complex characters, political intrigue, and shocking plot twists.
          </p>
          <div className="hero-btns flex gap-2 mb-12">
            <button className="px-5 py-2 inline-flex items-center gap-2 text-[15px] font-semibold bg-white text-black cursor-pointer rounded-md">
              <img src={play} alt="Play" width={20} />
              Play
            </button>

            <button className="px-5 py-2 inline-flex items-center gap-2 text-[15px] font-semibold bg-gray-700 bg-opacity-70 text-white cursor-pointer rounded-md">
              <img src={info} alt="More Info" width={20} />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards pl-[6%]">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks for You"} category={"now_playing"}/>
        
      </div>
      <Footer/>
    </div>
  );
}

export default Home;

