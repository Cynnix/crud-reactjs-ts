from fastapi import FastAPI
# CORSMiddleware for cross-origins request
from fastapi.middleware.cors import CORSMiddleware 

app = FastAPI()

# the config below allows cross-origin request from front-end domain
# and port which runs at localhost:3000

origins = [
    "https://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to the back-end of the app !"}


# Route handler
# GET       --> Read employee
@app.get('/employee', tags=['employees'])
async def get_Employees() -> dict:
    return {"data": employees}

# POST      --> Create employee
@app.post('/employee', tags=['employees'])
async def add_Employees(todo: dict) -> dict:
    employees.append(todo)
    return {
        "data": "An employee has been added !"
    }

# PUT       --> Put employee
@app.put('/employee/{id}', tags=['employees'])
async def edit_Employees(id:int, body:dict) -> dict:
    for emp in employees:
        if int((emp['id'])) == id:  
            emp['full_name'] = body['full_name']
            emp['email_address'] = body['email_address']
            emp['age'] = body['age']
            emp['position'] = body['position']
            return {
                "data":f"Employee with id {id} has been updated"
            }
    return {
        "data":f"Id {id} not found !"
    }        

# DELETE    --> Delete employees
@app.delete('/employee/{id}', tags=['employees'])
async def delete_Employees(id: int) -> dict:
    for emp in employees:
        if int((emp['id'])) == id:
            employees.remove(emp)
            return{
                "data":f"id {id} has been deleted !"
            }
    return {
        "data":f"Id {id} not found !"
    }

# dummy data - represents the structure of individual employees
# Alternative is to wire up a database, but since I didn't use one in this app
# I simply used a dummy list

employees = [
    {
        "id": "1",
        "full_name": "Paul Tito C. Rebollo",
        "email_address": "paultito150@gmail.com",
        "age": "23",
        "position": "Intern",
    },
    {
        "id": "2",
        "full_name": "Paul John Cay",
        "email_address": "pauljohncay@yahoo.com",
        "age": "22",
        "position": "Quality Assurance Analyst",
    },
]




