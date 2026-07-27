import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import MoodChart from "../components/MoodChart";
import MoodCalendar from "../components/MoodCalendar";
import ActivityChart from "../components/ActivityChart";
import { useNavigate } from "react-router-dom";



import {
  FaBrain,
  FaHome,
  FaBookMedical,
  FaUserMd,
  FaChartLine,
  FaCog,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";



function Dashboard() {

  const navigate = useNavigate();

  const quotes = [
    {
      text: "The future depends on what you do today.",
      author: "Mahatma Gandhi",
    },
    {
      text: "Every day is a fresh beginning.",
      author: "Unknown",
    },
    {
      text: "Small steps every day lead to big results.",
      author: "Anonymous",
    },
    {
      text: "Your mental health is a priority.",
      author: "Unknown",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
  ];

  
  const [quote, setQuote] = useState(quotes[0]);
  
  const changeQuote = () => {
    const random =
      quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

    const [showProfile, setShowProfile] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const [moodScore, setMoodScore] = useState(82);

useEffect(() => {
    const savedScore = localStorage.getItem("mindcareScore");

    if (savedScore) {
        setMoodScore(Number(savedScore));
    }
}, []);

const stressScore = Math.max(20, moodScore - 12);
const sleepScore = Math.min(100, moodScore + 9);

    const greeting = useMemo(() => {
        const hour = new Date().getHours();

        if (hour >= 5 && hour < 12)
            return "Good Morning ☀️";

        if (hour >= 12 && hour < 17)
            return "Good Afternoon 🌤️";

        if (hour >= 17 && hour < 21)
            return "Good Evening 🌇";

        return "Good Night 🌙";
    }, []);

    return (

    <section className="min-h-screen flex bg-gray-100 dark:bg-[#0B0815]">

      {/* Sidebar */}

      <aside
        className="
        hidden
        lg:flex
        w-72
        flex-col
        bg-white
        dark:bg-[#151020]
        border-r
        border-gray-200
        dark:border-[#241D35]
        p-8
        "
      >

        <h1
          className="
          text-3xl
          font-extrabold
          text-yellow-400
        "
        >
          MindCare
        </h1>

        <div className="mt-12 space-y-4">

          <motion.button
            whileHover={{ x: 8, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
            flex
            items-center
            gap-4
            text-lg
            font-semibold
            text-yellow-400
            "
          >
            <FaHome />
            Dashboard
          </motion.button>

          <motion.button
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.97 }}
            className="
            flex
            items-center
            gap-4
            text-lg
            text-gray-700
            dark:text-gray-300
            hover:text-yellow-400
            transition
            "
          >
            <FaBrain />
            Assessment
          </motion.button>

          <motion.button
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.97 }}
            className="
            flex
            items-center
            gap-4
            text-lg
            text-gray-700
            dark:text-gray-300
            hover:text-yellow-400
            transition
            "
          >
            <FaBookMedical />
            Articles
          </motion.button>

          <motion.button
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.97 }}
            className="
            flex
            items-center
            gap-4
            text-lg
            text-gray-700
            dark:text-gray-300
            hover:text-yellow-400
            transition
            "
          >
            <FaUserMd />
            Experts
          </motion.button>

          <motion.button
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.97 }}
            className="
            flex
            items-center
            gap-4
            text-lg
            text-gray-700
            dark:text-gray-300
            hover:text-yellow-400
            transition
            "
          >
            <FaChartLine />
            Progress
          </motion.button>

          <motion.button
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.97 }}
            className="
            flex
            items-center
            gap-4
            text-lg
            text-gray-700
            dark:text-gray-300
            hover:text-yellow-400
            transition
            "
          >
            <FaCog />
            Settings
          </motion.button>

        </div>

      </aside>

      {/* Main */}

      <div className="flex-1 p-10">

       {/* Top Navbar */}

<div className="flex justify-between items-center">

<div>

  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-4xl font-bold text-black dark:text-white"
  >
    {greeting}
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      delay: 0.25,
      duration: 0.5,
    }}
    className="mt-2 text-gray-600 dark:text-gray-400"
  >
    Here's your mental wellness overview.
  </motion.p>

</div>

<div className="relative flex items-center gap-6">

  {/* Notification Bell */}

  <div className="relative">

    <motion.div
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      onClick={() =>
        setShowNotification(!showNotification)
      }
      className="
      w-11
      h-11
      rounded-full
      bg-[#1B1528]
      hover:bg-[#2A223A]
      flex
      items-center
      justify-center
      cursor-pointer
      transition-all
      duration-300
      "
    >

      <motion.div
        animate={{
          rotate: [0, 15, -15, 15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >

        <FaBell
          className="text-xl text-gray-400 hover:text-yellow-400"
        />

      </motion.div>

      <span
        className="
        absolute
        top-2
        right-2
        w-2.5
        h-2.5
        rounded-full
        bg-red-500
        border-2
        border-[#1B1528]
        "
      />

    </motion.div>

    {showNotification && (

      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
        absolute
        top-14
        right-0
        w-80
        rounded-2xl
        bg-[#151020]
        border
        border-[#2A223A]
        shadow-2xl
        p-5
        z-[9999]
        "
      >

        <h3 className="text-lg font-bold text-white mb-4">
          🔔 Notifications
        </h3>

        <div className="space-y-4">

          <div className="border-b border-[#2A223A] pb-3">

            <p className="text-white">
              📖 New mental health article available
            </p>

            <span className="text-gray-400 text-sm">
              2 mins ago
            </span>

          </div>

          <div className="border-b border-[#2A223A] pb-3">

            <p className="text-white">
              🧘 Time for today's meditation
            </p>

            <span className="text-gray-400 text-sm">
              10 mins ago
            </span>

          </div>

          <div>

            <p className="text-white">
              📝 Weekly assessment reminder
            </p>

            <span className="text-gray-400 text-sm">
              Today
            </span>

          </div>

        </div>

      </motion.div>

    )}

  </div>

  {/* Profile */}

  <motion.div
    whileHover={{
      scale: 1.12,
    }}
    whileTap={{
      scale: 0.95,
    }}
    onClick={() =>
      setShowProfile(!showProfile)
    }
    className="cursor-pointer"
  >

    <FaUserCircle
      className="
      text-5xl
      text-yellow-400
      "
    />

  </motion.div>

  {showProfile && (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="
      absolute
      top-16
      right-0
      w-56
      rounded-2xl
      bg-white
      dark:bg-[#16111F]
      border
      border-gray-200
      dark:border-[#241D35]
      shadow-2xl
      p-2
      z-[9999]
      overflow-visible
    "
  >
    <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#21192F]">
      👤 My Profile
    </button>

    <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#21192F]">
      ⚙️ Settings
    </button>

    <button className="w-full text-left px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10">
      Logout
    </button>
  </motion.div>
)}

</div>

</div>

{/* Statistics Cards */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">

{/* Mood Score */}

<motion.div
  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1, duration: 0.5 }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
  className="
  rounded-3xl
  bg-white
  dark:bg-[#16111F]
  border
  border-gray-200
  dark:border-[#241D35]
  p-7
  shadow-lg
  "
>

  <div className="flex items-center justify-between">

    <h3 className="text-xl font-bold text-black dark:text-white">
      Mood Score
    </h3>

    <motion.div
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      <FaBrain className="text-3xl text-yellow-400" />
    </motion.div>

  </div>

  <motion.h1
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      delay: 0.4,
      type: "spring",
    }}
    className="
    mt-6
    text-5xl
    font-extrabold
    text-yellow-400
    "
  >
    {moodScore}%
  </motion.h1>

  <p className="mt-3 text-gray-600 dark:text-gray-400">

    {moodScore >= 80 &&
        "Excellent emotional wellness this week."}

    {moodScore >= 60 &&
        moodScore < 80 &&
        "You're doing well. Keep taking care of yourself."}

    {moodScore >= 40 &&
        moodScore < 60 &&
        "Your mood needs attention. Try relaxing activities."}

    {moodScore < 40 &&
        "Please take care of yourself. Consider talking to an expert."}

</p>

</motion.div>

{/* Weekly Progress */}

<motion.div
  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.25, duration: 0.5 }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
  className="
  rounded-3xl
  bg-white
  dark:bg-[#16111F]
  border
  border-gray-200
  dark:border-[#241D35]
  p-7
  shadow-lg
  "
>

  <div className="flex items-center justify-between">

    <h3 className="text-xl font-bold text-black dark:text-white">
      Weekly Progress
    </h3>

    <motion.div
      animate={{
        y: [0, -4, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
    >
      <FaChartLine className="text-3xl text-green-500" />
    </motion.div>

  </div>

  <motion.h1
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      delay: 0.55,
      type: "spring",
    }}
    className="
    mt-6
    text-5xl
    font-extrabold
    text-green-500
    "
  >
    {Math.round((moodScore - 50) / 2)}%
  </motion.h1>

  <p className="mt-3 text-gray-600 dark:text-gray-400">
  {moodScore >= 80 &&
    "You're improving faster than last week."}

{moodScore >= 60 &&
 moodScore < 80 &&
    "You're making steady progress."}

{moodScore >= 40 &&
 moodScore < 60 &&
    "Progress is slow. Keep going."}

{moodScore < 40 &&
    "Let's focus on improving your mental wellness."}
  </p>

</motion.div>

{/* Experts */}

<motion.div
  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.5 }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
  className="
  rounded-3xl
  bg-white
  dark:bg-[#16111F]
  border
  border-gray-200
  dark:border-[#241D35]
  p-7
  shadow-lg
  "
>

  <div className="flex items-center justify-between">

    <h3 className="text-xl font-bold text-black dark:text-white">
      Experts Available
    </h3>

    <motion.div
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
    >
      <FaUserMd className="text-3xl text-blue-500" />
    </motion.div>

  </div>

  <motion.h1
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      delay: 0.7,
      type: "spring",
    }}
    className="
    mt-6
    text-5xl
    font-extrabold
    text-blue-500
    "
  >
    12
  </motion.h1>

  <p className="mt-3 text-gray-600 dark:text-gray-400">
    Professional therapists online today.
  </p>

</motion.div>

</div>
{/* Activity & Progress */}

<div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10">

  {/* Today's Activity */}

  <motion.div
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.6,
      duration: 0.5,
    }}
    whileHover={{
      y: -8,
      scale: 1.02,
    }}
    className="
    xl:col-span-1
    rounded-3xl
    bg-white
    dark:bg-[#16111F]
    border
    border-gray-200
    dark:border-[#241D35]
    p-7
    shadow-lg
    "
  >

    <h2 className="text-2xl font-bold text-black dark:text-white">
      Today's Activity
    </h2>

    <div className="mt-8 space-y-6">

      {[
        {
          name: "Mood Check",
          value: "✔ Done",
          color: "text-green-500",
        },

        {
          name: "Meditation",
          value: "15 mins",
          color: "text-yellow-400",
        },

        {
          name: "Journal",
          value: "Pending",
          color: "text-blue-500",
        },

        {
          name: "Sleep Goal",
          value: "7.5 hrs",
          color: "text-purple-500",
        },

      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.7 + index * 0.1,
          }}
          className="flex justify-between items-center"
        >

          <span className="text-gray-600 dark:text-gray-400">
            {item.name}
          </span>

          <span className={`font-bold ${item.color}`}>
            {item.value}
          </span>

        </motion.div>

      ))}

    </div>

  </motion.div>
  
  

  {/* Weekly Progress */}

  <motion.div
    initial={{
      opacity: 0,
      x: 40,
    }}
    animate={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      delay: 0.8,
      duration: 0.5,
    }}
    whileHover={{
      y: -8,
      scale: 1.02,
    }}
    className="
    xl:col-span-2
    rounded-3xl
    bg-white
    dark:bg-[#16111F]
    border
    border-gray-200
    dark:border-[#241D35]
    p-7
    shadow-lg
    "
  >

    <h2 className="text-2xl font-bold text-black dark:text-white">
      Weekly Progress
    </h2>

    <div className="mt-10 space-y-8">

      {[
        {
            title: "Mood Improvement",
            value: `${moodScore}%`,
            width: `${moodScore}%`,
            color: "bg-yellow-400",
            text: "text-yellow-400",
          },

          {
            title: "Stress Reduction",
            value: `${stressScore}%`,
            width: `${stressScore}%`,
            color: "bg-green-500",
            text: "text-green-500",
          },

          {
            title: "Sleep Quality",
            value: `${sleepScore}%`,
            width: `${sleepScore}%`,
            color: "bg-blue-500",
            text: "text-blue-500",
          },

      ].map((item, index) => (

        <div key={index}>

          <div className="flex justify-between mb-2">

            <span className="font-medium text-gray-700 dark:text-gray-300">
              {item.title}
            </span>

            <span className={`font-bold ${item.text}`}>
              {item.value}
            </span>

          </div>

          <div className="w-full h-3 rounded-full bg-gray-200 dark:bg-[#241D35]">

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: item.width,
              }}
              transition={{
                duration: 1.2,
                delay: index * 0.25,
              }}
              className={`h-3 rounded-full ${item.color}`}
            />

          </div>

        </div>

      ))}

    </div>

  </motion.div>

</div>

<div
  className="mt-8 cursor-pointer"
  onClick={() => navigate("/activity")}
>
  <MoodChart />
</div>
<div
  className="mt-8 cursor-pointer"
  onClick={() => navigate("/activity")}
>
  <ActivityChart />
</div>
<div
  className="mt-8 cursor-pointer"
  onClick={() => navigate("/activity")}
>
  <MoodCalendar />
</div>
{/* Quick Actions */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9, duration: 0.6 }}
  className="mt-10"
>

  <h2 className="text-4xl font-bold text-white mb-8">
    ⚡ Quick Actions
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    {[
      {
        icon: "🧠",
        title: "Assessment",
        bg: "bg-yellow-400",
      },
      {
        icon: "📝",
        title: "Journal",
        bg: "bg-blue-500",
      },
      {
        icon: "🧘",
        title: "Meditation",
        bg: "bg-green-500",
      },
      {
        icon: "📞",
        title: "Talk to Expert",
        bg: "bg-purple-500",
      },
    ].map((item, index) => (

      <motion.div
        key={index}
        whileHover={{
          y: -10,
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.96,
        }}
        onClick={() => {
          if (item.title === "Assessment") {
            navigate("/activity");
          } else if (item.title === "Journal") {
            navigate("/articles");
          } else if (item.title === "Meditation") {
            navigate("/resources");
          } else if (item.title === "Talk to Expert") {
            navigate("/resources");
          }
        }}
        className="
        cursor-pointer
        rounded-3xl
        border
        border-[#2A223A]
        bg-[#151020]
        p-6
        shadow-xl
        transition-all
        duration-300
        hover:border-yellow-400
        hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]
        "
      >

        <div
          className={`
          w-16
          h-16
          rounded-2xl
          ${item.bg}
          flex
          items-center
          justify-center
          text-3xl
          shadow-lg
          `}
        >
          {item.icon}
        </div>

        <h3 className="mt-6 text-xl font-bold text-white">
          {item.title}
        </h3>

        <p className="mt-2 text-gray-400 text-sm">
          Click to continue
        </p>

      </motion.div>

    ))}

  </div>

</motion.div>

{/* Bottom Section */}

{/* Daily Motivation */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.1, duration: 0.6 }}
  whileHover={{ scale: 1.01 }}
  className="
  mt-10
  rounded-3xl
  bg-[#16111F]
  border
  border-[#241D35]
  p-8
  shadow-xl
  "
>

  <div className="flex items-center justify-between">

    <h2 className="text-4xl font-bold text-white">
      🌞 Today's Motivation
    </h2>

    <motion.button
      whileHover={{ rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      onClick={changeQuote}
      className="
      w-12
      h-12
      rounded-full
      bg-yellow-400
      text-black
      text-xl
      "
    >
      ↻
    </motion.button>

  </div>

  <motion.div
    key={quote.text}
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mt-10"
  >

    <h1 className="text-3xl font-bold leading-relaxed text-yellow-400">
      "{quote.text}"
    </h1>

    <p className="mt-6 text-right text-xl text-gray-400">
      — {quote.author}
    </p>

  </motion.div>

  <div className="mt-10 flex gap-4">

    <motion.button
      onClick={() => alert("Quote Saved!")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
      px-6
      py-3
      rounded-xl
      bg-yellow-400
      text-black
      font-bold
      "
    >
      ❤️ Save Quote
    </motion.button>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={changeQuote}
      className="
      px-6
      py-3
      rounded-xl
      bg-[#241D35]
      text-white
      font-bold
      "
    >
      🔄 New Quote
    </motion.button>

  </div>

</motion.div>

{/* Achievements */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.1, duration: 0.6 }}
  className="mt-10"
>

  <h2 className="text-4xl font-bold text-white mb-8">
    🏆 Achievements
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

    {[
      {
        icon: "🔥",
        title: "7 Day Streak",
        desc: "Keep your mood positive!",
        color: "from-orange-500 to-red-500",
      },
      {
        icon: "🧘",
        title: "Meditation Master",
        desc: "20 Sessions Completed",
        color: "from-green-500 to-emerald-600",
      },
      {
        icon: "📖",
        title: "Journal Writer",
        desc: "15 Journals Written",
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: "😊",
        title: "Mood Champion",
        desc: "Excellent Mood This Week",
        color: "from-yellow-400 to-yellow-500",
      },
    ].map((item, index) => (

      <motion.div
        key={index}
        whileHover={{
          y: -8,
          scale: 1.04,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
        rounded-3xl
        bg-[#151020]
        border
        border-[#2A223A]
        p-6
        shadow-xl
        transition-all
        duration-300
        hover:border-yellow-400
        hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]
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

        <h3 className="mt-5 text-xl font-bold text-white">
          {item.title}
        </h3>

        <p className="mt-2 text-gray-400">
          {item.desc}
        </p>

      </motion.div>

    ))}

  </div>

</motion.div>

{/* Emotion Analytics */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.15, duration: 0.6 }}
  className="mt-10"
>

  <h2 className="text-4xl font-bold text-white mb-8">
    📊 Emotion Analytics
  </h2>

  <div className="grid xl:grid-cols-2 gap-8">

    {/* Left */}

    <div
      className="
      rounded-3xl
      bg-[#151020]
      border
      border-[#2A223A]
      p-8
      shadow-xl
      "
    >

      {[
        {
          emoji: "😊",
          title: "Happy",
          value: 78,
          color: "bg-yellow-400",
        },
        {
          emoji: "😌",
          title: "Calm",
          value: 61,
          color: "bg-green-500",
        },
        {
          emoji: "😟",
          title: "Stress",
          value: 28,
          color: "bg-red-500",
        },
        {
          emoji: "😴",
          title: "Sleep",
          value: 52,
          color: "bg-blue-500",
        },
        {
          emoji: "⚡",
          title: "Energy",
          value: 70,
          color: "bg-purple-500",
        },
      ].map((item, index) => (

        <div key={index} className="mb-7">

          <div className="flex justify-between mb-2">

            <span className="text-white font-semibold">
              {item.emoji} {item.title}
            </span>

            <span className="text-gray-400">
              {item.value}%
            </span>

          </div>

          <div className="w-full h-3 rounded-full bg-[#241B35] overflow-hidden">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${item.value}%` }}
              transition={{
                duration: 1,
                delay: index * 0.2,
              }}
              className={`h-full rounded-full ${item.color}`}
            />

          </div>

        </div>

      ))}

    </div>

    {/* Right */}

    <motion.div

      whileHover={{
        scale: 1.02,
      }}

      className="
      rounded-3xl
      bg-[#151020]
      border
      border-[#2A223A]
      p-10
      flex
      flex-col
      justify-center
      items-center
      shadow-xl
      "

    >

      <div className="text-8xl">
        😊
      </div>

      <h3 className="mt-6 text-6xl font-bold text-yellow-400">
        82
      </h3>

      <p className="text-gray-400 text-xl">
        Mood Score
      </p>

      <div
        className="
        mt-8
        px-6
        py-3
        rounded-full
        bg-green-500/20
        text-green-400
        font-bold
        "
      >
        Excellent
      </div>

    </motion.div>

  </div>

</motion.div>

{/* Mood Trend & Weekly Goals */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2, duration: 0.6 }}
  className="grid xl:grid-cols-2 gap-8 mt-10"
>

  {/* Mood Trend */}

  <motion.div
    whileHover={{ y: -5, scale: 1.01 }}
    className="
    rounded-3xl
    bg-[#151020]
    border
    border-[#2A223A]
    p-8
    shadow-xl
    "
  >

    <h2 className="text-3xl font-bold text-white mb-8">
      📈 Mood Trend
    </h2>

    <div className="flex justify-center">

      <svg
        width="100%"
        height="180"
        viewBox="0 0 500 180"
      >

        <defs>

          <linearGradient
            id="lineGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#facc15"/>
            <stop offset="100%" stopColor="#22c55e"/>
          </linearGradient>

        </defs>

        <path
          d="
          M20 130
          C70 90,110 95,150 70
          S240 110,290 60
          S390 30,480 55
          "
          stroke="url(#lineGradient)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />

      </svg>

    </div>

    <div className="mt-5 text-center">

      <h3 className="text-green-400 text-2xl font-bold">
        Improving ↑
      </h3>

      <p className="text-gray-400 mt-2">
        Your mood has improved by 18% this week.
      </p>

    </div>

  </motion.div>

  {/* Weekly Goals */}

  <motion.div
    whileHover={{ y: -5, scale: 1.01 }}
    className="
    rounded-3xl
    bg-[#151020]
    border
    border-[#2A223A]
    p-8
    shadow-xl
    "
  >

    <h2 className="text-3xl font-bold text-white mb-8">
      🎯 Weekly Goals
    </h2>

    {[
      "Meditation",
      "Journal Writing",
      "Drink 3L Water",
      "Exercise",
      "Sleep 8 Hours",
    ].map((goal, i) => (

      <div
        key={i}
        className="
        flex
        justify-between
        items-center
        mb-5
        "
      >

        <span className="text-white text-lg">
          {goal}
        </span>

        <span className="text-green-400 text-2xl">
          {i !== 3 ? "✔️" : "⭕"}
        </span>

      </div>

    ))}

    <div className="mt-8">

      <div className="flex justify-between mb-2">

        <span className="text-gray-300">
          Progress
        </span>

        <span className="text-yellow-400 font-bold">
          80%
        </span>

      </div>

      <div className="w-full h-4 bg-[#2A223A] rounded-full overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ duration: 1 }}
          className="
          h-full
          rounded-full
          bg-gradient-to-r
          from-yellow-400
          to-green-500
          "
        />

      </div>

    </div>

  </motion.div>

</motion.div>

{/* Upcoming Session & Daily Tip */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.3, duration: 0.6 }}
  className="grid xl:grid-cols-2 gap-8 mt-14"
>

  {/* Upcoming Session */}

  <motion.div
    whileHover={{
      y: -8,
      scale: 1.02,
    }}
    whileTap={{
      scale: 0.98,
    }}
    className="
    rounded-3xl
    bg-[#151020]
    border
    border-[#2A223A]
    p-8
    shadow-xl
    transition-all
    duration-300
    hover:border-yellow-400
    hover:shadow-[0_0_30px_rgba(250,204,21,0.25)]
    "
  >

    <h2 className="text-3xl font-bold text-white flex items-center gap-3">
      📅 Upcoming Session
    </h2>

    <div className="mt-8">

      <h3 className="text-3xl font-bold text-yellow-400">
        Dr. Sarah Johnson
      </h3>

      <p className="mt-6 text-lg text-gray-300">
        🗓 Tomorrow
      </p>

      <p className="mt-3 text-lg text-gray-300">
        🕡 6:30 PM
      </p>

      <motion.button
        onClick={() => navigate("/experts")}
        whileHover={{
          scale: 1.05,
          y: -3,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="
        mt-8
        px-10
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-yellow-400
        to-yellow-500
        text-black
        font-bold
        shadow-lg
        hover:shadow-[0_0_35px_rgba(250,204,21,0.45)]
        transition-all
        duration-300
        "
      >
        📹 Join Meeting
      </motion.button>

    </div>

  </motion.div>

  {/* Daily Tip */}

  <motion.div
    whileHover={{
      y: -8,
      scale: 1.02,
    }}
    whileTap={{
      scale: 0.98,
    }}
    className="
    rounded-3xl
    bg-[#151020]
    border
    border-[#2A223A]
    p-8
    shadow-xl
    transition-all
    duration-300
    hover:border-green-400
    hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]
    "
  >

    <h2 className="text-3xl font-bold text-white flex items-center gap-3">
      💡 Daily Wellness Tip
    </h2>

    <div
      className="
      mt-8
      rounded-2xl
      bg-[#21192F]
      p-7
      leading-9
      "
    >

      <p className="text-lg text-white">

        ☀️ Start your morning with a glass of water before checking your phone.

        <br /><br />

        🚶 Take a 10 minute walk today.

        <br /><br />

        🌿 Practice deep breathing for five minutes.

      </p>

    </div>

    <motion.button
      onClick={() => navigate("/articles")}
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="
      mt-8
      px-10
      py-4
      rounded-2xl
      bg-gradient-to-r
      from-green-500
      to-emerald-500
      text-white
      font-bold
      shadow-lg
      hover:shadow-[0_0_35px_rgba(34,197,94,0.45)]
      transition-all
      duration-300
      "
    >
      📖 Read More
    </motion.button>

  </motion.div>

</motion.div>

{/* Bottom Section */}

<div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">



{/* Articles */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 1,
    duration: 0.6,
  }}
  whileHover={{
    y: -6,
  }}
  className="
    rounded-3xl
    bg-[#151020]
    border
    border-[#2A223A]
    p-8
    shadow-xl
  "
>
  <h2 className="text-4xl font-bold text-white mb-8">
    📚 Recommended Articles
  </h2>

  {[
    {
      title: "5 Ways to Reduce Anxiety",
      time: "8 min read",
      icon: "🧠",
      color: "text-yellow-400",
    },
    {
      title: "Improve Your Sleep Tonight",
      time: "5 min read",
      icon: "😴",
      color: "text-blue-400",
    },
    {
      title: "Mindfulness for Beginners",
      time: "6 min read",
      icon: "🌿",
      color: "text-green-400",
    },
  ].map((article, index) => (
    <motion.div
      key={index}
      whileHover={{
        scale: 1.03,
        x: 8,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
      }}
      onClick={() => navigate("/articles")}
      className="
        mb-5
        last:mb-0
        rounded-2xl
        border
        border-[#2A223A]
        hover:border-yellow-400
        bg-[#1B1528]
        p-5
        cursor-pointer
        transition-all
        duration-300
      "
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className={`font-bold text-xl ${article.color}`}>
            {article.icon} {article.title}
          </h3>

          <p className="text-gray-400 mt-2">
            {article.time}
          </p>
        </div>

        <motion.div
          whileHover={{ x: 5 }}
          className="
            text-yellow-400
            font-bold
            text-lg
          "
        >
          Read →
        </motion.div>
      </div>
    </motion.div>
  ))}
</motion.div>

{/* Expert */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 1.2,
    duration: 0.6,
  }}
  whileHover={{
    y: -6,
  }}
  onClick={() => navigate("/experts")}
  className="
    rounded-3xl
    bg-[#151020]
    border
    border-[#2A223A]
    p-8
    shadow-xl
    cursor-pointer
  "
>
  <h2 className="text-4xl font-bold text-white mb-8">
    👨‍⚕️ Recommended Expert
  </h2>

  <div className="flex items-center gap-5">
    <div className="relative">
      <motion.div
        whileHover={{
          rotate: 360,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          w-24
          h-24
          rounded-full
          bg-gradient-to-br
          from-yellow-400
          to-yellow-500
          flex
          items-center
          justify-center
          text-3xl
          font-bold
          text-black
        "
      >
        DR
      </motion.div>

      <span
        className="
          absolute
          bottom-1
          right-1
          w-5
          h-5
          rounded-full
          bg-green-500
          border-2
          border-[#151020]
        "
      />
    </div>

    <div className="flex-1">
      <h3 className="text-2xl font-bold text-white">
        Dr. Sarah Johnson
      </h3>

      <p className="text-gray-400 mt-1">
        Clinical Psychologist
      </p>

      <div className="flex items-center gap-1 mt-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="text-yellow-400 text-lg"
          >
            ⭐
          </span>
        ))}

        <span className="ml-2 text-gray-300">
          4.9
        </span>
      </div>

      <p className="mt-3 text-green-400 font-semibold">
        🟢 Online Now
      </p>

      <p className="text-gray-400 mt-1">
        12+ Years Experience
      </p>
    </div>
  </div>

  <div className="grid grid-cols-2 gap-4 mt-8">
    <motion.button
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      onClick={(e) => {
        e.stopPropagation();
        navigate("/experts");
      }}
      className="
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-yellow-400
        to-yellow-500
        font-bold
        text-black
        shadow-lg
      "
    >
      📅 Book
    </motion.button>

    <motion.button
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      onClick={(e) => {
        e.stopPropagation();
        navigate("/experts");
      }}
      className="
        py-4
        rounded-2xl
        border
        border-[#2A223A]
        bg-[#1B1528]
        text-white
        font-bold
        hover:border-yellow-400
        transition-all
      "
    >
      💬 Chat
    </motion.button>
  </div>
  
</motion.div>
<div className="col-span-full mt-16">

  <footer
    className="
      w-full
      border-t
      border-[#2A223A]
      pt-6
      text-center
      text-gray-500
      text-sm
    "
  >
    © 2026 MindCare • Built with React + Tailwind CSS
  </footer>

</div>
</div>

</div>



</section>

);

}

export default Dashboard;