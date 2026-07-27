import { motion } from "framer-motion";
import firstpage from "../assets/images/firstpage.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="
      relative
      pt-44
      md:pt-48
      pb-20
      min-h-[90vh]
      flex
      items-center
      overflow-hidden
      bg-white
      dark:bg-[#0B0815]
      transition-colors
      duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

        {/* Left Content */}

        <div className="w-full lg:w-1/2 text-center lg:text-left">

          <span
            data-aos="fade-down"
            data-aos-delay="100"
            className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-yellow-100
            dark:bg-yellow-400/15
            text-yellow-700
            dark:text-yellow-300
            text-sm
            font-semibold
            mb-6
            "
          >
            🧠 Your Mental Health Matters
          </span>

          <h1
            data-aos="fade-right"
            data-aos-delay="250"
            className="
            text-5xl
            md:text-6xl
            lg:text-7xl
            font-extrabold
            leading-tight
            text-black
            dark:text-white
            "
          >
            Self-Identifying
            <br />
            <span className="text-yellow-400">
              Mental Health
            </span>
          </h1>

          <p
            data-aos="fade-right"
            data-aos-delay="400"
            className="
            mt-7
            text-xl
            leading-8
            text-gray-600
            dark:text-gray-300
            max-w-lg
            "
          >
            Understand your emotional well-being with our
            self-assessment tools and connect with trusted
            mental health professionals whenever you need
            support.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="550"
            className="flex flex-col sm:flex-row gap-5 mt-10 justify-center lg:justify-start"
          >

            {/* Get Started */}

            <motion.button
  whileHover={{
    scale: 1.05,
    y: -3,
  }}
  whileTap={{
    scale: 0.95,
  }}
  onClick={() => navigate("/login")}
  className="
  px-8
  py-4
  rounded-xl
  bg-gradient-to-r
  from-yellow-400
  to-yellow-500
  text-black
  font-semibold
  text-center
  shadow-lg
  hover:shadow-[0_0_25px_rgba(250,204,21,0.45)]
  transition-all
  duration-300
  "
>
  Get Started
</motion.button>

            {/* Learn More */}

            <a
              href="#experts"
              className="
              px-8
              py-4
              rounded-xl
              border
              border-gray-300
              dark:border-[#2A223A]
              text-black
              dark:text-white
              text-center
              hover:bg-gray-100
              dark:hover:bg-[#21192F]
              dark:hover:border-yellow-400/40
              hover:-translate-y-1
              hover:scale-[1.03]
              active:scale-95
              transition-all
              duration-300
              "
            >
              Learn More
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div
          className="w-full lg:w-1/2 flex justify-center relative"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="250"
        >

          {/* Glow */}

          <div
            className="
            absolute
            w-[520px]
            h-[520px]
            rounded-full
            bg-yellow-300/20
            dark:bg-purple-600/15
            blur-[150px]
            animate-pulse
            "
          />

<motion.img
  src={firstpage}
  alt="Mental Health Illustration"
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  whileHover={{
    scale: 1.04,
    rotate: 1,
  }}
  className="
  relative
  w-full
  max-w-[520px]
  drop-shadow-[0_30px_80px_rgba(124,58,237,0.20)]
  transition-all
  duration-700
  ease-out
  animate-[float_5s_ease-in-out_infinite]
  select-none
  pointer-events-none
  "
/>

        </div>

      </div>

      {/* Bottom Fade */}

      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-24
        pointer-events-none
        bg-gradient-to-b
        from-transparent
        to-white
        dark:to-[#0B0815]
        "
      />

    </section>
  );
}

export default Hero;