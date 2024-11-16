"use client";
import React, { useState , useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';


const Login = () => {
    // const searchParams = useSearchParams()
    // const [firstname, setfirstname] = useState(searchParams.get('firstname'));
    // const [lastname, setlastname] = useState(searchParams.get('lastname'));
    // const [email, setemail] = useState(searchParams.get('email'));
    // const [about, setabout] = useState(searchParams.get('about'));
    // const router = useRouter();

    const searchParams = useSearchParams();
    const router = useRouter();
 
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [about, setabout] = useState("");
    const [isLoading, setIsLoading] = useState(false);
 
    useEffect(() => {
        setfirstname(searchParams.get("firstname") || "");
        setlastname(searchParams.get("lastname") || "");
        setemail(searchParams.get("email") || "");
        setabout(searchParams.get("about") || "");
    }, [searchParams]);



    const handleSave = async (e) => {
        e.preventDefault();
        setIsLoading(true);
 
        const payload = { firstname, lastname, email, about };
 
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
 
            const result = await response.json();
 
            if (response.ok && result.success) {
                toast.success(result.message);
                setTimeout(() => {
                    router.push("/");
                }, 10000);
            } else {
                throw new Error(result.message || "Failed to save data");
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }

        setIsLoading(true);

        // Simulate a save operation
        setTimeout(() => {
            setIsLoading(false); // Stop loading after saving
        }, 200); // Simulate save completion in 2 seconds

        // Redirect after 10 seconds
        setTimeout(() => {
            router.push('/');
        }, 1000);
    };
   
    // 
    return (
        
        
        
        
        
        
        <div className="flex justify-center items-center bg-purple-400 h-full flex-col">
           <ToastContainer />
           <form>
               <h1 className="text-3xl font-bold">Login page</h1>
               <div className="space-y-12">
               <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">First name</label>
                                <div className="mt-2">
                                    <input value={firstname} onChange={(e) => setfirstname(e.target.value)} type="text" name="firstname" id="first-name" autoComplete="given-name" className="block w-full bg-purple-300 px-5  font-bold focus:outline-green-800 rounded-full border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">Last name</label>
                                <div className="mt-2">
                                    <input value={lastname} onChange={(e) => setlastname(e.target.value)} type="text" name="lastname" id="last-name" autoComplete="family-name" className="block w-full bg-purple-300 px-5  font-bold focus:outline-green-800 rounded-full border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input value={email} onChange={(e) => setemail(e.target.value)} id="email" name="email" type="email" autoComplete="email" className="block w-full bg-purple-300 px-5  font-bold focus:outline-green-800 rounded-full border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm font-medium text-gray-900">About</label>
                                <div className="mt-2">
                                    <textarea value={about} onChange={(e) => setabout(e.target.value)} id="about" name="about" rows="3" className="block w-full bg-purple-300 px-5  font-bold focus:outline-green-800 rounded-full border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"></textarea>
                                </div>
                                <p className="mt-3 text-sm text-gray-600">Write a few sentences about yourself.</p>
                            </div>
                        </div>
               </div>

               <div className="mt-6 flex items-center justify-end gap-x-6">
                   <button
                       type="button"
                       onClick={() => router.push("/")}
                       className="text-sm font-semibold text-gray-900"
                   >
                       Cancel
                   </button>
                   <button
                       type="submit"
                       onClick={handleSave}
                       className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                       disabled={isLoading}
                   >
                       {isLoading ? "Saving..." : "Save"}
                   </button>
               </div>
           </form>
       </div>
    

);
};

export default Login;