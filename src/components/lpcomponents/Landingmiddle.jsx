import React from 'react'
import img1 from '../../assets/logos/company1.png'
import img2 from '../../assets/logos/company2.png'
import img3 from '../../assets/logos/company3.png'
import img4 from '../../assets/logos/company4.png'
import img5 from '../../assets/logos/company5.png'
import placement from '../../assets/stock/placement.jpg'
import homepic from '../../assets/stock/homepage.jpeg'
import global from '../../assets/stock/cat-global.gif'
import stroke from '../../assets/stroke.webp'
import place from '../../assets/stock/place.gif'
import brushstroke from '../../assets/brushstroke.webp'
import { Link } from 'react-router-dom'
export function Landingmiddle() {
    const images=[img1,img2,img3,img4,img5]

    return (
        <>
            <div className="overflow-x-hidden">
                <div className="flex justify-center items-center max-md:flex-col max-sm:h-[80vh] h-[70vh] h-[70svh] ">
                    <div className="w-[45%] max-sm:w-full py-9">
                        <h1 className='px-12 text-4xl font-bold sm:px-4 pb-10 max-sm:px-4 max-sm:text-center max-sm:text-3xl'>Fostering Futures with Trust: Your Gateway to Secure and Successful Campus Placements.</h1>
                        <div className="px-12 sm:px-8">
                            <div className="bg-black w-[150px] text-center text-white px-2 py-4 rounded"><Link to='/signup'>Get started</Link></div>
                        </div>
                    </div>
                    <div className="lg:w-[40%] xl:w-[35%] max-sm:w-full flex justify-center items-center">
                        <div className="lg:h-[500px] md:w-[400px] md:h-[400px] max-md:h-[350px] max-md:w-[350px] lg:w-[500px] shadow-lg bg-black rounded-full" style={{backgroundImage:`url(${homepic})`,backgroundSize:"contain"}}></div>
                    </div>
                </div>
                <div className="py-12 px-5">
                    <p className="px-12 pl-[10%]  py-2 text-slate-500 max-sm:text-base text-lg">Trusted by</p>
                    <div className="px-12  pl-[10%] pr-[10%] max-md:pl-[1%] max-md:pr-[1%]">
                        <div className="flex max-md:justify-center  max-md:flex-wrap max-md:gap-5 lg:flex lg:justify-between">
                        {images.map((image, index) => (
                                <div key={index} className="flex justify-center items-center ">
                                    <img src={image} className='w-[80px] md:w-[120px] md:h-[70px] h-[40px] max-sm:w-[110px] max-sm:h-[25px]' alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-black flex justify-center items-center w-[100vw] w-[100svw] max-h-[100vh] p-10">
                    <div className="w-[45%] max-sm:w-full ">
                        <div className=" min-w-[35vw] align-center h-[40vh] flex flex-col justify-center">
                            <div className="py-4">
                                <h1 className='px-4  text-white text-5xl max-sm:text-xl font-bold'>Built with students in mind</h1>
                            </div>
                            <div className="text-white py-4"><p className="text-base max-sm:text-base px-4">Discover success with our Campus Placement Hub – your go-to resource for real interview experiences and questions. Unlock career insights shared by our accomplished alumni, and gain the confidence to ace your interviews. We believe in transparency, knowledge-sharing, and building a community that propels you towards professional triumphs. Join us on the journey to shape your career legacy!</p></div>
                            </div>
                    </div>
                    <div className="w-[40%] flex justify-center relative h-[45vh] items-center">
                        <div className="z-0 relative bottom-40 right-32">
                            <img src={brushstroke} alt="" className='h-[180px]'/>
                        </div>
                        <div className=" z-10 absolute">
                            <img src={placement} alt="" className='rounded-lg w-[500px] h-[350px]'/>
                        </div>
                        <div className="z-0 relative top-36 left-40">
                            <img src={stroke} className='z-10' alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-items-center max-h-[100vh] w-[100vw] w-[100svw] justify-center">
                    <div className="w-[45%] px-12 font-bold">
                        <div className=" h-[60vh] flex justify-center flex-col items-center">
                            <h1 className='text-4xl'>Launch your career with Eduhub as your foundation</h1>
                            <img src={global} alt="" className="h-[40vh]" />
                        </div>
                    </div>
                    <div className="w-[40%] grid items-center">
                        <div className="grid p-2 grid-cols-2">
                            <div className="py-5 w-[300px]">
                                <h3 className='font-bold text-2xl'>Interview Questionaire</h3>
                                <p className="text-base">Transform interviews into insightful conversations with our app, offering a customizable questionnaire platform that adapts to your unique hiring needs.</p>
                            </div>
                            <div className="w-[300px] py-5">
                                <h3 className='text-2xl font-bold'>Voice out your opinion</h3>
                                <p className="text-base">Transform interviews into insightful conversations with our app, offering a customizable questionnaire platform that adapts to your unique hiring needs.</p>
                            </div>
                            <div className="w-[300px] py-5">
                                <h3 className='text-2xl font-bold'>Connect with seniors and alumni</h3>
                                <p className="text-base">Transform interviews into insightful conversations with our app, offering a customizable questionnaire platform that adapts to your unique hiring needs.</p>
                            </div>
                            <div className="w-[300px] py-5 ">
                                <h3 className='text-2xl font-bold'>Chat with your friends</h3>
                                <p className="text-base">Transform interviews into insightful conversations with our app, offering a customizable questionnaire platform that adapts to your unique hiring needs.</p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </>
    )
}
