import {
    FaArrowRight,
    FaBookOpen,
    FaBrain,
  } from "react-icons/fa";
  
  import anxiety from "../assets/images/anxiety.png";
  import depression from "../assets/images/depression.png";
  import stress from "../assets/images/stress.png";
  import sleep from "../assets/images/sleep.png";
  
  function Library() {
    const books = [
      {
        title: "Anxiety",
        image: anxiety,
        color: "bg-red-500",
      },
      {
        title: "Depression",
        image: depression,
        color: "bg-blue-500",
      },
      {
        title: "Stress",
        image: stress,
        color: "bg-purple-500",
      },
      {
        title: "Sleep",
        image: sleep,
        color: "bg-green-500",
      },
    ];
  
    return (
      <section
        id="library"
        className="
        scroll-mt-24
        pt-20
        pb-20
        bg-gray-100
        dark:bg-[#0B0815]
        transition-colors
        duration-500
        "
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
  
          {/* Heading */}
  
          <div className="text-center">
  
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
              <FaBookOpen />
              Mental Health Resources
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
              Mental Health Library
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
              Explore trusted information about common mental health
              challenges and learn practical ways to improve your
              emotional well-being.
            </p>
  
          </div>
  
          {/* Cards */}
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
  
            {books.map((book, index) => (
  
              <div
                key={index}
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
                hover:-translate-y-3
                hover:border-yellow-400/40
                hover:shadow-[0_25px_45px_rgba(124,58,237,0.22)]
                transition-all
                duration-500
                "
              >
  
                {/* Image */}
  
                <div className="relative overflow-hidden">
  
                  <img
                    src={book.image}
                    alt={book.title}
                    className="
                    w-full
                    h-60
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                    "
                  />
  
                  {/* Hover Overlay */}
  
                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#16111F]/40
                    via-transparent
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    "
                  />
  
                  {/* Badge */}
  
                  <div
                    className="
                    absolute
                    top-4
                    left-4
                    bg-white/90
                    dark:bg-[#16111F]/90
                    backdrop-blur-md
                    rounded-full
                    px-3
                    py-1
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-black
                    dark:text-white
                    "
                  >
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${book.color}`}
                    />
  
                    <FaBrain className="text-yellow-400" />
  
                    Mental Health
                  </div>
  
                </div>
  
                {/* Content */}
  
                <div className="p-6 flex flex-col h-full">
  
                  <h3
                    className="
                    text-2xl
                    font-bold
                    text-black
                    dark:text-white
                    "
                  >
                    {book.title}
                  </h3>
  
                  <p
                    className="
                    mt-3
                    flex-grow
                    leading-8
                    text-gray-600
                    dark:text-gray-400
                    "
                  >
                    Learn about symptoms, causes, prevention,
                    treatment, self-care techniques, and expert
                    guidance for improving your mental well-being.
                  </p>
  
                  <button
                    className="
                    mt-8
                    flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    py-3.5
                    rounded-2xl
                    bg-gradient-to-r
                    from-yellow-400
                    to-yellow-500
                    text-black
                    font-semibold
                    shadow-lg
                    hover:-translate-y-1
                    hover:scale-[1.02]
                    hover:shadow-[0_0_25px_rgba(250,204,21,0.45)]
                    transition-all
                    duration-300
                    "
                  >
                    Read More
  
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
  
                  </button>
  
                </div>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Library;