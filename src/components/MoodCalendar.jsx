import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function MoodCalendar() {
  return (
    <div className="rounded-3xl bg-[#16111F] border border-[#241D35] p-6 shadow-xl">
      <h2 className="text-3xl font-bold text-white mb-6">
        📅 Mood Calendar
      </h2>

      <Calendar
        className="w-full rounded-xl"
      />
    </div>
  );
}