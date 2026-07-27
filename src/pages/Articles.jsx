import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Articles() {
  const navigate = useNavigate();

  const articles = [
    {
      title: "5 Ways to Reduce Anxiety",
      time: "8 min read",
      emoji: "🧠",
      desc: "Simple techniques to manage anxiety in daily life.",
    },
    {
      title: "Improve Your Sleep Tonight",
      time: "5 min read",
      emoji: "😴",
      desc: "Healthy habits that help you sleep better naturally.",
    },
    {
      title: "Mindfulness for Beginners",
      time: "6 min read",
      emoji: "🌿",
      desc: "Start practicing mindfulness in just 10 minutes.",
    },
    {
      title: "Benefits of Daily Meditation",
      time: "7 min read",
      emoji: "🧘",
      desc: "Discover how meditation improves your mental health.",
    },
    {
      title: "Handling Stress Effectively",
      time: "9 min read",
      emoji: "💙",
      desc: "Practical ways to stay calm during stressful situations.",
    },
    {
      title: "Positive Thinking Habits",
      time: "4 min read",
      emoji: "😊",
      desc: "Train your mind to think positively every day.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0B0815] p-10">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-white text-center"
      >
        📚 Mental Health Articles
      </motion.h1>

      <p className="text-center text-gray-400 mt-4">
        Learn more about improving your mental well-being.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">

        {articles.map((article, index) => (

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

            <div className="text-5xl">
              {article.emoji}
            </div>

            <h2 className="mt-6 text-2xl font-bold text-white">
              {article.title}
            </h2>

            <p className="mt-4 text-gray-400">
              {article.desc}
            </p>

            <div className="flex justify-between items-center mt-8">

              <span className="text-yellow-400 font-semibold">
                {article.time}
              </span>

              <button
                className="
                  px-5
                  py-2
                  rounded-xl
                  bg-yellow-400
                  text-black
                  font-bold
                "
              >
                Read
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

export default Articles;