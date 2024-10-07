import Header from "../Header/Header";
import Slogo from "../Only Logo/SVCE_LOGO";
import pic1 from '../../Assets/Academics-1.jpg';
import pic2 from '../../Assets/building-leaders.png';
import pic3 from '../../Assets/img-1.png';
import pic4 from '../../Assets/svce_fron_banner.png';
import pic5 from '../../Assets/SVCE-in-Top-10.png';
import pic6 from '../../Assets/svce-lives.png';
import dk from './home.module.css';
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";

export default function Homelanding(){
    return <>
        <Header/>
        <div className=" dkw-95 sm:w-11/12 mx-auto my-2 rounded-md">
        <div className={dk.homelandingpg1}>
            <marquee behaviour="scroll" direction="up" scrollamount="3" className=" rounded m-0 dkh-60vh overflow-hidden" >
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
       {/* <div className={dk.footer}>
        <div>
            <h4 className=" font-semibold p-1 m-1 text-sm sm:p-3 sm:m-2 ">Copyright 2020 @ SVCE</h4>
        </div>
        <div className=" font-semibold p-3 m-2 ">
            <Link className="h-10 w-10 m-1 sm:p-2 no-underline hover:no-underline sm:text-2xl my-auto" to="https://www.svce.ac.in/">
                svce.ac.in
            </Link>
            <Link className="h-10 w-10 sm:text-3xl m-1 sm:p-2"><i class="fa-brands fa-facebook" to="https://www.facebook.com/SVCESriperumbuthur"></i></Link>
            <Link className="h-10 w-10 sm:text-3xl m-1 sm:p-2" to="https://twitter.com/svcetwitt"><i class="fa-brands fa-twitter"></i></Link>
            <Link className="h-10 w-10 sm:text-3xl m-1 sm:p-2" to="https://www.linkedin.com/school/sri-venkateswara-college-of-engineering/"><i class="fa-brands fa-linkedin"></i></Link>
        </div>
       </div> */}
        <Footer/>
    </>
}