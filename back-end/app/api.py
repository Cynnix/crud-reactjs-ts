from uuid import UUID
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware 
from app.models import Employees, EmployeeUpdate
from typing import List


app = FastAPI()

# database - list of employees
db: List[Employees] = [
    Employees(
        id=UUID("280519d4-d484-43a3-b28d-8437cc363fe9"),
        full_name="Paul Tito C. Rebollo",
        email_address="paultito@gmail.com",
        age="23",
        position="Intern",
    ),
    Employees(
        id=UUID("3f85aad8-ce29-452c-9e30-cfd71dbddef5"),
        full_name="Paul John Cay",
        email_address="pauljohncay@yahoo.com",
        age="22",
        position="Intern",
    ),
]

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

# tested using localhost:8000/docs 

@app.get("/", tags=["root"])
async def readRoot() -> dict:
    return {"message": "Welcome to the back-end of the app !"}

# Route handler
# GET       --> Read employee
@app.get('/employee', tags=['employees'])
async def getEmployees() -> dict:
    return db

# POST       --> Add employee
@app.post('/employee', tags=['employees'])
async def addEmployees(emp: Employees) -> dict:
    db.append(emp)
    return {
        "data":f"Employee added !"
    }

# PUT       --> Put employee
@app.put('/employee/{id}', tags=['employees'])
async def editEmployees(id:UUID, emp_update: EmployeeUpdate) -> dict:
    for emp in db:
        if emp.id == id:  
            if emp_update.full_name is not None:
                emp.full_name = emp_update.full_name
            if emp_update.email_address is not None:
                emp.email_address = emp_update.email_address
            if emp_update.age is not None:
                emp.age = emp_update.age
            if emp_update.position is not None:
                emp.position = emp_update.position
            return {
                "data":f"Employee with id {id} has been updated"
            }
    raise HTTPException(
        status_code=404,
        detail=f"User with id: {id} does not exist !"
    )     

# DELETE    --> Delete employees
@app.delete('/employee/{id}', tags=['employees'])
async def deleteEmployees(id: UUID) -> dict:
    for emp in db:
        if (emp.id) == id:
            db.remove(emp)
            return{
                "data":f"id {id} has been deleted !"
            }
    raise HTTPException(
        status_code=404,
        detail=f"User with id: {id} does not exist !"
    )
