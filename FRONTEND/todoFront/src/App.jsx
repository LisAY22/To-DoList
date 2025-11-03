import HeaderApp from "./components/HeaderApp";
import FooterApp from "./components/FooterApp";
import Tasks from "./components/Tasks";
import { useState } from "react";
import CreateTask from "./components/CreateTask";

function App() {
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [refreshSignal, setRefreshSignal] = useState(0);

  const handleTaskChange = () => {
    setRefreshSignal(count => count + 1); 
  };

  return (
    <div className="container-fluid p-0">
      <HeaderApp onFilterChange={setFilterStatus}/>
      <Tasks filter={filterStatus} refresh={refreshSignal} onTaskChange={handleTaskChange}/>
      <CreateTask onTaskChange={handleTaskChange}/>
      <FooterApp />
    </div>
  );
}

export default App;