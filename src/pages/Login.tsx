"use client";
import React, { useState } from "react";
import { SignupHeader } from "@/components/SingupHeader";
import { db } from "@/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;

    // Validazioni
    if (!validateEmail(email)) {
      alert("Email non valida.");
      return;
    }
    if (password.trim() === "") {
      alert("Inserisci la password.");
      return;
    }

    try {
      const q = query(collection(db, "utenti"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert("Nessun utente registrato con questa email.");
        return;
      }

      const userDoc = querySnapshot.docs[0];
      const user = userDoc.data();

      // Controllo password (solo test, in produzione usare Firebase Auth!)
      if (user.password === password) {
        alert(`Benvenuto, ${user.nome}!`);
        window.location.href = "/"; // redirect
      } else {
        alert("Credenziali non corrette.");
      }
    } catch (error: any) {
      console.error(error);
      alert("Errore nel login: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col gradient-timeslot">
      <SignupHeader />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Accedi</h1>
            <p className="text-gray-500 mt-2">
              Inserisci le tue credenziali per accedere alle prenotazioni!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="esempio@email.com"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Inserisci la tua password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full gradient-timeslot text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Accedi
            </button>
          </form>

          <div className="text-center text-gray-400 text-sm mt-6">
            © 2025 Book IT! All rights reserved.
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
