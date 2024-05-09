import logo from "./logo.svg";
import "./App.css";
import Calendar from "./components/Calendar";

function App() {
  let events = [
    {
      startTime: "00:00",
      endTime: "01:30",
      date: "9-5-2024",
      color: "#f6be23",
      title: "stand up",
    },
    {
      date: "9-5-2024",
      startTime: "12:00",
      endTime: "2:30",
      color: "#f62023",
      title: "weekly catch up",
    },
  ];
  return (
    <div className="App">
      <Calendar events={events} />
    </div>
  );
}

export default App;
