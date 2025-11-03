const API_URL = 'http://127.0.0.1:8000/tasks/';

export const getTasks = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Error fetching tasks")
        }
        return await response.json();
    } catch(error) {
        console.error(error);
        return [];
    }
};

export const getFilteredTasks = async (filterParams) => {
    const query = new URLSearchParams(filterParams).toString();

    try {
        const response = await fetch(`${API_URL}?${query}`);
        if (!response.ok) {
            throw new Error("Error in filter tasks")
        }
        return await response.json();
    } catch(error) {
        console.error(error);
        return [];
    }
};

export const createTask = async (taskData) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData),
    });
    if (!response.ok) {
        throw new Error("It was not possible to create the task")
    }
    return await response.json();
};

export const updateTask = async (id, taskData) => {
    const response = await fetch(`${API_URL}${id}/`, { 
        method: 'PUT', 
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
    });
    if (!response.ok) {
        throw new Error('It was not possible to update the task');
    }
    return await response.json();
};

export const deleteTask = async (id) => {
    const response = await fetch(`${API_URL}${id}/`, { 
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('It was not possible to delete the task');
    }
    return response.status; 
};