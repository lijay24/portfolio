import Headerimage from "../../../assets/header_image.png";
import Facebook from '../../../assets/facebook.png';
import insta from '../../../assets/insta.png';
import linkedln from '../../../assets/linkedln.png';
import twitter from '../../../assets/twitter.png';
import linee from '../../../assets/mainline.png';
const Herotext = () => {
  return (
    <div className="h-[95svh] flex items-center md:gap-36 lg:gap-64 justify-center">
      <div>
      <div className="grid place-content-center gap-5">
        <p >Hola! I&#39;m</p>
        <p className="text-[#FD5956] text-2xl font-bold">Justin Vaccaro</p>
      <div>
        <h2 className="font-bold text-6xl">Creative</h2>
        <h2 className="font-bold text-6xl ml-12">
          Designer<span className="text-5xl text-[#FD5956]">.</span>
        </h2>
      </div>
      <p className="w-[309px]">
        Since creative designers often interact with creative teams, managers
        and clients, they need strong communication skills.
      </p>
      <div className="flex gap-5 h-[23px]">
        <div className="h-[100%]"><img src={Facebook} alt="facebook" /></div>
        <div className="h-[100%]"><img src={insta} alt="insta" /></div>
        <div className="h-[100%]"><img src={linkedln} alt="linkedln" /></div>
        <div className="h-[100%]"><img src={twitter} alt="" /></div>
      </div>
      <button className="bg-[#FD5956] text-white w-[25%] p-2 border-none font-bold"> CV Here</button>
      </div>
      </div>
      <div className="h-[400px]">
        <img className="h-[100%] md:block hidden" src={Headerimage} alt="headerimage" />
      </div>
    </div>
   
  );
};

export default Herotext;
