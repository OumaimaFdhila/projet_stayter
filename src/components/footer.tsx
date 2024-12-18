import { Avatar, AvatarGroup } from "@nextui-org/react";

export default function Footer() {
    return (
        <div className="dark w-full h-[180px] flex justify-between px-24 items-center ">
            <div className="flex items-center gap-4">
                <AvatarGroup isBordered >
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                </AvatarGroup>
                <p>
                    <span className="text-vert_citron">150k users</span><br/>joined every month
                </p>

            </div>
            <img src="/logo-1.svg" width={200} height={200} alt="logo" />
            <img src="/logo-4.svg" width={200} height={200} alt="logo" />
            <img src="/logo-1.svg" width={200} height={200} alt="logo" />
            <img src="/logo-4.svg" width={200} height={200} alt="logo" />
        </div>
    );
}
