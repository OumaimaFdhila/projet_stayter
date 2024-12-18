import { SiAegisauthenticator } from "react-icons/si";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className=" h-[100px] z-10 w-full px-24 pt-10 flex justify-between items-center ">
            <div className="h-full flex items-center gap-4 ">
                <SiAegisauthenticator className="text-vert_citron" size={30}/>
                <Link to={"/"} className="font-semibold text-2xl text-white hover:text-vert_citron">FaceNet</Link>
            </div>
            <div className="flex gap-2 items-center h-full group cursor-pointer">
                <Link to="/dashboard"  className="text-vert_citron text-xl group-hover:text-white">Dashboard</Link>
                <LuCircleArrowOutUpRight className="text-vert_citron group-hover:text-white" size={20}/>
            </div>
            



        </div>
    )
}