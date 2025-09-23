from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
from database import SessionLocal, engine, Base
from models import User, Service, Booking
from schemas import BookingCreate, BookingResponse, ServiceResponse
from datetime import datetime

# Crea tabelle
Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS per React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # frontend in locale
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dipendenza DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# --- Servizi ---
@app.get("/services/", response_model=List[ServiceResponse])
def get_services(db: Session = Depends(get_db)):
    return db.query(Service).all()

# --- Prenotazioni ---
@app.get("/bookings/", response_model=List[BookingResponse])
def get_bookings(db: Session = Depends(get_db)):
    return db.query(Booking).all()

@app.post("/bookings/", response_model=BookingResponse)
def create_booking(booking: BookingCreate, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == booking.user_id).first()
    service = db.query(Service).filter(Service.id == booking.service_id).first()
    if not user or not service:
        raise HTTPException(status_code=404, detail="User o Service non trovato")
    
    new_booking = Booking(
        user_id=booking.user_id,
        service_id=booking.service_id,
        datetime=booking.datetime
    )
    db.add(new_booking)
    db.commit()
    db.refresh(new_booking)
    return new_booking

# --- Quick Pickup ---
@app.post("/api/quick-pickup", response_model=BookingResponse)
def quick_pickup(order: dict, db: Session = Depends(get_db)):
    order_id = order.get("orderId")
    if not order_id:
        raise HTTPException(status_code=400, detail="OrderId mancante")
    
    # Utente fittizio
    user = db.query(User).filter(User.name == "Quick Pickup User").first()
    if not user:
        user = User(name="Quick Pickup User", email="quickpickup@example.com", password="1234")
        db.add(user)
        db.commit()
        db.refresh(user)
    
    # Servizio fittizio Quick Pickup
    service = db.query(Service).filter(Service.name == "Quick Pickup").first()
    if not service:
        service = Service(name="Quick Pickup", type="quick-pickup", location="Virtual")
        db.add(service)
        db.commit()
        db.refresh(service)
    
    # Creazione prenotazione
    booking = Booking(user_id=user.id, service_id=service.id, datetime=datetime.utcnow())
    db.add(booking)
    db.commit()
    db.refresh(booking)

    return booking

# --- Time Reservation ---
@app.post("/api/time-reservation", response_model=BookingResponse)
def time_reservation(reservation: dict, db: Session = Depends(get_db)):
    slot = reservation.get("slot")
    user_name = reservation.get("user")
    service_id = reservation.get("serviceId")
    if not slot or not user_name:
        raise HTTPException(status_code=400, detail="Slot o utente mancante")
    
    # Controllo utente
    user = db.query(User).filter(User.name == user_name).first()
    if not user:
        user = User(name=user_name, email=f"{user_name.lower()}@example.com", password="1234")
        db.add(user)
        db.commit()
        db.refresh(user)
    
    # Controllo servizio
    if service_id:
        service = db.query(Service).filter(Service.id == service_id).first()
        if not service:
            raise HTTPException(status_code=404, detail="Servizio non trovato")
    else:
        service = db.query(Service).first()
        if not service:
            raise HTTPException(status_code=404, detail="Nessun servizio disponibile")
    
    # Creazione prenotazione
    try:
        booking_time = datetime.strptime(slot, "%H:%M")
        booking = Booking(user_id=user.id, service_id=service.id, datetime=booking_time)
    except ValueError:
        raise HTTPException(status_code=400, detail="Formato slot non valido, usa HH:MM")
    
    db.add(booking)
    db.commit()
    db.refresh(booking)

    return booking

# --- Popola dati fittizi ---
def init_data():
    db = SessionLocal()
    
    # Utente demo
    if not db.query(User).first():
        db.add(User(name="Mario Rossi", email="mario@example.com", password="1234"))
    
    # Servizi demo
    if not db.query(Service).first():
        services = [
            Service(name="Panetteria Bianchi", type="panetteria", location="Via Roma 10"),
            Service(name="Barbiere Rossi", type="barbiere", location="Via Milano 25"),
            Service(name="Gelateria Dolce Vita", type="gelateria", location="Via Torino 3"),
            Service(name="Palestra Fit&Go", type="palestra", location="Via Firenze 7")
        ]
        db.add_all(services)
    
    db.commit()
    db.close()

init_data()
