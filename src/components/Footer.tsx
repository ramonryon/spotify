import { Heart, Laptop2, LayoutList, Maximize, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (<footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
            <Image src="/album.webp" width={64} height={64} alt="Capa do album somewhere in time da banda Iron maiden" />
            <div className="flex flex-col">
                <strong className="font-normal">Wasted Years</strong>
                <span className="text-xs text-zinc-400">Iron Maiden</span>
            </div>
            <Heart />
        </div>
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
                <Shuffle size={20} className="text-zinc-200" />
                <SkipBack size={20} className="text-zinc-200" />

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-white text-black">
                    <Play />
                </button>

                <SkipForward size={20} className="text-zinc-200" />
                <Repeat size={20} className="text-zinc-200" />
            </div>
            <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-400">0:41</span>
                <div className="h-1 rounded-full w-96 bg-zinc-600">
                    <div className="bg-zinc-200 w-40 h-1 rounded-full">

                    </div>
                </div>
                <span className="text-xs text-zinc-400">2:24</span>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <Mic2 size={20} />
            <LayoutList size={20} />
            <Laptop2 size={20} />
            <div className="flex items-center gap-2">
                <Volume size={20} />
                <div className="h-1 rounded-full w-24 bg-zinc-600">
                    <div className="bg-zinc-200 w-10 h-1 rounded-full">

                    </div>
                </div>
                <Maximize size={20} />
            </div>
        </div>
    </footer>)
}