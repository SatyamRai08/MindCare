import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Resources() {
  const navigate = useNavigate();

  const resources = [
    {
      icon: "🧘",
      title: "Guided Meditation",
      desc: "Relax your mind with 10-minute guided meditation sessions.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "🎵",
      title: "Calming Music",
      desc: "Listen to peaceful sounds and relaxing background music.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "📖",
      title: "Mental Wellness Guide",
      desc: "Read practical tips for improving emotional well-being.",
      color: "from-yellow-400 to-yellow-500",
    },
    {
      icon: "💤",
      title: "Sleep Resources",
      desc: "Learn healthy sleep habits to improve your daily routine.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: "💪",
      title: "Stress Management",
      desc: "Simple exercises and techniques to reduce stress naturally.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: "❤️",
      title: "Self Care Tips",
      desc: "Build healthy habits for a happier and healthier lifestyle.",
      color: "from-red-500 to-orange-500",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0B0815] p-10">

      <motion.h1
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center text-white"
      >
        📚 Wellness Resources
      </motion.h1>

      <p className="text-center text-gray-400 mt-4">
        Helpful resources to support your mental health journey.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">

        {resources.map((item, index) => (

          <motion.div
            key={index}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              rounded-3xl
              bg-[#151020]
              border
              border-[#2A223A]
              p-7
              shadow-xl
              cursor-pointer
              transition-all
              hover:border-yellow-400
            "
          >

            <div
              className={`
                w-16
                h-16
                rounded-2xl
                bg-gradient-to-r
                ${item.color}
                flex
                items-center
                justify-center
                text-3xl
              `}
            >
              {item.icon}
            </div>

            <h2 className="mt-6 text-2xl font-bold text-white">
              {item.title}
            </h2>

            <p className="mt-4 text-gray-400">
              {item.desc}
            </p>

            <button
              onClick={() => alert("This feature will be available soon!")}
              className="
                mt-8
                w-full
                py-3
                rounded-2xl
                bg-gradient-to-r
                from-yellow-400
                to-yellow-500
                text-black
                font-bold
                hover:scale-105
                transition-all
              "
            >
              Explore
            </button>

          </motion.div>

        ))}

      </div>

      <div className="flex justify-center mt-14">

        <button
          onClick={() => navigate("/dashboard")}
          className="
            px-8
            py-4
            rounded-2xl
            bg-yellow-400
            text-black
            font-bold
            hover:scale-105
            transition-all
          "
        >
          ← Back to Dashboard
        </button>

      </div>

    </section>
  );
}

export default Resources;