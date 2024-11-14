import Image from "next/image"
import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "@/components/notFound.js"
export default async function Page({params}) {


  const handle = (await params).handle
  // const { handle } = params; 
  const client = await clientPromise
  const db = await client.db('bittree')
  const collection = await db.collection('links')


  const item = await collection.findOne({ handle })
  if(!item){
    return notFound()

  } 
  return  <div className="bg-purple-300 opacity-90 flex flex-col justify-center items-center py-10 min-h-screen">
    {/* Please Wait */}
    {item &&
     <div className="photo flex justify-center items-center flex-col">
      <Image width={95} height={95}
        // src="/home.png"
        className="rounded-full"
        src={item.pic}
        alt="" />


      <span className="handle font-bold lowercase text-lg">@{item.handle}</span>
      <div className="desc w-80">{item.desc}</div>
      <div className="links">
        {item.links.map((item, index) => {
          return <div  key={index} >
          <Link target="_block" href={item.link}> 
          <div className="py-5 my-4 px-7 gap-4  min-w-96 flex justify-center items-center  bg-purple-700 bg-opacity-80 text-opacity-100 text-white transition-transform duration-150 ease-[cubic-bezier(0,0.2,0.5,3)] shadow-2xl shadow-[rgba(10,11,13,0.08)] rounded-md ">


            {/* <div  className="link hover:text-blue-600 text-lg font-semibold">{item.link}</div> */}
            <div className="font-sans font-bold">{item.linkText}</div>
 </div>
          </Link>
     
      </div> 
     })}
      <div className="flex flex-wrap items-center justify-center space-x-4">
        {/* X Icon */}
        <Link
          title="X"
          data-testid="SocialIcon"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://x.com/`}
          aria-label="X"
          className="z-0 p-2 transition-transform hover:scale-[1.075]"
        >
          <svg viewBox="0 0 24 24" className="pointer-events-none h-6 w-6 fill-current">
            <title>X</title>
            <path d="m2.538 3 7.425 9.928L2 21h1.5l7.033-7.067L16 21h5.232l-7.662-9.995 6.955-7.514h-1.5L13 10 7.77 3H2.538Zm1.994 1h2.645l12.087 16h-2.525L4.532 4Z"></path>
          </svg>
          <span className="sr-only">X</span>
        </Link>

        {/* TikTok Icon */}
        <Link
          title="TikTok"
          data-testid="SocialIcon"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://tiktok.com/`}
          aria-label="TikTok"
          className="z-0 p-2 transition-transform hover:scale-[1.075]"
        >
          <svg viewBox="0 0 24 24" className="pointer-events-none h-6 w-6 fill-current">
            <title>TikTok</title>
            <path d="M9.37,23.5a7.468,7.468,0,0,1,0-14.936.537.537,0,0,1,.538.5v3.8a.542.542,0,0,1-.5.5,2.671,2.671,0,1,0,2.645,2.669.432.432,0,0,1,0-.05V1a.5.5,0,0,1,.5-.5h3.787a.5.5,0,0,1,.5.5A4.759,4.759,0,0,0,21.59,5.76a.5.5,0,0,1,.5.5L22.1,10a.533.533,0,0,1-.519.515,9.427,9.427,0,0,1-4.741-1.268v6.789A7.476,7.476,0,0,1,9.37,23.5Z"></path>
          </svg>
          <span className="sr-only">TikTok</span>
        </Link>

        {/* YouTube Icon */}
        <Link
          title="YouTube"
          data-testid="SocialIcon"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.youtube.com/`}
          aria-label="YouTube"
          className="z-0 p-2 transition-transform hover:scale-[1.075]"
        >
          <svg viewBox="0 0 24 24" className="pointer-events-none h-6 w-6 fill-current">
            <title>YouTube</title>
            <path d="M12,20.55c-.3,0-7.279-.006-9.115-.5A3.375,3.375,0,0,1,.5,17.665,29.809,29.809,0,0,1,0,12,29.824,29.824,0,0,1,.5,6.334,3.375,3.375,0,0,1,2.885,3.948c1.836-.492,8.819-.5,9.115-.5s7.279.006,9.115.5A3.384,3.384,0,0,1,23.5,6.334,29.97,29.97,0,0,1,24,12a29.97,29.97,0,0,1-.5,5.666,3.384,3.384,0,0,1-2.388,2.386C19.279,20.544,12.3,20.55,12,20.55Z"></path>
          </svg>
          <span className="sr-only">YouTube</span>
        </Link>
      </div>
    </div>
  </div>}
  </div>
}