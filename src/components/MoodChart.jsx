import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    { day: "Mon", mood: 45 },
    { day: "Tue", mood: 52 },
    { day: "Wed", mood: 48 },
    { day: "Thu", mood: 60 },
    { day: "Fri", mood: 58 },
    { day: "Sat", mood: 72 },
    { day: "Sun", mood: 82 },
  ];
  
  function MoodChart() {
    return (
      <div
        className="
        bg-[#16111F]
        rounded-3xl
        p-6
        shadow-lg
        border
        border-[#241D35]
        "
      >
        <h2 className="text-2xl font-bold text-white mb-6">
          📈 Mood Trend
        </h2>
  
        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <LineChart data={data}>
            <XAxis
              dataKey="day"
              stroke="#9CA3AF"
            />
  
            <Tooltip
              contentStyle={{
                background: "#16111F",
                border: "none",
                borderRadius: "12px",
                color: "white",
              }}
            />
  
            <Line
              type="monotone"
              dataKey="mood"
              stroke="#FACC15"
              strokeWidth={4}
              dot={{
                fill: "#FACC15",
                r: 6,
              }}
              activeDot={{
                r: 8,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  export default MoodChart;