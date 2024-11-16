"use client"
import PasswordField from '@/components/password'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const searchParams = useSearchParams();
  const router = useRouter();


  const [email, setemail] = useState(searchParams.get("email") || "")
  const [password, setpassword] = useState(searchParams.get("password") || "")
  const [confirmpassword, setconfirmpassword] = useState(searchParams.get("confirmpassword") || "")
  const [firstname, setfirstname] = useState(searchParams.get("firstname") || "")
  const [lastname, setlastname] = useState(searchParams.get("lastname") || "")
  const [isLoading, setisLoading] = useState(false)

  const handleSave = async (e) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "fistname": firstname,
        "lastname": lastname,
        "password": password,
        "confirmpassword": confirmpassword,
        "email": email
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      const r = await fetch("/api/signup", requestOptions)


      const result = await r.json();
      
      if(result){
     console.log("saved")
     toast.success(result.message)
   }
   else {
    toast.error(result.message || "Failed to save data")
    // throw new Error(result.message || "Failed to save data");
  }
        setTimeout(() => {
          router.push("/");
        }, 10000);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setisLoading(false);
    }

   

    setisLoading(true);

    // Simulate a save operation
    setTimeout(() => {
      setisLoading(false); // Stop loading after saving
    }, 200); // Simulate save completion in 2 seconds

    // Redirect after 10 seconds
    setTimeout(() => {
      router.push('/');
    }, 1000);
  }

  return (
    <div className='w-full h-screen flex flex-col justify-center md:items-center bg-purple-200 text-black '>
      <h1 className='md:text-7xl text-3xl shadow-xl font-extrabold text-center'>Signup to Bittree</h1>
      <form className="max-w-md mx-auto my-5 w-full h-[50vh] shadow-2xl  border-slate-500 border-x-4 bg-pink-100 md:p-5">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            value={email || ""}
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-black
       duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <PasswordField />

        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            value={password || ""}
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => setpassword(e.target.value)}
            required
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-black
       duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstname"
              value={firstname || ""}
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setfirstname(e.target.value)}
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-black
         duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="lastname"
              value={lastname || ""}
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setlastname(e.target.value)}
              required
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-black
         duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleSave}
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  )
}

export default Signup