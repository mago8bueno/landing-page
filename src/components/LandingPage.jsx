import React, { useState } from "react";
import "../styles/LandingPage.css";

function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías hacer un POST a un backend, por ahora solo mostramos el mensaje
    setSubmitted(true);
  };

  return (
    <div className="landing-container">
      <h1>🎉 Bienvenid@ a Tienda Fisica Pro 🎉</h1>
      <p>Una herramienta divertida y potente para llevar el control total de tu tienda física. ¡Y con estilo!</p>
      <img src="/logo192.png" alt="Logo" style={{ width: "100px", margin: "1rem auto" }} />

      <p>Estamos afinando los últimos detalles. Apúntate a la lista de espera para enterarte antes que nadie 🥳👇</p>

      {!submitted ? (
        <form className="waitlist-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Tu email guap@"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Unirme 📨</button>
        </form>
      ) : (
        <h3>✅ ¡Genial! Te avisamos cuando esté listo.</h3>
      )}
    </div>
  );
}

export default LandingPage;

