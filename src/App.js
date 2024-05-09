import logo from "./logo.svg";
import "./App.css";
import Calendar from "./components/Calendar";

function App() {
  const events = [
    {
        date: "2024-05-15", // ISO date string
        startTime: "09:00",
        endTime: "10:30",
        color: "#f6be23", // Bright yellow
        title: "Team Stand-up"
    },
    {
        date: "2024-05-15", // Same day, different time
        startTime: "10:00",
        endTime: "12:00",
        color: "#f62023", // Bright red
        title: "Client Meeting"
    },
    {
        date: "2024-05-20",
        startTime: "13:00",
        endTime: "15:30",
        color: "#23f6e8", // Turquoise
        title: "Project Review"
    },
    {
        date: "2024-05-22",
        startTime: "08:00",
        endTime: "09:00",
        color: "#8823f6", // Purple
        title: "HR Workshop"
    },
    {
        date: "2024-05-25",
        startTime: "10:00",
        endTime: "11:00",
        color: "#2324f6", // Blue
        title: "Webinar: Industry Trends"
    }
];
  return (
    <div className="App">
      <Calendar events={events} />
    </div>
  );
}

export default App;
