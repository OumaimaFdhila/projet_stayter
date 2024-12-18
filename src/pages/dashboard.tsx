
import LeftDouch from "../components/left_douch";
import MiddleDouch from "../components/middle_douch";
import Navbar from "../components/navbar";
import RightDouche from "../components/right_douche";
import UserTable from "../components/userTable";

export default function Dashboard() {
    return (
        <div className="w-screen h-screen  flex flex-col gap-20   ">
            <LeftDouch/>
            <MiddleDouch/>
            <RightDouche/>
            <Navbar/>
            <p className=" text-3xl  px-24">All workers</p>
            <UserTable />
        </div>
    )
}