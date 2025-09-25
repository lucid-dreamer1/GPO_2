"use client";
import React, { useState } from "react";
import { LoginHeader } from "@/components/LoginHeader";
import { Footer } from "@/components/Footer";
import { SignupHeader } from "@/components/SingupHeader";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!validateEmail(email)) {
      alert("Email non valida.");
      return;
    }
    if (password.trim() === "") {
      alert("Inserisci la password.");
      return;
    }

    // Qui puoi aggiungere la chiamata al backend per il login
    // esempio fetch("/api/login", { method: "POST", body: JSON.stringify({ email, password }) })

    // Per ora simuliamo il login controllando localStorage
    const storedUser = localStorage.getItem("utenteRegistrato");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email) {
        alert(`Benvenuto, ${user.nome}!`);
        window.location.href = "/shop"; // redirect allo shop
      } else {
        alert("Credenziali non corrette.");
      }
    } else {
      alert("Nessun utente registrato con questa email.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col gradient-timeslot">
      <SignupHeader />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Accedi</h1>
            <p className="text-gray-500 mt-2">
              Inserisci le tue credenziali per accedere alle prenotazioni!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
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

          {/* Footer mini */}
          <div className="text-center text-gray-400 text-sm mt-6">
            © 2025 Book IT! All rights reserved.
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
