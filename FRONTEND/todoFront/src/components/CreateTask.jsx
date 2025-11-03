import { useState } from 'react';
import '../index.css'
import { createTask } from '../services/tasksAPI';

function CreateTask({onTaskChange}) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        completed: false,
        due_date: "" 
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        setFormData(prevFormData => ({
        ...prevFormData, 
        [name]: type === 'checkbox' ? checked : value 
        }));
    };

    const handleSubmit = async (e) => {
        // Prevents the page of running again 
        e.preventDefault(); 

        setIsSubmitting(true);
        
        try {
            await createTask(formData); 

            onTaskChange();

            setFormData({
                title: "",
                description: "",
                completed: false,
                due_date: ""
            });
            
            window.alert("The task was created")

        } catch (error) {
            console.error("Error: ", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return(
        <div className="container mt-5">
            <h2>Create Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="taskTitle" className="form-label">
                        Title
                    </label>
                    <input type="text" className="form-control" id="taskTitle" name='title'
                    value={formData.title} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="taskDescription" className="form-label">
                        Description
                    </label>
                    <input type="text" className="form-control" id="taskDescription" name='description'
                    value={formData.description} onChange={handleChange} />
                </div>

                <div className='form-check mb-3'>
                    <label className='form-check-label' htmlFor='taskCompleted'>
                        Completed
                    </label>
                    <input className='form-check-input' type='checkbox' id='taskCompleted' name='completed' 
                    checked={formData.completed} onChange={handleChange} />
                </div>

                <div className='mb-3'>
                    <label htmlFor="taskDueDate" className='form-label'>
                        Due Date
                    </label>
                    <input type='date' className='form-control' id='taskDueDate' name='due_date' 
                    value={formData.due_date} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Creating' : 'CREATE'}
                </button>
            </form>
        </ div>
    );
}

export default CreateTask;