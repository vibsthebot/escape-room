import Link from "next/link";
import TypewriterEffect from "../ui/typewriter";
import FadeIn from "../ui/fadeIn";
import Timer from "../ui/timer";

export default function Page(){
    return (
        <main className="flex">
            <div className="basis-1/3"/>
            <div className="basis-1/3 p-4">
                <TypewriterEffect text="The lock icon on the keypad turns green as the door slides open. You walk into the familiar command module, with its computer cluttered with sticky notes. You notice that the computer screen is filled with unintelligible symbols. Remarkably, the symbols appear to match the ones found at the bottom of the letter."/>
                <FadeIn waitBeforeFade={45000}><Link href={"/room2"}><button type="submit" className="px-2 py-2 bg-cyan-50 hover:bg-cyan-500 rounded-full">Next</button></Link></FadeIn>
            </div>
            <div className="basis-1/3"><Timer/></div>
        </main>
    )
}