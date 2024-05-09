import logo from "./logo.svg";
import "./App.css";
import Calendar from "./components/Calendar";

function App() {
  const events = [
    {
      date: "2024-05-10",
      startTime: "10:00",
      endTime: "11:00",
      color: "#2324f6", // Blue
      title: "Team Stand-up",
    },
    {
      date: "2024-05-11",
      startTime: "10:00",
      endTime: "11:00",
      color: "#2324f6", // Blue
      title: "Team Stand-up",
    },
    {
      date: "2024-05-15", // ISO date string
      startTime: "09:00",
      endTime: "10:30",
      color: "#f6be23", // Bright yellow
      title: "Team Stand-up",
    },
    {
      date: "2024-05-15", // Same day, different time
      startTime: "10:00",
      endTime: "12:00",
      color: "#f62023", // Bright red
      title: "Client Meeting",
    },
    {
      date: "2024-05-15", // ISO date string
      startTime: "13:00",
      endTime: "13:15",
      color: "#f6be23", // Bright yellow
      title: "Team Stand-up",
    },
    {
      date: "2024-04-15", // ISO date string
      startTime: "13:45",
      endTime: "14:00",
      color: "#2324f6", // Bright yellow
      title: "Team Stand-up",
    },
    {
      date: "2024-04-15", // ISO date string
      startTime: "13:00",
      endTime: "13:35",
      color: "#8823f6",
      title: "Team Stand-up",
    },
    {
      date: "2024-04-20",
      startTime: "13:20",
      endTime: "15:40",
      color: "#23f6e8", // Turquoise
      title: "Project Review",
    },
    {
      date: "2024-05-22",
      startTime: "08:00",
      endTime: "09:00",
      color: "#8823f6", // Purple
      title: "HR Workshop",
    },
    {
      date: "2024-05-25",
      startTime: "10:00",
      endTime: "11:00",
      color: "#2324f6", // Blue
      title: "Webinar: Industry Trends",
    },
    {
      date: "2024-06-11",
      startTime: "10:00",
      endTime: "11:00",
      color: "#2324f6", // Blue
      title: "Team Stand-up",
    },
    {
      date: "2024-06-13",
      startTime: "10:00",
      endTime: "11:00",
      color: "#2324f6", // Blue
      title: "Team Stand-up",
    },
    {
      date: "2024-06-19",
      startTime: "10:00",
      endTime: "11:00",
      color: "#2324f6", // Blue
      title: "Team Stand-up",
    },
    {
      date: "2024-06-19",
      startTime: "10:30",
      endTime: "11:00",
      color: "#8823f6", // Purple
      title: "HR Workshop",
    },
  ];
  return (
    <div className="App">
      <Calendar events={events} />
    </div>
  );
}

export default App;
