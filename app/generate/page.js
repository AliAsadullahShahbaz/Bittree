"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';

const Generate = () => {
    // const [link, setlink] = useState("")
    const searchParams = useSearchParams()
    // const [linkText, setlinkText] = useState("")
    const [links, setLinks] = useState([{ link: "", linkText: "" }])
    const [handle, sethandle] = useState(searchParams.get('handle'))
    const [pic, setpic] = useState("")
    const [desc, setdesc] = useState("")


    const handleChange = (index, link, linkText) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i == index) {
                    return { link, linkText }
                }
                else {
                    return item
                }
            })

        })
    }
    const addLink = () => {
        setLinks(links.concat({ link: "", linkText: "" }))
    }



    const submitLinks = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic,
            "desc": desc
        });
        console.log(raw)
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)


        const result = await r.json()
        if (result.success) {
            toast.success(result.message)
        }
        else {
            toast.error(result.message)
        }


    }


    // const notify = () => toast("Wow so easy !");
    return (
        <div className='bg-purple-300 min-h-screen text-gray-800 p-4'>
        {/* ToastContainer */}
        <ToastContainer />
      
        <div className='grid grid-cols-1  md:grid-cols-2 gap-8'>
          {/* Left Column - Form Section */}
          <div className="cols1 flex flex-col justify-center items-center md:items-start">
            <div className='flex flex-col gap-8 mt-8 w-full'>
              <h1 className='font-extrabold text-2xl md:text-3xl text-center md:text-left'>Create your Bittree</h1>
      
              {/* Step 1: Choose Your Name */}
              <div className="items">
                <h3 className='font-semibold text-lg md:text-xl'>Step 1: Choose your name</h3>
                <div className='mt-2'>
                  <input
                    value={handle || ""}
                    onChange={(e) => sethandle(e.target.value)}
                    className='py-2 px-4 w-full md:w-96 focus:outline-green-900 rounded-full'
                    type="text"
                    placeholder='Choose a handle'
                  />
                </div>
              </div>
      
              {/* Step 2: Add Links */}
              <div className="items">
                <h3 className='font-semibold text-lg md:text-xl'>Step 2: Add links</h3>
                {links && links.map((item, index) => (
                  <div key={index} className='flex flex-col md:flex-row gap-2 mt-2'>
                    <input
                      value={item.linkText || ""}
                      onChange={(e) => handleChange(index, item.link, e.target.value)}
                      className='py-2 px-4 w-full md:w-44 focus:outline-green-900 rounded-full'
                      type="text"
                      placeholder='Enter link text'
                    />
                    <input
                      value={item.link || ""}
                      onChange={(e) => handleChange(index, e.target.value, item.linkText)}
                      className='py-2 px-4 w-full md:w-44 focus:outline-green-900 rounded-full'
                      type="text"
                      placeholder='Enter link'
                    />
                  </div>
                ))}
                <button
                  onClick={() => addLink()}
                  className='mt-4 rounded-3xl py-2 px-4 bg-black w-full md:w-32 text-white text-sm'
                >
                  + Add Link
                </button>
              </div>
      
              {/* Step 3: Add Picture and Description */}
              <div className="items">
                <h3 className='font-semibold text-lg md:text-xl'>Step 3: Add Picture and Description</h3>
                <div className='mt-2 flex flex-col gap-4'>
                  <input
                    value={desc || ""}
                    onChange={(e) => setdesc(e.target.value)}
                    className='py-2 px-4 w-full md:w-96 focus:outline-green-900 rounded-full'
                    type="text"
                    placeholder='Enter Description'
                  />
                  <input
                    value={pic || ""}
                    onChange={(e) => setpic(e.target.value)}
                    className='py-2 px-4 w-full md:w-96 focus:outline-green-900 rounded-full'
                    type="text"
                    placeholder='Enter link of your image'
                  />
                  <button
                    disabled={pic === "" || handle === "" || links[0]?.linkText === ""}
                    onClick={() => submitLinks()}
                    className='disabled:bg-gray-400 disabled:text-gray-600 rounded-3xl py-2 px-4 w-full md:w-auto bg-black text-sm text-white'
                  >
                    Create Your BitTree
                  </button>
                </div>
              </div>
            </div>
          </div>
      
          {/* Right Column - Image Section */}
          <div className="cols2 w-full h-[50vh] md:h-auto flex justify-center items-center">
            <Image
              width={600}
              height={800}
              className='w-full h-full object-contain'
              src="/generate.webp"
              alt="Generate your links"
            />
          </div>
        </div>
      </div>
      
    )
}

export default Generate