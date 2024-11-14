"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';


const Login = () => {
    const searchParams = useSearchParams()
    const [firstname, setfirstname] = useState(searchParams.get('firstname'));
    const [lastname, setlastname] = useState(searchParams.get('lastname'));
    const [email, setemail] = useState(searchParams.get('email'));
    const [about, setabout] = useState(searchParams.get('about'));
    const router = useRouter();

    const handleSave = async (e) => {
        e.preventDefault();
        console.log(firstname, lastname, email, about);
        
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "about": about
        });
        
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const r = await fetch("/api/login", requestOptions);
            const result = await r.json();
            console.log(result);
            if (result.success) {
                toast.success(result.message)
            }
            else {
                toast.error(result.message)
            }
            router.redirect("/")
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className='flex justify-center items-center bg-purple-400 h-full flex-col'>
            <ToastContainer />
            <form onSubmit={handleSave}>
                <h1 className='text-3xl font-bold'>Login page</h1>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">First name</label>
                                <div className="mt-2">
                                    <input value={firstname} onChange={(e) => setfirstname(e.target.value)} type="text" name="firstname" id="first-name" autoComplete="given-name" className="block w-full bg-purple-300 font-bold focus:outline-green-800 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">Last name</label>
                                <div className="mt-2">
                                    <input value={lastname} onChange={(e) => setlastname(e.target.value)} type="text" name="lastname" id="last-name" autoComplete="family-name" className="block w-full bg-purple-300 font-bold focus:outline-green-800 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input value={email} onChange={(e) => setemail(e.target.value)} id="email" name="email" type="email" autoComplete="email" className="block w-full bg-purple-300 font-bold focus:outline-green-800 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm font-medium text-gray-900">About</label>
                                <div className="mt-2">
                                    <textarea value={about} onChange={(e) => setabout(e.target.value)} id="about" name="about" rows="3" className="block w-full bg-purple-300 font-bold focus:outline-green-800 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"></textarea>
                                </div>
                                <p className="mt-3 text-sm text-gray-600">Write a few sentences about yourself.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold text-gray-900">Cancel</button>
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
