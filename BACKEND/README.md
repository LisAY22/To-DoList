# To-Do Backend
This is a simple REST API that serves as the backend for the "To-Do List" project.
The REST API is responsible of managing the tasks, applying filters, adding new tasks and updating their status.

## Technologies
This project was built with:
- Django: A free and open-source framework. 
- Django Rest Framework: For building the API endpoints.
- Django Filter: For enabling URL-based filtering.  
- CORS: Middleware for handling Cross-Origin Resource Sharing

## How to Get Started
### Prerequisites
- Python 
- pipenv 
- Postman (Optional, for testing API endpoints)

### Installation & Setup
1. Clone the repository 
[https://github.com/LisAY22/To-DoList.git](https://github.com/LisAY22/To-DoList.git)
2. Navigate to the API project directory 
```cd TO-DOLIST/BACKEND```
3. Install the dependencies using pipenv 
```pipenv install```
4. Activate the virtual environment
```pipenv shell```
5. Apply database migrations 
```python manage.py migrate```

### Run the server
```pipenv run python manage.py runserver```

By default the server will run at:
```http://127.0.0.1:8000```
