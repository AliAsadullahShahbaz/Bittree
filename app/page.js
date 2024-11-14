"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [text, setText] = useState("");
  const router = useRouter();

  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  };

  return (
    <main>
      <section className="bg-[#254f1a] min-h-screen grid grid-cols-1 md:grid-cols-2 p-5 md:p-10 lg:p-20">
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="text-[#d2e823] font-extrabold text-4xl md:text-5xl lg:text-7xl">Everything you</p>
          <p className="text-[#d2e823] font-extrabold text-4xl md:text-5xl lg:text-7xl">are. In one,</p>
          <p className="text-[#d2e823] font-extrabold text-4xl md:text-5xl lg:text-7xl">simple link in bio.</p>
          
          <p className="text-[#d2e823] font-semibold my-5 text-sm md:text-lg">
            Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate, and sell from your social media profiles.
          </p>
          
          <div className="input flex flex-col md:flex-row gap-2 items-center md:items-start">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="py-2 px-4 w-full md:w-auto focus:outline-green-900 rounded-lg"
              type="text"
              placeholder="Enter your Handle"
            />
            <button
              onClick={createTree}
              className="bg-pink-300 rounded-full px-4 py-2 mt-2 md:mt-0 font-semibold"
            >
              Claim your Linktree
            </button>
          </div>
        </div>
        
        <div className="flex justify-center items-center mt-10 md:mt-0">
          <Image width={400} height={400} className="w-64 h-64 md:w-96 md:h-96 lg:w-auto lg:h-auto" src="/home.png" alt="HOME PAGE IMAGE" />
        </div>
      </section>

      <section className="bg-[rgb(233,192,233)] grid grid-cols-1 md:grid-cols-2 justify-center items-center min-h-screen p-5 md:p-10 text-[#502274]">
        <div className="flex justify-center">
          <Image width={700} height={700} src="/Picture1.png" alt="HOME PAGE IMAGE" className="w-full md:w-auto" />
        </div>
        <div className="text flex flex-col gap-5 pr-5 md:pr-14">
          <h1 className="font-extrabold text-4xl md:text-6xl text-center md:text-left">
            Create and customize your Linktree in minutes
          </h1>
          <p className="font-semibold text-sm md:text-lg text-center md:text-left">
            Connect your social platforms and customize your link in bio landing page for better engagement.
          </p>
          <button className="bg-[#502274] text-white rounded-full px-4 py-4 font-semibold w-fit mx-auto md:mx-0">Get started for free</button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-[#780016] min-h-screen p-5 md:p-10 text-[#e9c0e9]">
        <div className="text flex flex-col gap-5 pl-5 md:pl-32">
          <h1 className="font-extrabold text-4xl md:text-5xl text-center md:text-left">
            Share your Linktree from your social media profiles
          </h1>
          <p className="font-semibold text-sm md:text-lg text-center md:text-left">
            Add your Linktree URL to reach your audience and use QR codes to drive offline traffic online.
          </p>
          <button className="bg-[#e9c0e9] text-black rounded-full px-4 py-4 font-semibold w-fit mx-auto md:mx-0">Get started for free</button>
        </div>
        <div className="flex justify-center mt-10 md:mt-0">
          <Image width={500} height={500} src="/puple.png" alt="Additional Info" className="w-full md:w-auto" />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-[#f5f5f2] min-h-screen p-5 md:p-10 text-black">
        <div className="flex justify-center">
          <Image width={500} height={500} src="/math.png" alt="Analytics" className="w-full md:w-auto" />
        </div>
        <div className="text flex flex-col gap-5 w-full md:w-auto pr-5 md:pr-10">
          <h1 className="text-4xl font-extrabold text-center md:text-left">Analyze your audience and keep them engaged</h1>
          <p className="text-sm md:text-lg text-center md:text-left">
            Track engagement, revenue, and make updates to maximize audience retention.
          </p>
          <button className="bg-[#e9c0e9] text-black rounded-full px-4 py-4 font-semibold w-fit mx-auto md:mx-0">Get started for free</button>
        </div>
      </section>

      <section className="bg-[rgb(233,192,233)] w-full overflow-hidden py-7 text-[#502274]">
        <h1 className="text-center text-4xl font-extrabold my-4">
          The only link in bio trusted by 50M+
          <span className="text-[#780016] block">influencers</span>
        </h1>
        <div className="slider  scroll-animate   scroll-smooth py-5 px-5 flex gap-6 scroll-hide transition-transform duration-500">
          <Image width={300} height={300} src="/spuare.png" className="inline-block rounded-xl shadow-black hover:shadow-lg" alt="Slider Image" />
          <Image width={300} height={300} src="/spuare.png" className="inline-block rounded-xl shadow-black hover:shadow-lg" alt="Slider Image" />
          <Image width={300} height={300} src="/spuare.png" className="inline-block rounded-xl shadow-black hover:shadow-lg" alt="Slider Image" />
          <Image width={300} height={300} src="/spuare.png" className="inline-block rounded-xl shadow-black hover:shadow-lg" alt="Slider Image" />
          <Image width={300} height={300} src="/spuare.png" className="inline-block rounded-xl shadow-black hover:shadow-lg" alt="Slider Image" />
          <Image width={300} height={300} src="/spuare.png" className="inline-block rounded-xl shadow-black hover:shadow-lg" alt="Slider Image" />
          <Image width={300} height={300} src="/spuare.png" className="inline-block rounded-xl shadow-black hover:shadow-lg" alt="Slider Image" />
          <Image width={300} height={300} src="/spuare.png" className="inline-block rounded-xl shadow-black hover:shadow-lg" alt="Slider Image" />
          <Image width={300} height={300} src="/spuare.png" className="inline-block rounded-xl shadow-black hover:shadow-lg" alt="Slider Image" />
          <Image width={300} height={300} src="/spuare.png" className="inline-block rounded-xl shadow-black hover:shadow-lg" alt="Slider Image" />
        </div>
      </section>

      <section className="flex flex-col gap-10 min-h-screen bg-pink-200 justify-center items-center py-10 text-center">
        <h1 className="font-bold text-4xl">The fast, friendly, and powerful link in bio tool.</h1>
        <button className="bg-[rgb(233,192,233)] text-purple-500 rounded-full px-4 py-4 font-semibold w-fit">Explore all plans</button>
        <div className="flex flex-wrap gap-10 justify-center">
          <div className="cards bg-slate-300 flex flex-col justify-center items-center p-10 w-64">
            <Image width={100} height={100} src="/wifi.png" alt="Feature Image" />
            <p className="text-center mt-4">Seamlessly connect your Linktree with the tools you already use.</p>
          </div>
          <Image width={100} height={100} src="/icons.png" alt="Feature Icon" />
          <Image width={100} height={100} src="/calendar.png" alt="Feature Calendar" />
        </div>
      </section>
    </main>
  );
}
