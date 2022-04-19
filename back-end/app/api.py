from fastapi import FastAPI
# CORSMiddleware for cross-origins request
from fastapi.middleware.cors import CORSMiddleware 

app = FastAPI()

# the config below allows cross-origin request from front-end domain
# and port which runs at localhost:3000

origins = [
    "https://localhost:3000",
    "localhost:3000"
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

# GET       --> Read employee
@app.get('/employee', tags=['employee'])
async def get_Emp() -> dict:
    return {"data": employees}

# POST      --> Create employee
@app.post('/employee', tags=['employees'])
async def add_Emp(todo: dict) -> dict:
    employees.append(todo)
    return {
        "data": "An employee has been added !"
    }

# PUT       --> Put employee
@app.put('/employee/{id}', tags=['employees'])
async def edit_Emp(id:int, body:dict) -> dict:
    for emp in employees:
        if int((emp['id'])) == id:
            emp['Activity'] = body['Activity']
            return {
                "data":f"Employee with id {id} has been updated"
            }
    return {
        "data":f"Id {id} not found !"
    }        

# DELETE    --> Delete employees
@app.delete('/employee/{id}', tags=['employees'])
async def delete_Todo(id: int) -> dict:
    for todo in employees:
        if int((todo['id'])) == id:
            employees.remove(todo)
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

# Route handler

@app.get("/employee", tags=["employees"])
async def get_employees() -> dict:
    return { "data": employees}





