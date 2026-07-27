import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    Tooltip,
  } from "recharts";
  
  const data = [
    { day: "Mon", activity: 30 },
    { day: "Tue", activity: 45 },
    { day: "Wed", activity: 60 },
    { day: "Thu", activity: 35 },
    { day: "Fri", activity: 80 },
    { day: "Sat", activity: 55 },
    { day: "Sun", activity: 90 },
  ];
  
  function ActivityChart() {
    return (
      <div className="bg-[#16111F] rounded-3xl p-6 border border-[#241D35] shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6">
          📊 Weekly Activity
        </h2>
  
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="day" stroke="#9CA3AF" />
  
            <Tooltip
  cursor={{ fill: "transparent" }}
  contentStyle={{
    backgroundColor: "#16111F",
    border: "1px solid #2A223A",
    borderRadius: "16px",
    color: "#fff",
  }}
  labelStyle={{ color: "#fff" }}
/>

<Bar
  dataKey="activity"
  fill="#3B82F6"
  radius={[10, 10, 0, 0]}
  activeBar={{
    fill: "#60A5FA",
    stroke: "#3B82F6",
    strokeWidth: 2,
  }}
/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  export default ActivityChart;