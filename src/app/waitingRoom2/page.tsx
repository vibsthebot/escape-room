import Link from "next/link";
import TypewriterEffect from "../ui/typewriter";
import FadeIn from "../ui/fadeIn";
import Timer from "../ui/timer";

export default function Page(){
    return (
        <main className="flex">
            <div className="basis-1/3"/>
            <div className="basis-1/3 p-4">
                <TypewriterEffect text="You walk towards the hallway mentioned on the computer interface. You look around, and notice that it is lined with columns. As you arrive, you see another slip of paper, this time with a string of numbers on it. In addition to the numbers, it has a note on the bottom that says “clé pour échapper au module”. You look around again, and just barely notice a rectangular seam in the wall you don’t recognize. You press on the panel and it flips around to reveal another keypad with the alphabet on it. "/>
                <FadeIn waitBeforeFade={45000}><Link href={"/room3"}><button type="submit" className="px-2 py-2 bg-cyan-50 hover:bg-cyan-500 rounded-full">Next</button></Link></FadeIn>
            </div>
            <div className="basis-1/3"><Timer/></div>
        </main>
    )
}