import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, EffectFade, Pagination } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import whiteLogo from '../public/images/logo_white.png'
import blackLogo from '../public/images/logo.png'

import banner_bg from '../public/images/banner.jpg'
import before_quote from '../public/images/quote_before.png'
import after_quote from '../public/images/quote_after.png'

import gifola1 from '../public/images/clients/gifola.tech(1).png'
import gifola2 from '../public/images/clients/gifola.tech(2).png'
import why1 from '../public/images/clients/why.jpg'
import why2 from '../public/images/clients/logo.png'
import instaeats1 from '../public/images/clients/instaeats.png'
import instaeats2 from '../public/images/clients/logo_wth_bg.svg'
import raktdan1 from '../public/images/projects/raktdan.jpg'
import raktdan2 from '../public/images/clients/raktdan.png'
import fypmoney1 from '../public/images/clients/fypmoney.png'
import fypmoney2 from '../public/images/clients/fypmoneylogo.png'
import bicycle1 from '../public/images/projects/bicycle.jpg'
import bicycle2 from '../public/images/clients/bicycle.png'
import nrdc1 from '../public/images/projects/nrdc.jpg'
import nrdc2 from '../public/images/clients/nrdc.jpg'
import air1 from '../public/images/projects/air.jpg'
import air2 from '../public/images/clients/air.png'

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FcSmartphoneTablet } from "react-icons/fc";
import { AiOutlineDesktop } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { DiResponsive } from "react-icons/di";
import { useEffect, useState } from 'react';

export default function Home() {
  const [navColor, setNavColor] = useState({ color: '#FFFFFF', })
  const [log, setLog] = useState(<Image className='' src={whiteLogo} alt='' />)
  const [styling, setStyling] = useState({
    backgroundImage: `url(${banner_bg.src})`,
    width: '100vw',
    height: '100vh',
    backgroundPosition: 'center top',
    backgroundSize: '105%',
    transition: 'all 0.3s',
    backgroundRepeat: 'no-repeat'
  })

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        document.querySelector(".navbar_navigation_color").style.background = '#FFFFFF';
        document.querySelector(".navbar_navigation_color").style.padding = '5px 80px';
        document.querySelector(".navbar_navigation_color").style.transition = 'all 0.3s';
        setNavColor({
          color: '#ef4444',
        })
        setLog(<Image className='' src={blackLogo} alt='' />)
        setStyling({
          backgroundImage: `url(${banner_bg.src})`,
          width: '100vw',
          height: '100vh',
          backgroundPosition: 'center top',
          backgroundSize: '115%',
          transition: 'all 0.3s',
          backgroundRepeat: 'no-repeat'
        })
      }
      else {
        document.querySelector(".navbar_navigation_color").style.background = 'transparent';
        document.querySelector(".navbar_navigation_color").style.padding = '20px 80px';
        document.querySelector(".navbar_navigation_color").style.transition = 'all 0.3s';
        setNavColor({
          color: '#FFFFFF',
        })
        setLog(<Image className='' src={whiteLogo} alt='' />)
        setStyling({
          backgroundImage: `url(${banner_bg.src})`,
          width: '100vw',
          height: '100vh',
          backgroundPosition: 'center top',
          backgroundSize: '105%',
          transition: 'all 0.3s',
          backgroundRepeat: 'no-repeat'
        })
      }

      if (window.scrollY > 750 && window.scrollY < 1900 ) {
        document.querySelector(".contact_box").style.visibility = 'hidden';
        document.querySelector(".contact_box").style.transition = 'all 0.3s';
      } else {
        document.querySelector(".contact_box").style.visibility = 'visible';
        document.querySelector(".contact_box").style.transition = 'all 0.3s';
      }
    });
  }, [])

  return (
    <div className='relative h-full w-full'>
      <header className='' style={styling}>
        <nav className='w-full fixed top-0 z-20 flex justify-between items-center py-5 px-20 navbar_navigation_color'>
          <div className='logo_div'>
            {log}
          </div>
          <ul className='flex items-center space-x-12 text-sm font-bold'>
            <li><a className='navbarLink-line' style={navColor} href="">OUR SERVICES</a></li>
            <li><a className='navbarLink-line' style={navColor} href="">OUR WORK</a></li>
            <li><a className='navbarLink-line' style={navColor} href="">TESTIMONIALS</a></li>
            <li><a className='navbarLink-line' style={navColor} href="">CONTACT US</a></li>
          </ul>
          <div className='absolute w-full h-[1px] right-0 bottom-0 bg-gray-700'></div>
        </nav>
        <div className='w-[550px] pt-[300px] ml-[100px]'>
          <h1 className='text-[26px] font-bold leading-none'>SUDOFIRE IS A STARTUP RECOGNISED UNDER THE &apos;STARTUP INDIA ACTION PLAN&apos;</h1>
          <p className='text-[22px] font-light mt-3'>Our services are a perfect mix of creativity commitment and some serious programming. Let your online presence be worthwhile!</p>
        </div>
        <div className='contact_box fixed h-[325px] w-[325px] right-[50px] top-[200px] bg-black p-7 contactBox z-10'>
          <div className='space-y-2'>
            <input className='w-full opacity-100 bg-white border-none outline-none h-9 rounded-sm text-black p-3 placeholder:text-black' type="text" name="" id="" placeholder='Name*' />
            <input className='w-full opacity-100 bg-white border-none outline-none h-9 rounded-sm text-black p-3 placeholder:text-black' type="number" name="" id="" placeholder='Phone*' />
            <input className='w-full opacity-100 bg-white border-none outline-none h-9 rounded-sm text-black p-3 placeholder:text-black' type="email" name="" id="" placeholder='E-mail*' />
            <textarea className='w-full opacity-100 bg-white border-none outline-none rounded-sm text-black p-3 placeholder:text-black' name="" id="" placeholder='Clarify Your Enquiry'></textarea>
            <button className='w-full opacity-100 bg-red-500 text-white border-none outline-none h-9 rounded-sm'>Submit</button>
          </div>
        </div>
      </header>

      <div className=''>
        <div className='bg-red-500 w-full py-20 space-y-10'>
          <div className='w-[70%] flex justify-evenly items-start'>
            <div className='text-white text-center flex flex-col items-center w-[30%]'>
              <FaMobileAlt className='text-[100px]' />
              <h2 className='my-4 font-bold'>MOBILE APP</h2>
              <p>You love your pocket gadget and will love it even more when it will take control of your business. An app for Iphone? ..ahaaan! For Android? ..sure! And Windows? ..ya, that too!</p>
            </div>
            <div className='text-white text-center flex flex-col items-center w-[30%]'>
              <AiOutlineDesktop className='text-[100px]' />
              <h2 className='my-4 font-bold'>WEBSITES</h2>
              <p>We create amazing SEO friendly website in no time. Our in-house framework has enabled our developers to be more efficient with their coding skills. Get dynamic Business Websites, Ecommerce websites and Web Portals.</p>
            </div>
            <div className='text-white text-center flex flex-col items-center w-[30%]'>
              <BsGraphUpArrow className='text-[100px]' />
              <h2 className='my-4 font-bold'>INTERNET OF THINGS (IOT)</h2>
              <p>Building smart cities & smarter homes with WiFi devices for industrial & manufactural insights.</p>
            </div>
          </div>
          <div className='w-[70%] flex justify-evenly items-start'>
            <div className='text-white text-center flex flex-col items-center w-[30%]'>
              <AiOutlineCloudDownload className='text-[100px]' />
              <h2 className='my-4 font-bold'>DEVOPS & CLOUD SERVICES</h2>
              <p>New age services with flexible architecture and on demand pricing paving way for much needed flexibility.</p>
            </div>
            <div className='text-white text-center flex flex-col items-center w-[30%]'>
              <FaReact className='text-[100px]' />
              <h2 className='my-4 font-bold'>ENTERPRISE IT SOLUTIONS</h2>
              <p>Enabling business to conquer physical boundaries with new age Technologies.</p>
            </div>
            <div className='text-white text-center flex flex-col items-center w-[30%]'>
              {/* <DiResponsive className='text-[100px]' /> */}
              <FcSmartphoneTablet className='text-[100px]' />
              <h2 className='my-4 font-bold'>SAAS & MOBILITY SOLUTIONS</h2>
              <p>On the go solutions for routine business processes enabling remote and in-office management.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="" className="works section">
        <div className="">
          {/* <div className="text-center">
            <h2>Our Projects</h2>
          </div> */}
          <div className="flex flex-wrap justify-evenly">
            <div className="work">
              <a href="//www.aircentralstore.org" className="work-box" target="_blank">
                <Image className='' src={air1} alt='' />
                <div className="overlay">
                  <div className="overlay-caption flex flex-col items-center">
                    <h5><span className="logo logo-small"> <Image className='' src={air2} alt='' /></span></h5>
                    <p>Software</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="work">
              <a href="http://nrdcindia.com/" className="work-box" target="_blank">
                <Image className='' src={nrdc1} alt='' />
                <div className="overlay">
                  <div className="overlay-caption flex flex-col items-center">
                    <h5><span className="logo logo-small"> <Image className='' src={nrdc2} alt='' /></span></h5>
                    <p>Website</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="work">
              <a href="http://thebicyclestudio.in/" className="work-box" target="_blank">
                <Image className='' src={bicycle1} alt='' />
                <div className="overlay">
                  <div className="overlay-caption flex flex-col items-center">
                    <h5> <span className="logo"> <Image className='' src={bicycle2} alt='' /></span></h5>
                    <p>Website & Software</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="work">
              <a href="https://www.fypmoney.in/" className="work-box" target="_blank">
                <Image className='object-contain' src={fypmoney1} alt='' />
                <div className="overlay">
                  <div className="overlay-caption">
                    <h5><span className="logo"><Image className='' src={fypmoney2} alt='' /></span></h5>
                    <p>Website</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="work">
              <a href="https://canwinn.org/" className="work-box" target="_blank">
                <Image className='' src={raktdan1} alt='' />
                <div className="overlay">
                  <div className="overlay-caption">
                    <h5><span className="logo"><Image className='' src={raktdan2} alt='' /></span></h5>
                    <p>Website & App</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="work">
              <a href="https://www.instaeats.in/" className="work-box" target="_blank">
                <Image className='mt-20' src={instaeats1} alt='' />
                <div className="overlay">
                  <div className="overlay-caption flex flex-col items-center">
                    <h5><span className="logo"><Image className='w-[150px]' src={instaeats2} alt='' /></span></h5>
                    <p>Website & App</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="work">
              <a href="http://biryaniqueen.com/" className="work-box" target="_blank">
                <Image className='' src={why1} alt='' />
                <div className="overlay">
                  <div className="overlay-caption">
                    <h5><span className="logo"><Image className='chabar-width' src={why2} alt='' /></span></h5>
                    <p>Website</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="work">
              <a href="https://www.gifola.tech/" className="work-box" target="_blank">
                <Image className='object-scale-down' src={gifola1} alt='' />
                <div className="overlay">
                  <div className="overlay-caption">
                    <h5><span className="logo logo-large"><Image className='chabar-width' src={gifola2} alt='' /></span></h5>
                    <p>E-Commerce Website</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <testimonials className="">
        <div className="relative w-full bg-red-500">
          <div className='w-[65%] flex justify-center items-center relative h-[400px]'>
            <Image className='absolute top-5 left-12 w-20' src={before_quote} alt='' />
            <div>
              <p className='text-[26px] text-center'>If it looks good, it builds your 1st Impression...<br />
                If it works good, it builds your Efficiency... <br />
                But with both,<br />
                that builds your CLIENTELE. <br />
                Let's do that for your business too!</p>
            </div>
            <Image className='absolute bottom-5 right-12 w-20' src={after_quote} alt='' />
          </div>
        </div>
        <div className='bg-white'>
          <div className='w-[90%] m-auto text-center my-[90px] '>
            <div className='w-[68%]'>
              <h1 className='text-[40px] text-red-500 mb-2'>What our Clients say?</h1>
              <Swiper spaceBetween={30} effect={"fade"} pagination={{ clickable: true, }}autoplay={{ delay: 5000, disableOnInteraction: false,}} modules={[Autoplay, Pagination]} className="mySwiper h-[250px]">
                <SwiperSlide>
                  <div className='text-red-500'>
                    <p className='text-[27px]'>"We really liked the enthusiasm and professionalism of<br />
                      the team at Sudofire. Good luck to their future<br />
                      endeavors..."</p>
                    <p className='font-bold m-8'>-A.M SHARMA<br />
                      ASSISTANT ENGINEER (DIRECTOR), ALL INDIA RADIO</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='text-red-500'>
                    <p className='text-[27px]'>"Our Software for Managing Vendors and Orders was<br />
                      brilliantly handled by Sudofire. I would highly<br />
                      recommend them..."</p>
                    <p className='font-bold m-8'>-HARSHIT GROVER<br />
                      DIRECTOR, BUY 4 INDUSTRIES</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='text-red-500'>
                    <p className='text-[27px]'>"The design sense that these guys have is amazing.<br />
                      And the way they took care of each aspect as if it's<br />
                      their own was really commendable..."</p>
                    <p className='font-bold m-8'>-VINIT DAWAR<br />
                      FOUNDER, SPORTSVITAE</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </testimonials>

      <footer className='bg-red-500 pb-8'>
        <div className="w-full">
          <iframe className='w-full h-[300px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.178941246919!2d77.0399849498477!3d28.413856982418682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d195d91cd2c7f%3A0x30a225fa7b56b7bd!2sSudofire+Technologies!5e0!3m2!1sen!2sin!4v1523603681652"
            frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className='w-[55%]'>
          <div className='w-3/4 ml-auto text-center'>
            <div>
              <h2 className='mt-8 mb-6 font-bold'>LOCATION</h2>
              <p>Sudofire Technologies, 1st Floor, Landmark Cyberpark, <br />
                Sector 67, Gurgaon, India(122018)</p>
              <p className='font-bold'>+91-9811406941</p>
              <p className='font-bold'>sales@sudofire.com jobs@sudofire.com</p>
            </div>
            <div>
              <h2 className='mt-8 mb-6 font-bold'>ABOUT SUDOFIRE</h2>
              <p>We provide quality services at the best price. We have a knack of extracting the best out of our resources and assure quality at each step of the development process. We take great pride in our code as we keep it clean.</p>
            </div>
            <div>
              <h2 className='mt-8 mb-6 font-bold'>SHARE</h2>
              <div className='flex justify-center items-center space-x-5'>
                <a className='text-3xl' href=""><FaFacebookF /></a>
                <a className='text-3xl' href=""><FaLinkedinIn /></a>
                <a className='text-3xl' href=""><AiOutlineTwitter /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='py-5 bg-black'>
        <p className='text-gray-500 text-center'>© 2020-2021 <span className='text-red-400'>Sudofire Technologies LLP</span> . All Rights Reserved</p>
      </div>
    </div>
  )
}
