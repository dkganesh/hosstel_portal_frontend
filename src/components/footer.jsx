import dk from './home.module.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer(){
    
    return <div className={dk.footer}>
    <div>
        <h4 className=" font-semibold p-1 m-1 text-sm sm:p-3 sm:m-2 ">Copyright 2024 @ SVCE - &gt; made by DK - unofficial webite</h4>
    </div>
    <div className=" font-semibold p-2 md:p-3 sm:p-3 m-2 flex flex-row flex-wrap items-center">
        
        <Link className="px-2 mx-1 py-1 text-lg" to="https://www.svce.ac.in/" target='_blank'>
            svce.ac.in
        </Link>
        <Link className="px-2 mx-1 py-1" to="https://www.facebook.com/SVCESriperumbuthur" target='_blank'><FaFacebookF /></Link>
        <Link className="px-2 mx-1 py-1" to="https://twitter.com/svcetwitt" target='_blank'><FaTwitter /></Link>
        <Link className="px-2 mx-1 py-1 pr-0 mr-0" to="https://www.linkedin.com/school/sri-venkateswara-college-of-engineering/" target='_blank'><FaLinkedin /></Link>
    </div>
   </div>
}