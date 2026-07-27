import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";


import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
} from "react-icons/fa";

import logo from "../assets/images/logo.png";
import firstpage from "../assets/images/firstpage.jpg";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  return (
    <section
      className="
      min-h-screen
      bg-gray-100
      dark:bg-[#0B0815]
      transition-colors
      duration-500
      overflow-hidden
      relative
      flex
      items-center
      justify-center
      px-6
      py-12
      "
    >

      {/* Background Glow */}

      <div
        className="
        absolute
        w-[650px]
        h-[650px]
        rounded-full
        bg-yellow-300/20
        dark:bg-purple-600/15
        blur-[170px]
        animate-pulse
        "
      />

      <div
        className="
        relative
        max-w-7xl
        w-full
        grid
        lg:grid-cols-2
        gap-16
        items-center
        "
      >

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
          hidden
          lg:flex
          flex-col
          items-center
          justify-center
          text-center
          relative
          "
        >

          <div
            className="
            absolute
            w-[420px]
            h-[420px]
            rounded-full
            bg-yellow-300/20
            dark:bg-purple-600/15
            blur-[120px]
            animate-pulse
            "
          />

          <motion.img
            src={firstpage}
            alt="MindCare"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            relative
            w-full
            max-w-[520px]
            drop-shadow-[0_35px_80px_rgba(124,58,237,0.25)]
            select-none
            pointer-events-none
            "
          />

          <img
            src={logo}
            alt="Logo"
            className="
            w-20
            mt-8
            mb-5
            "
          />

          <h1
            className="
            text-5xl
            font-extrabold
            text-black
            dark:text-white
            "
          >
            Welcome Back
          </h1>

          <p
            className="
            mt-5
            max-w-md
            text-lg
            leading-8
            text-gray-600
            dark:text-gray-300
            "
          >
            Continue your mental wellness journey
            with personalized assessments,
            expert guidance and emotional support.
          </p>

        </motion.div>

       {/* RIGHT SIDE */}

<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  whileHover={{
    y: -6,
    scale: 1.01,
  }}
  transition={{
    type: "spring",
    stiffness: 250,
    damping: 20,
  }}
  className="
  w-full
  max-w-md
  mx-auto
  "
>

  <div
    className="
    rounded-3xl
    bg-white/80
    dark:bg-[#16111F]/90
    backdrop-blur-xl
    border
    border-gray-200
    dark:border-[#2A223A]
    shadow-[0_25px_60px_rgba(0,0,0,0.12)]
    dark:shadow-[0_25px_60px_rgba(0,0,0,0.45)]
    p-8
    transition-all
    duration-500
    "
  >

    <motion.h2
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="
      text-5xl
      font-extrabold
      text-center
      text-black
      dark:text-white
      "
    >
      Login
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.35 }}
      className="
      mt-3
      text-center
      text-gray-600
      dark:text-gray-400
      "
    >
      Sign in to continue to MindCare
    </motion.p>

    {/* Email */}

            <div className="mt-8">
            <label
                className="
                text-sm
                font-semibold
                text-gray-700
                dark:text-gray-300
                "
              >
                
                Email
              </label>

              <div
                className="
                mt-2
                flex
                items-center
                rounded-2xl
                border
                border-gray-300
                dark:border-[#312847]
                bg-white
                dark:bg-[#1E182B]
                px-4
                focus-within:border-yellow-400
                focus-within:ring-2
                focus-within:ring-yellow-400/30
                transition-all
                duration-300
                "
              >

                <FaEnvelope className="text-gray-400" />

                <input
  type="email"
  placeholder="example@gmail.com"
  value={email}
  onChange={(e) => {
    setEmail(e.target.value);
    setError("");
  }}
  className="
  w-full
  bg-transparent
  outline-none
  px-3
  py-4
  text-black
  dark:text-white
  placeholder:text-gray-400
  
  "
/>

              </div>

            </div>

            {/* Password */}

            <div className="mt-6">

              <label
                className="
                text-sm
                font-semibold
                text-gray-700
                dark:text-gray-300
                "
              >
                Password
              </label>

              <div
                className="
                mt-2
                flex
                items-center
                rounded-2xl
                border
                border-gray-300
                dark:border-[#312847]
                bg-white
                dark:bg-[#1E182B]
                px-4
                focus-within:border-yellow-400
                focus-within:ring-2
                focus-within:ring-yellow-400/30
                transition-all
                duration-300
                "
              >

                <FaLock className="text-gray-400" />

                <input
  type={showPassword ? "text" : "password"}
  placeholder="Enter password"
  value={password}
  onChange={(e) => {
    setPassword(e.target.value);
    setError("");
  }}
  className="
  w-full
  bg-transparent
  outline-none
  px-3
  py-4
  text-black
  dark:text-white
  placeholder:text-gray-400
  "
/>

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-400" />
                  ) : (
                    <FaEye className="text-gray-400" />
                  )}
                </button>

              </div>

            </div>

            {/* Remember Me */}

            <div
              className="
              mt-5
              flex
              items-center
              justify-between
              text-sm
              "
            >

              <label
                className="
                flex
                items-center
                gap-2
                text-gray-600
                dark:text-gray-400
                "
              >
               <input
  type="checkbox"
  className="accent-yellow-400 w-4 h-4"
/>
                Remember me
              </label>

              <button
                className="
                text-yellow-500
               hover:underline
hover:text-yellow-300
                font-semibold
                transition-colors
                "
              >
                Forgot Password?
              </button>

            </div>

            {/* Login Button */}

<motion.button
  whileHover={{
    scale: email.trim() && password.trim() ? 1.03 : 1,
    y: email.trim() && password.trim() ? -2 : 0,
  }}
  whileTap={{
    scale: email.trim() && password.trim() ? 0.97 : 1,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 18,
  }}
  onClick={() => {
    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    if (!password.trim()) {
      toast.error("Please enter your password.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success("Login Successful!");

    setTimeout(() => {
      navigate("/dashboard");
    }, 1200);
  }}
  disabled={!email.trim() || !password.trim()}
  className={`
    mt-8
    w-full
    py-4
    rounded-2xl
    text-black
    text-lg
    font-bold
    flex
    items-center
    justify-center
    gap-2
    transition-all
    duration-300

    ${
      !email.trim() || !password.trim()
        ? "bg-gray-500 cursor-not-allowed opacity-60"
        : `
          bg-gradient-to-r
          from-yellow-400
          to-yellow-500
          hover:shadow-[0_0_30px_rgba(250,204,21,0.55)]
        `
    }
  `}
>
  Login
  <FaArrowRight />
</motion.button>



{/* Divider */}

            <div
              className="
              my-8
              flex
              items-center
              "
            >

              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />

              <span
                className="
                px-4
                text-sm
                text-gray-500
                "
              >
                OR
              </span>

              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
              </div>

{/* Signup */}

<p
  className="
  text-center
  text-gray-600
  dark:text-gray-400
  "
>
  Don't have an account?{" "}

  <Link
    to="/signup"
    className="
    font-bold
    text-yellow-500
   hover:underline
hover:text-yellow-300
    transition-colors
    "
  >
    Sign Up
  </Link>

</p>

</div>

</motion.div>

</div>

</section>
);
}

export default Login;