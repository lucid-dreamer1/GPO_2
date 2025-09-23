from pydantic import BaseModel
from datetime import datetime

class UserCreate(BaseModel):
    name: str
    email: str
    password: str

class UserResponse(BaseModel):
    id: int
    name: str
    email: str

    model_config = {
        "from_attributes": True
    }

class ServiceCreate(BaseModel):
    name: str
    type: str
    location: str

class ServiceResponse(BaseModel):
    id: int
    name: str
    type: str
    location: str

    model_config = {
        "from_attributes": True
    }

class BookingCreate(BaseModel):
    user_id: int
    service_id: int
    datetime: datetime

class BookingResponse(BaseModel):
    id: int
    user: UserResponse
    service: ServiceResponse
    datetime: datetime

    model_config = {
        "from_attributes": True
    }
