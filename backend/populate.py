from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
import models
import datetime

# crea DB se non esiste
Base.metadata.create_all(bind=engine)

# apri sessione DB
db: Session = SessionLocal()

# ===== 1. Utenti =====
users_data = [
    {"name": "Loris", "email": "loris@example.com", "password": "123"},
    {"name": "Alice", "email": "alice@example.com", "password": "123"},
    {"name": "Mario", "email": "mario@example.com", "password": "123"},
]

users = []
for u in users_data:
    user = models.User(**u)
    db.add(user)
    users.append(user)
db.commit()
for user in users:
    db.refresh(user)

# ===== 2. Servizi =====
services_data = [
    {"name": "Panetteria Bianchi", "type": "panetteria", "location": "Via Roma, 10"},
    {"name": "Barbiere Rossi", "type": "barbiere", "location": "Via Milano, 5"},
    {"name": "Gelateria Dolce Vita", "type": "gelateria", "location": "Piazza Duomo, 3"},
    {"name": "Palestra Fit&Go", "type": "palestra", "location": "Via Torino, 12"},
]

services = []
for s in services_data:
    service = models.Service(**s)
    db.add(service)
    services.append(service)
db.commit()
for service in services:
    db.refresh(service)

# ===== 3. Prenotazioni =====
bookings_data = [
    {"user_id": users[0].id, "service_id": services[0].id, "datetime": datetime.datetime(2025,9,21,18,0)},
    {"user_id": users[0].id, "service_id": services[1].id, "datetime": datetime.datetime(2025,9,23,13,30)},
    {"user_id": users[1].id, "service_id": services[2].id, "datetime": datetime.datetime(2025,9,22,16,0)},
]

for b in bookings_data:
    booking = models.Booking(**b)
    db.add(booking)

db.commit()
db.close()

print("Database popolato con dati di esempio!")
