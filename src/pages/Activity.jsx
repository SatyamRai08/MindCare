import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

function Activity() {

  const questions = [
    "How have you been feeling today?",
    "How well did you sleep last night?",
    "How stressed are you today?",
    "How energetic do you feel?",
    "How motivated are you today?",
    "How often have you felt anxious recently?",
    "How satisfied are you with your life today?",
    "How well can you concentrate?",
    "How socially connected do you feel?",
    "Overall, how is your mental health?"
  ];

  const options = [
    "Excellent",
    "Good",
    "Neutral",
    "Bad",
    "Very Bad"
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  const selectOption = (value) => {
    const temp = [...answers];
    temp[step] = value;
    setAnswers(temp);
};

const finishAssessment = () => {

    let total = 0;

    answers.forEach((item) => {

        if (item === "Excellent") total += 5;
        else if (item === "Good") total += 4;
        else if (item === "Neutral") total += 3;
        else if (item === "Bad") total += 2;
        else total += 1;

    });

    const percentage = Math.round((total / 50) * 100);

    setScore(percentage);
    localStorage.setItem("mindcareScore", percentage);
    setFinished(true);
};

if (finished) {

    return (

        <section className="min-h-screen bg-[#0B0815] flex items-center justify-center p-6">

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="
                bg-[#151020]
                rounded-3xl
                border
                border-[#241D35]
                shadow-2xl
                p-10
                max-w-xl
                w-full
                text-center
                "
            >

                <div className="text-7xl mb-6">

                    {
                        score >= 80
                            ? "😊"
                            : score >= 60
                            ? "🙂"
                            : score >= 40
                            ? "😐"
                            : "😔"
                    }

                </div>

                <h1 className="text-4xl font-bold text-white">

                    Assessment Completed 🎉

                </h1>

                <p className="text-gray-400 mt-3">

                    Your Mental Wellness Score

                </p>

                <h2 className="text-7xl font-bold text-yellow-400 mt-8">

                    {score}%

                </h2>

                <p className="text-xl text-white mt-8">

                    {
                        score >= 80
                            ? "Excellent Mental Health 🌟"
                            : score >= 60
                            ? "Good Mental Health 😊"
                            : score >= 40
                            ? "Needs Some Improvement 🙂"
                            : "Please Take Care ❤️"
                    }

                </p>

                <button

                    onClick={() => window.location.href = "/dashboard"}

                    className="
                    mt-10
                    bg-yellow-400
                    hover:bg-yellow-300
                    text-black
                    px-8
                    py-4
                    rounded-xl
                    font-bold
                    transition-all
                    "

                >

                    Back to Dashboard

                </button>

            </motion.div>

        </section>

    );

}

return (
    <section className="min-h-screen bg-[#0B0815] flex justify-center items-center p-6">
    
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl bg-[#151020] rounded-3xl border border-[#241D35] shadow-2xl p-10"
        >
    
            <div className="flex items-center gap-3 mb-8">
                <FaBrain className="text-yellow-400 text-4xl" />
                <div>
                    <h1 className="text-3xl font-bold text-white">
                        Mental Health Assessment
                    </h1>
    
                    <p className="text-gray-400 mt-1">
                        Question {step + 1} of {questions.length}
                    </p>
                </div>
            </div>
    
            <div className="w-full h-3 bg-[#241D35] rounded-full overflow-hidden mb-8">
    
                <motion.div
                    className="h-full bg-yellow-400"
                    animate={{
                        width: `${((step + 1) / questions.length) * 100}%`,
                    }}
                />
    
            </div>
    
            <motion.h2
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold text-white mb-8"
            >
                {questions[step]}
            </motion.h2>
    
            <div className="space-y-4">
    
                {options.map((item) => (
    
                    <motion.button
                        key={item}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => selectOption(item)}
                        className={`
    
                            w-full
                            text-left
                            p-5
                            rounded-2xl
                            border
                            transition-all
    
                            ${
                                answers[step] === item
                                    ? "bg-yellow-400 text-black border-yellow-400"
                                    : "bg-[#1C1628] text-white border-[#31264A] hover:border-yellow-400"
                            }
    
                        `}
                    >
    
                        {item}
    
                    </motion.button>
    
                ))}
    
            </div>
            <div className="flex justify-between mt-10">

<button
    onClick={() => setStep(step - 1)}
    disabled={step === 0}
    className="
        flex items-center gap-2
        px-6 py-3
        rounded-xl
        bg-[#241D35]
        text-white
        disabled:opacity-40
        hover:bg-[#31264A]
        transition-all
    "
>
    <FaArrowLeft />
    Previous
</button>

{
    step === questions.length - 1 ? (

        <button
            className="
                px-8 py-3
                rounded-xl
                bg-yellow-400
                text-black
                font-bold
                hover:scale-105
                transition-all
            "
            onClick={finishAssessment}
        >
            Finish
        </button>

    ) : (

        <button
            onClick={() => setStep(step + 1)}
            disabled={!answers[step]}
            className="
                flex items-center gap-2
                px-6 py-3
                rounded-xl
                bg-yellow-400
                text-black
                font-bold
                disabled:opacity-40
                hover:scale-105
                transition-all
            "
        >
            Next
            <FaArrowRight />
        </button>

    )
}

</div>

</motion.div>

</section>

);

}

export default Activity;