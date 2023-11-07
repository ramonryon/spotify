import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipBack, SkipForward, Repeat } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
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
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-2">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-2">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>


          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.webp" width={104} height={104} alt="Capa do album somewhere in time da banda Iron maiden" />
              <strong>Somewhere In Time</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.webp" width={104} height={104} alt="Capa do album somewhere in time da banda Iron maiden" />
              <strong>Somewhere In Time</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.webp" width={104} height={104} alt="Capa do album somewhere in time da banda Iron maiden" />
              <strong>Somewhere In Time</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.webp" width={104} height={104} alt="Capa do album somewhere in time da banda Iron maiden" />
              <strong>Somewhere In Time</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.webp" width={104} height={104} alt="Capa do album somewhere in time da banda Iron maiden" />
              <strong>Somewhere In Time</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.webp" width={104} height={104} alt="Capa do album somewhere in time da banda Iron maiden" />
              <strong>Somewhere In Time</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Ramon Ryon</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album.webp" className="w-full" width={120} height={120} alt="Capa do album somewhere in time da banda Iron maiden" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Megadeth, Angra, AC/DC and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album.webp" className="w-full" width={120} height={120} alt="Capa do album somewhere in time da banda Iron maiden" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Megadeth, Angra, AC/DC and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album.webp" className="w-full" width={120} height={120} alt="Capa do album somewhere in time da banda Iron maiden" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Megadeth, Angra, AC/DC and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album.webp" className="w-full" width={120} height={120} alt="Capa do album somewhere in time da banda Iron maiden" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Megadeth, Angra, AC/DC and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album.webp" className="w-full" width={120} height={120} alt="Capa do album somewhere in time da banda Iron maiden" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Megadeth, Angra, AC/DC and more</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
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
        <div>

        </div>
      </footer>
    </div>
  )
}
