"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons
import { useSearchParams } from "next/navigation";

const PasswordField = () => {
    const searchParams = useSearchParams()
    const [showPassword, setShowPassword] = useState(false);
    const [password, setpassword] = useState(searchParams.get("password") || "")

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative z-0 w-full text-black mb-5 group">
            <input
                type={showPassword ? "text" : "password"}
                name="floating_password"
                value={password || ""}
                id="floating_password"
                className="block py-2.5 text-black px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setpassword(e.target.value)}
                required
            />
            <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                Password
            </label>
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-3 text-black "
            >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
        </div>
    );
};

export default PasswordField;
