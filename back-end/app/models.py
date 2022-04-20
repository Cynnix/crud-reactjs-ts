from typing import Optional
from uuid import UUID, uuid4
from pydantic import BaseModel
from uuid import UUID, uuid4
from typing import Optional

class Employees(BaseModel):
    id: Optional[UUID] = uuid4()
    full_name: str
    email_address:str
    age: int
    position: str

class EmployeeUpdate(BaseModel):
    full_name: Optional[str]
    email_address: Optional[str]
    age: Optional[str]
    position: Optional[str]