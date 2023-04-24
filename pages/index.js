import React, { useRef } from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
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

import { TbArrowBearRight } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FcSmartphoneTablet } from "react-icons/fc";
import { AiOutlineDesktop } from "react-icons/ai";
import { DiResponsive } from "react-icons/di";
import { ImPhone } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Head from 'next/head';

export default function Home() {
  const [navColor, setNavColor] = useState({ color: '#FFFFFF', })
  const [log, setLog] = useState(<Image className='' src={whiteLogo} alt='' />)
  const [log1, setLog1] = useState(<Image className='w-[165px]' src={whiteLogo} alt='' />)
  const [styling, setStyling] = useState()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [massage, setMassage] = useState('')

  const contact_form = useRef()
  const mail_send_sms = useRef()
  const mail_deskTop_send_sms = useRef()
  const contactForm_div = useRef()

  const SendMail = async (e) => {
    e.preventDefault();
    if (!name) {
      alert("please fill name")
      return
    }
    if (!email) {
      alert("please fill email")
      return
    }
    if (!number) {
      alert("please fill number")
      return
    }
    const response = await fetch(`https://teamage.sudofire.com/accounts/api/v1/contact_us`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, number, massage })
    })
    const data = await response.json()

    setName("")
    setEmail("")
    setNumber("")
    setMassage("")

    if (response.status == 200) {
      contact_form.current.classList.replace('show', 'hidden')
      mail_send_sms.current.classList.replace('hidden', 'show')
      mail_deskTop_send_sms.current.classList.replace('hidden', 'show')
      contactForm_div.current.classList.replace('h-[325px]', 'auto')
    }
  }

  useEffect(() => {
    let x = window.matchMedia("(max-width: 768px)")
    if (x.matches) {
      setStyling({
        backgroundImage: `url(${banner_bg.src})`,
        width: '100vw',
        height: '75vh',
        backgroundPosition: 'center top',
        backgroundSize: 'auto',
        transition: 'all 0.3s',
        backgroundRepeat: 'no-repeat'
      })
    }
    else {
      setStyling({
        backgroundImage: `url(${banner_bg.src})`,
        width: '100vw',
        height: '94vh',
        backgroundPosition: 'center top',
        backgroundSize: '105%',
        transition: 'all 0.3s',
        backgroundRepeat: 'no-repeat'
      })
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 750 && window.scrollY < 1900) {
        document.querySelector(".contact_box").style.opacity = '0';
        document.querySelector(".contact_box").style.transition = 'all 0.5s';
      }
      else {
        document.querySelector(".contact_box").style.opacity = '1';
        document.querySelector(".contact_box").style.transition = 'all 0.5s';
      }
      if (window.scrollY > 10) {
        document.querySelector(".navbar_navigation_color").style.background = '#FFFFFF';
        document.querySelector(".navbar_navigation_color").style.padding = '5px 80px';
        document.querySelector(".navbar_navigation_color").style.transition = 'all 0.3s';

        document.querySelector(".phone_view_nav").style.padding = '5px 16px';
        document.querySelector(".phone_view_nav").style.background = '#FFFFFF';
        document.querySelector(".phone_view_nav").style.transition = 'all 0.3s';
        setNavColor({
          color: '#ef4444',
        })
        setLog(<Image className='' src={blackLogo} alt='' />)
        setLog1(<Image className='w-[156px]' src={blackLogo} alt='' />)
        if (x.matches) {
          setStyling({
            backgroundImage: `url(${banner_bg.src})`,
            width: '100vw',
            height: '75vh',
            backgroundPosition: 'center top',
            backgroundSize: 'auto',
            transition: 'all 0.3s',
            backgroundRepeat: 'no-repeat'
          })
        }
        else {
          setStyling({
            backgroundImage: `url(${banner_bg.src})`,
            width: '100vw',
            height: '94vh',
            backgroundPosition: 'center top',
            backgroundSize: '115%',
            transition: 'all 0.3s',
            backgroundRepeat: 'no-repeat'
          })
        }
        if (x.matches) {
          document.querySelector(".navbar_navigation_color").style.background = '#FFFFFF';
        }
        else {
          document.querySelector(".navbar_navigation_color").style.background = '#FFFFFF';
        }
      }
      else {
        document.querySelector(".navbar_navigation_color").style.background = 'transparent';
        document.querySelector(".navbar_navigation_color").style.padding = '20px 80px';
        document.querySelector(".navbar_navigation_color").style.transition = 'all 0.3s';

        document.querySelector(".phone_view_nav").style.padding = '10px 16px';
        document.querySelector(".phone_view_nav").style.background = 'transparent';
        document.querySelector(".phone_view_nav").style.transition = 'all 0.3s';
        setNavColor({
          color: '#FFFFFF',
        })
        setLog(<Image className='' src={whiteLogo} alt='' />)
        setLog1(<Image className='w-[165px]' src={whiteLogo} alt='' />)

        if (x.matches) {
          setStyling({
            backgroundImage: `url(${banner_bg.src})`,
            width: '100vw',
            height: '75vh',
            backgroundPosition: 'center top',
            backgroundSize: 'auto',
            transition: 'all 0.3s',
            backgroundRepeat: 'no-repeat'
          })
        }
        else {
          setStyling({
            backgroundImage: `url(${banner_bg.src})`,
            width: '100vw',
            height: '94vh',
            backgroundPosition: 'center top',
            backgroundSize: '105%',
            transition: 'all 0.3s',
            backgroundRepeat: 'no-repeat'
          })
        }
      }
    });
  }, [])

  const hamRef = useRef()

  const crossRef = useRef()

  const phoneView = useRef()

  const hamClick = () => {
    if (hamRef.current.classList.contains('show')) {
      crossRef.current.classList.replace('hidden', 'show')
      hamRef.current.classList.replace('show', 'hidden')
      phoneView.current.classList.replace('hidden', 'show')
    }
  }
  const crossClick = () => {
    if (crossRef.current.classList.contains('show')) {
      hamRef.current.classList.replace('hidden', 'show')
      crossRef.current.classList.replace('show', 'hidden')
      phoneView.current.classList.replace('show', 'hidden')
    }
  }

  const navbar_close = () => {
    phoneView.current.classList.replace('show', 'hidden')
    crossRef.current.classList.replace('show', 'hidden')
    hamRef.current.classList.replace('hidden', 'show')
  }

  return (
    <div className='relative h-full w-full'>
      <Head>
        <title>Sudofire</title>
        <meta name="title" content="Sudofire" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <header className='' style={styling}>
        <div className='z-50 fixed top-0 flex justify-between items-center w-full lg:hidden px-4 py-[10px] phone_view_nav'>
          <div>
            {log1}
          </div>
          <div className='z-50'>
            <div ref={hamRef} className='show'>
              <FaBars onClick={hamClick} className='text-3xl text-red-500' />
            </div>
            <div ref={crossRef} className='hidden'>
              <RxCross1 onClick={crossClick} className='text-3xl text-red-500 z-50 opacity-100' />
            </div>
          </div>
        </div>
        <div ref={phoneView} className='hidden opacity-90 h-full w-full lg:hidden fixed z-40 top-0 bg-black '>
          <ul className='text-center mt-[200px]'>
            <li><a onClick={navbar_close} className='navbarLink-line font-bold' style={navColor} href="#services">OUR SERVICES</a></li>
            <li><a onClick={navbar_close} className='navbarLink-line font-bold' style={navColor} href="#clients">OUR WORK</a></li>
            <li><a onClick={navbar_close} className='navbarLink-line font-bold' style={navColor} href="#testimonials">TESTIMONIALS</a></li>
            <li><a onClick={navbar_close} className='navbarLink-line font-bold' style={navColor} href="#phone_contact">CONTACT US</a></li>
          </ul>
        </div>
        <nav className='hidden lg:flex w-full fixed top-0 z-20 justify-between items-center py-5 px-20 navbar_navigation_color h-full lg:h-auto opacity-90 lg:opacity-100'>
          <div className='logo_div hidden lg:block'>
            {log}
          </div>
          <ul className='flex items-center lg:space-x-12 lg:mt-0 mt-[200px] space-x-0 text-sm font-bold lg:flex-row flex-col w-full lg:w-auto'>
            <li><a className='navbarLink-line' style={navColor} href="#services">OUR SERVICES</a></li>
            <li><a className='navbarLink-line' style={navColor} href="#clients">OUR WORK</a></li>
            <li><a className='navbarLink-line' style={navColor} href="#testimonials">TESTIMONIALS</a></li>
            <li><a className='navbarLink-line' style={navColor} href="#contact_us">CONTACT US</a></li>
          </ul>
          <div className='absolute w-full h-[1px] right-0 bottom-0 bg-gray-700 hidden lg:block'></div>
        </nav>
        <div className='lg:w-[550px] w-full lg:pt-[300px] pt-[200px] lg:ml-[100px] ml-[0px] lg:px-[0px] px-[20px]'>
          <h1 className='md:text-[26px] text-[22px] font-bold leading-none text-white'>SUDOFIRE IS A STARTUP RECOGNISED UNDER THE &apos;STARTUP INDIA ACTION PLAN&apos;</h1>
          <p className='lg:text-[22px] text-sm font-light mt-3 text-white'>Our services are a perfect mix of creativity commitment and some serious programming. Let your online presence be worthwhile!</p>
        </div>
        <div id="contact_us" ref={contactForm_div} className='contact_box fixed h-[325px] w-[325px] right-[50px] top-[200px] bg-black p-7 contactBox z-10 hidden lg:block'>
          <form action="" ref={contact_form} onSubmit={SendMail} method="post" id="contact-form" className='space-y-2 show'>
            <input className='w-full opacity-100 bg-white border-none outline-none h-9 rounded-sm text-black p-3 placeholder:text-black' type="text" name="" id="" placeholder='Name*' required value={name} onChange={(e) => setName(e.target.value)} />
            <input className='w-full opacity-100 bg-white border-none outline-none h-9 rounded-sm text-black p-3 placeholder:text-black' minLength={10} maxLength={10} type="text" name="" id="" placeholder='Phone*' min={10} max={10} value={number} required onChange={(e) => setNumber(e.target.value.replace(/[^0-9]/g,''))} />
            <input className='w-full opacity-100 bg-white border-none outline-none h-9 rounded-sm text-black p-3 placeholder:text-black' type="email" name="" id="" placeholder='E-mail*' value={email} required onChange={(e) => setEmail(e.target.value)} />
            <textarea className='w-full opacity-100 bg-white border-none outline-none rounded-sm text-black p-3 placeholder:text-black' name="" id="" placeholder='Clarify Your Enquiry' value={massage} onChange={(e) => setMassage(e.target.value)} ></textarea>
            <button type="submit" onClick={SendMail} className='w-full opacity-100 bg-red-500 text-white border-none outline-none h-9 rounded-sm'>Submit</button>
          </form>
          <div ref={mail_deskTop_send_sms} className='text-center text-red-500 hidden m-auto font-bold'>
            <p className=''>Thanks for your inquiry. We will get back to you shortly.</p>
          </div>
        </div>
      </header>

      <div id='services' className=''>
        <div className='bg-red-500 w-full py-20 space-y-10'>
          <div className='lg:w-[70%] w-full flex justify-evenly items-start flex-col lg:flex-row space-y-10 lg:space-y-0 px-4 lg:px-0'>
            <div className='text-white text-center flex flex-col items-center lg:w-[30%] w-[100%]'>
              <FaMobileAlt className='md:text-[100px] text-[60px]' />
              <h2 className='my-4 font-bold text-xs md:text-base'>MOBILE APP</h2>
              <p className='text-xs md:text-base'>You love your pocket gadget and will love it even more when it will take control of your business. An app for Iphone? ..ahaaan! For Android? ..sure! And Windows? ..ya, that too!</p>
            </div>
            <div className='text-white text-center flex flex-col items-center lg:w-[30%] w-[100%]'>
              <AiOutlineDesktop className='md:text-[100px] text-[60px]' />
              <h2 className='my-4 font-bold text-xs md:text-base'>WEBSITES</h2>
              <p className='text-xs md:text-base'>We create amazing SEO friendly website in no time. Our in-house framework has enabled our developers to be more efficient with their coding skills. Get dynamic Business Websites, Ecommerce websites and Web Portals.</p>
            </div>
            <div className='text-white text-center flex flex-col items-center lg:w-[30%] w-[100%]'>
              <TbArrowBearRight className='md:text-[100px] text-[60px]' />
              <h2 className='my-4 font-bold text-xs md:text-base'>INTERNET OF THINGS (IOT)</h2>
              <p className='text-xs md:text-base'>Building smart cities & smarter homes with WiFi devices for industrial & manufactural insights.</p>
            </div>
          </div>
          <div className='lg:w-[70%] w-full flex justify-evenly items-start flex-col lg:flex-row space-y-10 lg:space-y-0 px-4 lg:px-0'>
            <div className='text-white text-center flex flex-col items-center lg:w-[30%] w-[100%]'>
              <AiOutlineCloudDownload className='md:text-[100px] text-[60px]' />
              <h2 className='my-4 font-bold text-xs md:text-base'>DEVOPS & CLOUD SERVICES</h2>
              <p className='text-xs md:text-base'>New age services with flexible architecture and on demand pricing paving way for much needed flexibility.</p>
            </div>
            <div className='text-white text-center flex flex-col items-center lg:w-[30%] w-[100%]'>
              <FaReact className='md:text-[100px] text-[60px]' />
              <h2 className='my-4 font-bold text-xs md:text-base'>ENTERPRISE IT SOLUTIONS</h2>
              <p className='text-xs md:text-base'>Enabling business to conquer physical boundaries with new age Technologies.</p>
            </div>
            <div className='text-white text-center flex flex-col items-center lg:w-[30%] w-[100%]'>
              <DiResponsive className='md:text-[100px] text-[60px]' />
              <h2 className='my-4 font-bold text-xs md:text-base'>SAAS & MOBILITY SOLUTIONS</h2>
              <p className='text-xs md:text-base'>On the go solutions for routine business processes enabling remote and in-office management.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="clients" className="works section">
        <div className="">
          <div className="flex flex-wrap justify-evenly">
            <div className="work">
              <a href="//www.aircentralstore.org" className="work-box" target="_blank">
                <Image className='' src={air1} alt='' />
                <div className="overlay">
                  <div className="overlay-caption flex flex-col items-center">
                    <h5><span className="logo logo-small"> <Image className='' src={air2} alt='' /></span></h5>
                    <p>Soft ware</p>
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
                    <p>Website & Soft ware</p>
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

      <testimonials id="testimonials" className="">
        <div className="relative w-full bg-red-500">
          <div className='lg:w-[65%] w-full flex justify-center items-center relative h-[400px]'>
            <Image className='absolute top-5 lg:left-12 left-0 w-20' src={before_quote} alt='' />
            <div>
              <p className='md:text-[26px] text-lg text-center text-white'>If it looks good, it builds your 1st Impression...<br />
                If it works good, it builds your Efficiency... <br />
                But with both,<br />
                that builds your CLIENTELE. <br />
                Let's do that for your business too!</p>
            </div>
            <Image className='absolute bottom-5 lg:right-12 right-0 w-20' src={after_quote} alt='' />
          </div>
        </div>
        <div className='bg-white'>
          <div className='w-[90%] m-auto text-center md:my-[90px] my-6 '>
            <div className='lg:w-[68%] w-full'>
              <h1 className='md:text-[40px] text-3xl text-red-500 mb-4'>What our Clients say?</h1>
              <Swiper spaceBetween={30} effect={"fade"} pagination={{ clickable: true, }} autoplay={{ delay: 5000, disableOnInteraction: false, }} modules={[Autoplay, Pagination]} className="mySwiper md:h-[250px] h-[200px]">
                <SwiperSlide>
                  <div className='text-red-500'>
                    <p className='md:text-[27px] text-lg'>"We really liked the enthusiasm and professionalism of<br className='hidden md:block' />
                      the team at Sudofire. Good luck to their future<br className='hidden md:block' />
                      endeavors..."</p>
                    <p className='font-bold md:my-8 my-4 md:text-sm text-xs'>-A.M SHARMA<br />
                      ASSISTANT ENGINEER (DIRECTOR), ALL INDIA RADIO</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='text-red-500'>
                    <p className='md:text-[27px] text-lg'>"Our Soft ware for Managing Vendors and Orders was<br className='hidden md:block' />
                      brilliantly handled by Sudofire. I would highly<br className='hidden md:block' />
                      recommend them..."</p>
                    <p className='font-bold md:my-8 my-4 md:text-sm text-xs'>-HARSHIT GROVER<br />
                      DIRECTOR, BUY 4 INDUSTRIES</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='text-red-500'>
                    <p className='md:text-[27px] text-lg'>"The design sense that these guys have is amazing.<br className='hidden md:block' />
                      And the way they took care of each aspect as if it's<br className='hidden md:block' />
                      their own was really commendable..."</p>
                    <p className='font-bold md:my-8 my-4 md:text-sm text-xs'>-VINIT DAWAR<br />
                      FOUNDER, SPORTSVITAE</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </testimonials>

      <footer className='bg-red-500 pb-8 text-white'>
        <div className="w-full">
          <iframe className='w-full h-[300px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.178941246919!2d77.0399849498477!3d28.413856982418682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d195d91cd2c7f%3A0x30a225fa7b56b7bd!2sSudofire+Technologies!5e0!3m2!1sen!2sin!4v1523603681652"
            frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className='lg:w-[55%] w-full'>
          <div className='lg:w-3/4 w-full ml-auto text-center text-white'>
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
                <a className='text-3xl' href="https://www.facebook.com/sudofire/"><FaFacebookF /></a>
                <a className='text-3xl' href="https://www.linkedin.com/company/sudofire-technologies/"><FaLinkedinIn /></a>
                <a className='text-3xl' href="https://twitter.com/sudofire/"><AiOutlineTwitter /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='bg-red-500 w-full pb-7 lg:hidden block'>
        <div className='w-[90%] contactBox bg-black p-7 m-auto' id='phone_contact'>
          <form action="" onSubmit={SendMail} method="post" id="contact-form" className='space-y-2'>
            <input className='w-full opacity-100 bg-white border-none outline-none h-9 rounded-sm text-black p-3 placeholder:text-black' type="text" name="" id="" placeholder='Name*' required value={name} onChange={(e) => setName(e.target.value)} />
            <input className='w-full opacity-100 bg-white border-none outline-none h-9 rounded-sm text-black p-3 placeholder:text-black' minLength={10} maxLength={10} type="text" name="" id="" placeholder='Phone*' min={10} max={10} value={number} required onChange={(e) => setNumber(e.target.value.replace(/[^0-9]/g,''))} />
            <input className='w-full opacity-100 bg-white border-none outline-none h-9 rounded-sm text-black p-3 placeholder:text-black' type="email" name="" id="" placeholder='E-mail*' value={email} required onChange={(e) => setEmail(e.target.value)} />
            <textarea className='w-full opacity-100 bg-white border-none outline-none rounded-sm text-black p-3 placeholder:text-black' name="" id="" placeholder='Clarify Your Enquiry' value={massage} onChange={(e) => setMassage(e.target.value)}></textarea>
            <button type="submit" onClick={SendMail} className='w-full opacity-100 bg-red-500 text-white border-none outline-none h-9 rounded-sm'>Submit</button>
          </form>
          <div ref={mail_send_sms} className='text-center text-red-500 hidden m-auto font-bold'>
            <p className=''>Thanks for your inquiry. We will get back to you shortly.</p>
          </div>
        </div>
      </div>
      <div className='py-5 bg-black lg:mb-0 mb-16'>
        <p className='text-gray-500 text-center'>© 2020-2021 <span className='text-red-400'>Sudofire Technologies LLP</span> . All Rights Reserved</p>
      </div>
      <div className="sticky-nav-wrapper lg:hidden">
        <ul className="sticky-nav">
          <li className='flex flex-col items-center'><a href="tel:+919811406941"><ImPhone className='fa fa-phone animated' /><span>Call Now</span></a></li>
          <li className='flex flex-col items-center'><a href="#phone_contact"><IoMdMail className='fa' /><span>Drop an Enquiry</span></a></li>
        </ul>
      </div>
    </div>
  )
}
