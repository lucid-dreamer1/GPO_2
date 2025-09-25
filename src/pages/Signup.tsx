"use client";
import React, { useState } from "react";
import { LoginHeader } from "@/components/LoginHeader";
import { Footer } from "@/components/Footer";

const User = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    eta: "",
    email: "",
    genere: "",
    paese: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, cognome, eta, email, genere, paese } = formData;

    if (nome.trim() === "" || cognome.trim() === "") {
      alert("Nome e Cognome sono obbligatori.");
      return;
    }
    if (isNaN(parseInt(eta)) || parseInt(eta) <= 18) {
      alert("L'età deve essere maggiore di 18 anni.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Email non valida.");
      return;
    }
    if (!genere) {
      alert("Seleziona un genere.");
      return;
    }
    if (paese === "") {
      alert("Seleziona un paese.");
      return;
    }

    localStorage.setItem("utenteRegistrato", JSON.stringify({ nome, cognome, email }));
    window.location.href = "shop.html"; // se vuoi, si può cambiare in /shop
  };

  return (
    <div className="min-h-screen bg-background flex flex-col gradient-timeslot">
      <LoginHeader />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md ">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Registrati ora
            </h1>
            <p className="text-gray-500 mt-2">
               per accedere alle prenotazioni in app!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Nome:
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Inserisci il tuo nome"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Cognome:
              </label>
              <input
                type="text"
                name="cognome"
                value={formData.cognome}
                onChange={handleChange}
                placeholder="Inserisci il tuo cognome"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Età:
              </label>
              <input
                type="number"
                name="eta"
                value={formData.eta}
                onChange={handleChange}
                placeholder="Es: 25"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

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
              <label className="block text-gray-700 font-medium mb-2">
                Genere:
              </label>
              <div className="flex gap-4">
                {["Maschio", "Femmina", "Altro"].map((g) => (
                  <label key={g} className="flex items-center gap-2 text-gray-600">
                    <input
                      type="radio"
                      name="genere"
                      value={g}
                      checked={formData.genere === g}
                      onChange={handleChange}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    {g}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Paese di residenza:
              </label>
              <select
                name="paese"
                value={formData.paese}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">-- Seleziona --</option>
                <option value="Italia">Italia</option>
                <option value="Svizzera">Svizzera</option>
                <option value="Francia">Francia</option>
                <option value="Germania">Germania</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full gradient-timeslot text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Registrati e Vai allo Shop
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

export default User;
