import React, { useEffect, useState } from 'react'
// import { Helmet } from 'react-helmet'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Link, Router } from 'react-router-dom'
import fajar from '../images/fajar.jpg'
import antaranews from '../images/antaranews.png'
import gatra from '../images/gatra.png'
import kickandy from '../images/kickandy.png'
import matagaruda from '../images/matagaruda.png'
import metrotv from '../images/metrotv.png'
import pertamina from '../images/pertamina.png'
import sindonews from '../images/sindonews.png'
import media_indo from '../images/media_indonesia.png'
import cisco from '../images/cisco_gps.png'
import tff from '../images/TFF.png'
import { faAngleLeft, faAngleRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import hary from '../images/story/hary.jpg'
// import { Parallax } from 'react-parallax'
import hero from '../images/wew.png'
import Hero from '../components/Hero'
import logo from '../images/logo_main.png'
import Slider from '../components/Slider/Slider'



function Home() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);

        return()=> window.removeEventListener('scroll', handleScroll);

    },[])

    return (
        <div>
            {/* <Helmet>
                <title>
                    Banoo - Home
                </title>
            </Helmet> */}
            <HelmetProvider>
                <Helmet>
                    <title>Home</title>
                    <meta name="description" content="Home" />
                </Helmet>
            </HelmetProvider>
            
            {/* HomePage -Content */}
            <div className="pb-20">

                {/* Hero - section */}

                
                <div className="flex h-screen">
        
                {/* Background parallax */}
                    <div className="absolute -z-50 top-0 inset-x-0 h-screen bg-hero-img bg-cover bg-no-repeat" style={{ 
                            transform: `translateY(${offsetY * 0.5}px)`
                            }}/>

                {/* End of Background parallax */}
                {/* Content Parallax */}


                
                    <div className="pt-60 iphone7:pt-80 iphone7plus:pt-96 xl:pt-80 px-8 sm:px-20 xl:px-40 ">
                        <h2 className="md:pt-40 lg:pt-96 xl:pt-0 font-spartan text-white text-xl md:text-4xl font-extrabold">
                            Invest in water<br/>Relieve hunger
                        </h2>
                        <h3 className="md:hidden flex pt-10 md:pt-20 leading-loose font-spartan text-white text-xs md:text-lg ">
                            Papa IoT water quality sensor works with microbubble generator 
                            to monitor the quality of water and increase the aquaculture yield
                            in environmentally concern manner
                        </h3>
                        <h3 className="hidden md:flex pt-10 md:pt-20 leading-loose font-spartan text-white text-xs md:text-lg ">
                            Our IoT water quality sensor works with microbubble generator <br/>
                            to monitor the quality of water and increase the aquaculture yield
                        <br/>in environmentally concern manner
                        </h3>

                    </div>

                {/* End of Content Parallax */}
                 
                </div>

                

                



                {/* <div id="hero" className="content"> */}
                
                
                {/* <Parallax bgImage={ hero } strength={300}>
                    
                    <div className="py-60 iphone7:py-80 iphone7plus:py-96 xl:py-80 px-8 sm:px-20 xl:px-40 ">
                        <h2 className="md:pt-40 lg:pt-96 xl:pt-0 font-spartan text-white text-xl md:text-4xl font-extrabold">
                            Invest in water<br/>Relieve hunger
                        </h2>
                        <h3 className="md:hidden flex pt-10 md:pt-20 leading-loose font-spartan text-white text-xs md:text-lg ">
                            Papa IoT water quality sensor works with microbubble generator 
                            to monitor the quality of water and increase the aquaculture yield
                            in environmentally concern manner
                        </h3>
                        <h3 className="hidden md:flex pt-10 md:pt-20 leading-loose font-spartan text-white text-xs md:text-lg ">
                            Our IoT water quality sensor works with microbubble generator <br/>
                            to monitor the quality of water and increase the aquaculture yield
                        <br/>in environmentally concern manner
                        </h3>

                    </div>
                        
                        

                </Parallax> */}


                {/* <div id="hero" className="bg-cover">
                    
                    <div className=" ">
                        

                    
                    <div className="py-60 iphone7:py-80 iphone7plus:py-96 xl:py-80 bottom-0 px-8 sm:px-20 xl:px-40 ">
                        <h2 className="md:pt-40 lg:pt-96 xl:pt-0 font-spartan text-white text-xl md:text-4xl font-extrabold">
                            Invest in water<br/>Relieve hunger
                            </h2>
                        <h3 className="md:hidden flex pt-10 md:pt-20 leading-loose font-spartan text-white text-xs md:text-lg ">
                        Papa IoT water quality sensor works with microbubble generator 
                        to monitor the quality of water and increase the aquaculture yield
                        in environmentally concern manner
                        </h3>
                        <h3 className="hidden md:flex pt-10 md:pt-20 leading-loose font-spartan text-white text-xs md:text-lg ">
                        Our IoT water quality sensor works with microbubble generator <br/>
                        to monitor the quality of water and increase the aquaculture yield
                        <br/>in environmentally concern manner
                        </h3>

                    </div>
                    </div>
                    

                </div> */}
                {/* End of Hero - section */}

                {/* Why Banoo - Section */}
                <div className="py-20 bg-white sm:py-20 px-14 iphone7:px-10 xl:px-40">
                {/* <div className="py-10 sm:py-40 px-14 iphone7:px-20 xl:px-40">
                    <h2 className="flex justify-center text-center font-spartan sm:text-lg xl:text-4xl text-banooGray font-extrabold">
                        Partners and Media Coverage
                    </h2> */}
                    <h2 className="justify-center text-center font-spartan sm:text-lg xl:text-4xl text-banooGray font-extrabold">
                        Why Banoo?
                    </h2>
                    <div className="grid gap-y-20 md:gap-y-0 md:grid-flow-col md:grid-cols-3 pt-20">
                        <div className="flex flex-col flex-shrink place-items-center">
                            <img src={logo} className="h-40 xl:h-60"/>
                            <h3 className="py-6 md:py-10  text-center font-spartan font-extrabold text-base xl:text-lg">
                            Dissolved Oxygen Arouser
                            </h3>
                            <p className="text-center px-2 text-xs lg:text-base xl:px-6">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit reprehenderit magnam similique fugit, deserunt doloribus.
                            </p>

                        </div>

                        <div className="flex flex-col place-items-center">
                            <img src={logo} className="h-40 xl:h-60"/>
                            <h3 className="py-6 md:py-10  text-center font-spartan font-extrabold text-base xl:text-lg">
                            Fiskö
                            </h3>
                            <p className="text-center px-2 text-xs lg:text-base xl:px-6">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit reprehenderit magnam similique fugit, deserunt doloribus.
                            </p>

                        </div>

                        <div className="flex flex-col place-items-center">
                            <img src={logo} className="h-40 xl:h-60"/>
                            <h3 className="py-6 md:py-10  text-center font-spartan font-extrabold text-base xl:text-lg">
                            Banoo Mobile App
                            </h3>
                            <p className="text-center px-2 text-xs lg:text-base xl:px-6">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit reprehenderit magnam similique fugit, deserunt doloribus.
                            </p>

                        </div>
                    </div>

                    

                </div>
                {/* End of Why Banoo - Section */}

                {/* Shortcut product - Section */}
                <div className="">
                    {/* 1st content  */}
                    <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-x-6 gap-x-10 xl:gap-x-20 bg-bluebg to-white py-10 sm:py-20 px-8 sm:px-20 xl:px-40 ">
                        <div className="pt-8 sm:pt-0 font-serif-6  text-banooGray">
                            <h4 className="font-bold text-xs lg:text-sm xl:text-base">
                                        Dissolved Oxygen Arouser
                            </h4>
                            <h3 className="pt-0 lg:pt-10 font-bold text-lg leading-normal lg:text-2xl xl:text-4xl">
                                        Fullfill oxygen demand in your pond
                            </h3>
                            <p className="pt-6 xl:pt-10 text-xs leading-normal lg:text-lg ">
                                    Increase Oxygen rate for better fish and shrimp productions to accelerate your revenue and get better life
                            </p>
                            <div className="flex justify-center sm:grid sm:grid-cols-2 pt-4 lg:h-30 lg:pt-10 flex-col gap-x-6 gap-y-4">
                                <div className="flex justify-center py-4 shadow-lg bg-banoo rounded-xl transition duration-700 ease-in-out hover:bg-banoo75">
                                    <Link to ='/products' className="xl:px-16 font-serif-6 font-bold text-white text-sm ">
                                        Learn More
                                    </Link>
                                </div>
                                <div className="flex justify-center py-4 border-2 border-banoo rounded-xl text-banoo transition duration-700 ease-in-out hover:text-banooGray hover:border-banooGray ">
                                    <Link to='/preorder' className="xl:px-16 font-serif-6 font-bold   text-sm  ">
                                        Pre order
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className="">
                            <img src={fajar} alt=""className="rounded-xl"/>

                        </div>

                    </div>
                    {/* End of 1st content  */}

                    {/* 2nd content  */}
                    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-6 gap-x-10 xl:gap-x-20 bg-white to-white py-10 sm:py-20 px-8 sm:px-20 xl:px-40 ">

                        <div className="">
                            <img src={fajar} alt="" className="rounded-xl"/>

                        </div>

                        <div className="pt-8 sm:pt-0 font-serif-6  text-banooGray">
                            <h4 className="font-bold text-xs lg:text-sm xl:text-base">
                            Fiskö
                            </h4>
                            <h3 className="pt-0 lg:pt-10 font-bold text-lg leading-normal lg:text-2xl xl:text-4xl">
                            Your Pond Assistant
                            </h3>
                            <p className="pt-6 xl:pt-10 text-xs leading-normal lg:text-lg ">
                            Monitor and Control the water quality of your pond 
                                <br/>to maintain the best performance of your fish
                                <br/>for maximum productivity
                            </p>
                            <div className="flex justify-center sm:grid sm:grid-cols-2 pt-4 lg:h-30 lg:pt-10 flex-col gap-x-6 gap-y-4">
                                <div className="flex justify-center py-4 shadow-lg bg-banoo rounded-xl transition duration-700 ease-in-out hover:bg-banoo75">
                                    <Link to ='/products' className="xl:px-16 font-serif-6 font-bold text-white text-sm ">
                                        Learn More
                                    </Link>
                                </div>
                                <div className="flex justify-center py-4 border-2 border-banoo rounded-xl text-banoo transition duration-700 ease-in-out hover:text-banooGray hover:border-banooGray ">
                                    <Link to ='/preorder' className="xl:px-16 font-serif-6 font-bold   text-sm  ">
                                        Pre order
                                    </Link>
                                </div>
                            </div>

                        </div>
                        

                    </div>
                    {/* End of 2nd content  */}

                    {/* 3rd content  */}
                    <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-x-6 gap-x-10 xl:gap-x-20 bg-bluebg to-white py-10 sm:py-20 px-8 sm:px-20 xl:px-40 ">
                        <div className="pt-8 sm:pt-0 font-serif-6  text-banooGray">
                            <h4 className="font-bold text-xs lg:text-sm xl:text-base">
                            Mbah Hary
                            </h4>
                            <h3 className="pt-0 lg:pt-10 font-bold text-lg leading-normal lg:text-2xl xl:text-4xl">
                            Your Pond Report directly 
                                <br/>to Your Hand 
                            </h3>
                            <p className="pt-6 xl:pt-10 text-xs leading-normal lg:text-lg ">
                            It is just get easier for you to control your pond condition at its best 
                                performance to bring maximum revenue to your arms
                            </p>
                            <div className="flex justify-center sm:grid sm:grid-cols-2 pt-4 lg:h-30 lg:pt-10 flex-col gap-x-6 gap-y-4">
                                <div className="flex justify-center py-4 shadow-lg bg-banoo rounded-xl transition duration-700 ease-in-out hover:bg-banoo75">
                                    <Link to ='/products' className="xl:px-16 font-serif-6 font-bold text-white text-sm ">
                                        Learn More
                                    </Link>
                                </div>
                                
                            </div>

                        </div>
                        <div className="">
                            <img src={fajar} alt="" className="rounded-xl"/>

                        </div>

                    </div>
                    {/* End of 3rd content  */}

                </div>
                {/* End of Shortcut product - Section */}

                {/* Kawan Banoo Story - Section */}
                <div className="py-20 xl:h-screen md:px-20 xl:px-40 bg-gradient-to-b from-bluebg to-white">
                    <h2 className="flex justify-center font-spartan sm:text-lg lg:text-2xl xl:text-4xl text-banooGray font-extrabold">
                        Kawan Banoo Story
                    </h2>
                    {/* <div className="py-10 xl:py-20 relative w-auto overflow-x-auto"> */}
                    {/* <div className="py-10 xl:py-20 relative w-auto"> */}
                    <div className="pt-10 xl:pt-20 relative w-auto">
                       <Slider />
                    </div>
                    
                </div>
                
                        {/* End of Slider */}

                        {/* <div>
                            <FontAwesomeIcon icon={faQuoteLeft} size="6x" className="text-white"/>
                        </div> */}
                        {/* <FontAwesomeIcon icon={faQuoteLeft} size="4x" className="text-white"/> */}
                        {/* <div className="pl-10">
                        <FontAwesomeIcon icon={faAngleRight} size="2x"/>
                        </div> */}
                    {/* </div>
                    
                </div> */}
                {/* End of Kawan Banoo Story - Section */}

                {/* Awards - Section */}
                <div className="py-10 xl:py-40 px-8 iphone7:px-20 xl:px-40 bg-white">
                    <h2 className="flex justify-center text-center font-spartan sm:text-lg lg:text-2xl xl:text-4xl text-banooGray font-extrabold">
                        Awards
                    </h2>
                    {/* <div className="pt-10 sm:pt-20 lg:pt-20 grid grid-rows-2 gap-y-6 sm:gap-y-10 md:grid-cols-2 gap-x-2 xl:gap-x-10 place-items-center"> */}
                    <div className="pt-10 sm:pt-20 flex flex-col justify-center place-items-center xl:flex-row gap-y-6 sm:gap-10 xl:gap-20">
                        <img src={cisco} alt="" className="h-20 sm:h-40"/>
                        <img src={tff} alt="" className="h-20 sm:h-40"/>
                        {/* <img src={cisco} className="h-20 iphone7:h-20 sm:h-40 lg:h-20 xl:h-60"/>
                        <img src={tff} className="h-20 iphone7:h-20 sm:h-40 lg:h-20 xl:h-40"/> */}
                    </div>
                </div>
                {/* End of Awards - Section */}

                {/* Partners & Media Coverage - Section */}
                <div className="py-10 sm:py-40 px-14 iphone7:px-20 xl:px-40">
                    <h2 className="flex justify-center text-center font-spartan sm:text-lg xl:text-4xl text-banooGray font-extrabold">
                        Partners and Media Coverage
                    </h2>
                    <div className="pt-10 sm:pt-20 grid grid-cols-2 sm:grid-cols-4 gap-x-10 lg:gap-x-2 gap-y-10 sm:gap-y-20 place-items-center">
                        <img src={matagaruda} alt="" className="lg:h-20"/>
                        <img src={pertamina} alt="" className="w-40"/>
                        <img src={sindonews} alt="" className="w-40"/>
                        <img src={gatra} alt="" className="w-20"/>
                        <img src={kickandy} alt="" className="lg:h-20"/>
                        <img src={antaranews} alt="" className="w-40"/>
                        <img src={media_indo} alt="" className="w-40"/>
                        <img src={metrotv} alt="" className="w-40"/>

                    </div>
                </div>
                {/* End of Partners & Media Coverage - Section */}


            </div>

            {/* End of HomePage - Content */}

            
        </div>
    )
}

export default Home
