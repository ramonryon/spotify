import { HomeIcon, Library, Search } from "lucide-react";

export default function Siderbar() {
    return (<aside className="w-72 bg-zinc-950 p-6">
        <nav className="space-y-5">
            <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                <HomeIcon />
                Home
            </a>
            <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                <Search />
                Search
            </a>
            <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                < Library />
                Your Library
            </a>
        </nav>

        <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100">Cardio Crush</a>
            <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100">Workout Warriors</a>
            <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100">Gym Groove</a>
            <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100">Run Rhythms</a>
            <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100">Pump It Up!</a>
            <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100">Fitness Frenzy</a>
            <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100">Sweat Session Sounds</a>
            <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100">Crossfit Jamz</a>
            <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100">Yoga Vibes</a>
            <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100">Chill Cool-Downs</a>

        </nav>
    </aside>)
}