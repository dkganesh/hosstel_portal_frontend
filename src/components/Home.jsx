import React from 'react'
import svcelogo from '../assets/images/logo.png'
import dk from "../components/home.module.css"
import pic1 from '../assets/images/Academics-1.jpg';
import pic2 from '../assets/images/building-leaders.png';
import pic3 from '../assets/images/img-1.png';
import pic4 from '../assets/images/svce_fron_banner.png';
import pic5 from '../assets/images/SVCE-in-Top-10.png';
import pic6 from '../assets/images/svce-lives.png';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const nav = useNavigate();
    function toLoginPage(){
        console.log("clicked to go to login page");
        nav("/login");
    }
  return (
    <div className='min-w-[98vw] min-h-[98vh] m-auto flex flex-col '>
       <div className="bg-[#ffff] min-h-[12vh] w-full lg:w-[91.6666%] flex flex-col flex-wrap items-center justify-between lg:flex-row m-auto rounded-lg">
           <img src={svcelogo} alt="college logo svce" className='max-w-[50%] mx-[5em] p-2 rounded-md '/>
           <div className="min-w-[35%] px-2 flex flex-row flex-wrap items-end justify-center">
            <button className='mx-4 mb-3 rounded-md px-3 bg-green-400 border-2 border-green-600 font-normal py-1 hover:bg-green-600 ' onClick={toLoginPage}>Student Login</button>
            <button className='mx-4 mb-3 rounded-md px-3 bg-green-400 border-2 border-green-600 font-normal py-1 hover:bg-green-600 'onClick={()=>{nav("/staffLogin")}}>Admin Login</button>
            <button className='mx-4 mb-3 rounded-md px-3 bg-green-400 border-2 border-green-600 font-normal py-1 hover:bg-green-600 'onClick={()=>nav("/register")}>Register Student</button>
           </div>
       </div>
       <div className="w-[95%] sm:w-11/12 mx-auto my-2 rounded-md">
            <div className={dk.homelandingpg1}>
                <marquee behaviour="scroll" direction="up" scrollamount="3" className=" rounded m-0  overflow-hidden" >
                    <div className="">
                        <img src={pic1} className="w-full my-24 -mt-20 sm:mx-96 rounded my-30"/>
                        <img src={pic2} className="w-full my-24 sm:mx-96 rounded"/>
                        <img src={pic3} className="w-full my-24 sm:mx-96 rounded"/>
                        <img src={pic4} className="w-full my-24 sm:mx-96 rounded"/>
                        <img src={pic5} className="w-full my-24 sm:mx-96 rounded"/>
                        <img src={pic6} className="w-full my-24 sm:mx-96 rounded"/>
                    </div> 
                </marquee>
            </div>
            <div className={dk.homelandingpg2}>
                <marquee behaviour="scroll" direction="left" scrollamount="8" className="rounded m-0 h-full w-full ">
                    <div className="flex flex-nowrap w-full rounded">
                        <img src={pic1} className="w-full mx-32 sm:mx-96 sm:-ml-80 rounded"/>
                        <img src={pic2} className="w-full mx-32 sm:mx-96 rounded"/>
                        <img src={pic3} className="w-full mx-32 sm:mx-96 rounded"/>
                        <img src={pic4} className="w-full mx-32 sm:mx-96 rounded"/>
                        <img src={pic5} className="w-full mx-32 sm:mx-96 rounded"/>
                        <img src={pic6} className="w-full mx-32 sm:mx-96 rounded"/>
                    </div> 
                </marquee>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
