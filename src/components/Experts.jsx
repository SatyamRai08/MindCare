import expert1 from "../assets/images/expert1.png";
import expert2 from "../assets/images/expert2.png";
import expert3 from "../assets/images/expert3.png";
import expert4 from "../assets/images/expert4.png";

import { motion } from "framer-motion";

import {
  FaStar,
  FaCheckCircle,
  FaCircle,
  FaCalendarAlt,
  FaUserMd,
} from "react-icons/fa";

function Experts() {
  const experts = [
    {
      name: "Dr. Sarah Johnson",
      role: "Clinical Psychologist",
      image: expert1,
      exp: "12+ Years Experience",
      status: "Available Today",
      tags: ["Anxiety", "Depression"],
    },
    {
      name: "Dr. Michael Lee",
      role: "Psychiatrist",
      image: expert2,
      exp: "15+ Years Experience",
      status: "Available Today",
      tags: ["Stress", "Trauma"],
    },
    {
      name: "Dr. Emily Brown",
      role: "Therapist",
      image: expert3,
      exp: "10+ Years Experience",
      status: "Available Today",
      tags: ["Sleep", "Anxiety"],
    },
    {
      name: "Dr. David Wilson",
      role: "Counselor",
      image: expert4,
      exp: "9+ Years Experience",
      status: "Available Today",
      tags: ["Counseling", "Wellness"],
    },
  ];

  return (
    <section
      id="experts"
      className="
      scroll-mt-24
      py-24
      bg-white
      dark:bg-[#0B0815]
      transition-colors
      duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div
          className="text-center"
          data-aos="fade-up"
        >

          <span
            className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-yellow-100
            dark:bg-yellow-400/15
            text-yellow-700
            dark:text-yellow-300
            font-semibold
            text-sm
            "
          >
            <FaUserMd />
            Trusted Professionals
          </span>

          <h2
            className="
            mt-6
            text-4xl
            md:text-5xl
            font-extrabold
            text-black
            dark:text-white
            "
          >
            Meet Our Experts
          </h2>

          <p
            className="
            mt-5
            text-lg
            leading-8
            text-gray-600
            dark:text-gray-300
            max-w-2xl
            mx-auto
            "
          >
            Connect with licensed psychologists,
            therapists and counselors dedicated
            to helping you improve your emotional
            well-being.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {experts.map((expert, index) => (

            <motion.div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 120}

              whileHover={{
                y: -14,
                rotate: 0.8,
                scale: 1.025,
              }}

              transition={{
                type: "spring",
                stiffness: 340,
                damping: 19,
                mass: 0.4,
              }}

              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              bg-white
              dark:bg-[#16111F]
              border
              border-gray-200
              dark:border-[#241D35]
              shadow-lg
              hover:border-yellow-400/40
              hover:shadow-[0_30px_60px_rgba(124,58,237,0.20)]
              "
            >

              <div
                className="
                relative
                overflow-hidden
                h-72
                bg-gradient-to-b
                from-gray-50
                to-white
                dark:from-[#201B32]
                dark:to-[#16111F]
                flex
                items-center
                justify-center
                "
              >

                <motion.img
                  src={expert.image}
                  alt={expert.name}

                  whileHover={{
                    scale: 1.08,
                    y: -5,
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 15,
                  }}

                  className="
                  max-h-[88%]
                  max-w-[88%]
                  object-contain
                  "
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#16111F]/40
                  via-transparent
                  to-transparent
                  pointer-events-none
                  "
                />

              </div>

              <div className="p-6 flex flex-col h-full">

                <div className="flex items-center justify-center gap-2">

                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    {expert.name}
                  </h3>

                  <FaCheckCircle
                    size={17}
                    className="text-blue-500"
                  />

                </div>

                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                  {expert.role}
                </p>

                <div
                  className="
                  mt-4
                  mx-auto
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-green-50
                  dark:bg-green-500/10
                  "
                >

                  <FaCircle
                    size={9}
                    className="text-green-500"
                  />

                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {expert.status}
                  </span>

                </div>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  {expert.exp}
                </p>

                <div className="flex justify-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={18}
                      className="text-yellow-400"
                    />
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-2 mt-5">
                  {expert.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      whileHover={{
                        scale: 1.12,
                        y: -2,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                      }}
                      className="
                      px-3
                      py-1
                      rounded-full
                      bg-yellow-100
                      dark:bg-yellow-400/15
                      text-yellow-700
                      dark:text-yellow-300
                      text-xs
                      font-semibold
                      cursor-default
                      "
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                  }}
                  className="
                  mt-7
                  w-full
                  py-3.5
                  rounded-2xl
                  bg-gradient-to-r
                  from-yellow-400
                  to-yellow-500
                  text-black
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  shadow-lg
                  hover:shadow-[0_0_25px_rgba(250,204,21,0.45)]
                  "
                >
                  <FaCalendarAlt />
                  Book Appointment
                </motion.button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experts;