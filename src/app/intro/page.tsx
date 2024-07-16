import Link from "next/link";
import TypewriterEffect from "../ui/typewriter";
import FadeIn from "../ui/fadeIn";

export default function Page(){
    return (
        <main className="flex">
            <div className="basis-1/3"/>
            <div className="basis-1/3 p-4">
                <TypewriterEffect text="You wake up in your tiny sleeping area to the sound of alarms blaring. You are the pilot of the S.S. Syntar, a cargo ship on a mission transferring raw materials from the mining planets to the Stellar Union capital. You try the door to the command module, but it is locked. A blue keypad with a red lock icon and the letters A-Z lights up next to the door. You look around at the room bathed in red warning lights, and notice a slip of paper sticking out of the logbook. You pick it up, and it reads: "/>
                <FadeIn waitBeforeFade={45000}><Link href={"/room1"}><button type="submit" className="px-2 py-2 bg-cyan-50 hover:bg-cyan-500 rounded-full">Next</button></Link></FadeIn>
            </div>
        </main>
    )
}