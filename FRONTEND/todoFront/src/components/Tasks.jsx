import { useState, useEffect } from "react";
import { getFilteredTasks, getTasks, updateTask } from "../services/tasksAPI";

function Tasks({filter, refresh, onTaskChange}){
    {/* useState saves the data */}
    const [tasks, setTasks] = useState([]);

    {/* useEffect to fetch data from backend */}
    {/* [] indicates to run when the filter changes */}
    useEffect(() => {
        const loadTasks = async () => {
            let data;

            if (filter === "ALL") {
                data = await getTasks();
            } else if (filter === "COMPLETED") {
                data = await getFilteredTasks({completed: "true"});
            } else if (filter === "PENDING") {
                data = await getFilteredTasks({completed: "false"});
            }
            setTasks(data);
        }; 
        loadTasks();
    }, [filter, refresh])

    const handleUpdateStatus = async (task) => {        
        try {
            const updatedTaskData = {
                ...task, // Copy all the fields (title, description, etc.)
                completed: !task.completed 
            };

            await updateTask(task.id, updatedTaskData);

            onTaskChange(); 

        } catch (error) {
            console.error("Error al actualizar la tarea:", error);
        }
    };

    return(
        <div className="container mt-4">
            <h2>Task List</h2>
            
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.due_date}</td>
                                <td>{task.completed ? 'Completed' : 'Pending'}</td>

                                <td>
                                    <div className="dropdown">
                                        <button 
                                            className="btn btn-secondary btn-sm dropdown-toggle" 
                                            type="button" 
                                            data-bs-toggle="dropdown" 
                                            aria-expanded="false">
                                            Change
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a 
                                                    className="dropdown-item" 
                                                    href="#" 
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleUpdateStatus(task);
                                                    }}>
                                                    Mark as {task.completed ? 'Pending' : 'Completed'}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
}

export default Tasks;