import { Button } from "@nextui-org/react";
import LeftDouch from "../components/left_douch";
import MiddleDouch from "../components/middle_douch";
import Navbar from "../components/navbar";
import RightDouche from "../components/right_douche";
import { BiSolidRightArrow } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import Footer from "../components/footer";

export default function home(){
    return(
        <div className="relative dark w-screen h-screen flex flex-col items-center gap-20">
            <LeftDouch/>
            <MiddleDouch/>
            <RightDouche/>
            <Navbar/>
            <div className="flex flex-col gap-10 items-center">
                <div className="flex z-10  w-fit items-center gap-2 py-2 px-5 border-[1px] border-white/80 rounded-3xl bg-gradient-to-b from-white/50 to-white/5  ">
                    <BsStars className="text-vert_citron"/>
                    <p className="text-white/80">AI Powered System</p>
                </div>
                <p className="text-7xl text-center leading-tight">
                    Unlock the future of your<br/> work with FaceNet
                </p>
                <p className="text-2xl text-center text-white/50 ">FaceNet simplifies work management and enhances employee<br/> recognition through seamless face recognition technology.</p>
                <Button variant="bordered" className="border-vert_citron/50 text-white text-xl py-7 pl-10 pr-7 rounded-full flex gap-2 items-center justify-center">
                Start
                <BiSolidRightArrow className="text-vert_citron mt-[2px]"/>
                </Button>

            </div>
            <Footer/>
            


            

            
            

        </div>
    )
}