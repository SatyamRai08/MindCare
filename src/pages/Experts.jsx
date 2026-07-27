import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Experts() {
  const navigate = useNavigate();

  const experts = [
    {
      name: "Dr. Sarah Johnson",
      role: "Clinical Psychologist",
      experience: "12+ Years",
      rating: "4.9",
      emoji: "👩‍⚕️",
    },
    {
      name: "Dr. Michael Lee",
      role: "Mental Health Therapist",
      experience: "9+ Years",
      rating: "4.8",
      emoji: "👨‍⚕️",
    },
    {
      name: "Dr. Emily Watson",
      role: "Psychiatrist",
      experience: "15+ Years",
      rating: "5.0",
      emoji: "🧑‍⚕️",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0B0815] p-10">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center text-white"
      >
        👨‍⚕️ Mental Health Experts
      </motion.h1>

      <p className="text-center text-gray-400 mt-4">
        Connect with experienced mental health professionals.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">

        {experts.map((expert, index) => (

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
              bg-[#151020]
              border
              border-[#2A223A]
              rounded-3xl
              p-8
              shadow-xl
            "
          >

            <div className="text-6xl text-center">
              {expert.emoji}
            </div>

            <h2 className="mt-6 text-2xl font-bold text-center text-white">
              {expert.name}
            </h2>

            <p className="mt-2 text-center text-gray-400">
              {expert.role}
            </p>

            <div className="mt-6 space-y-2 text-gray-300">

              <p>⭐ Rating: {expert.rating}</p>

              <p>💼 Experience: {expert.experience}</p>

              <p className="text-green-400">
                🟢 Available Today
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">

            <button
  onClick={() => alert("Appointment request sent successfully!")}
  className="
    py-3
    rounded-xl
    bg-yellow-400
    text-black
    font-bold
    hover:scale-105
    transition-all
  "
>
  Book
</button>

<button
  onClick={() => alert("Chat feature coming soon!")}
  className="
    py-3
    rounded-xl
    border
    border-[#2A223A]
    text-white
    hover:border-yellow-400
    transition-all
  "
>
  Chat
</button>

            </div>

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

export default Experts;