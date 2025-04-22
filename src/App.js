import React, { useState } from "react";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>🎩 ¡Hola, humano curioso! 🏬</h1>
        <p>
          Estamos cocinando algo sabrosísimo:{" "}
          <strong>la tienda física más moderna y divertida</strong> que has visto.
        </p>
        <p>
          Únete a nuestra lista de espera y sé parte de la revolución. ¡Primero los valientes!
        </p>

        {!showForm && (
          <button className="cta-button" onClick={() => setShowForm(true)}>
            ✨ Quiero enterarme ✨
          </button>
        )}

        {showForm && (
          <form className="formulario">
            <input type="text" placeholder="Tu nombre" required />
            <input type="email" placeholder="Tu email" required />
            <button type="submit">¡Apúntame!</button>
          </form>
        )}

        <h2>🧃 ¿Qué se viene?</h2>
        <ul>
          <li>✅ Control total de tu stock</li>
          <li>✅ Automatizaciones que parecen magia</li>
          <li>✅ Interfaz que hasta tu abuela podría usar</li>
        </ul>

        <p className="footer">
          Hecho con ❤️ por gente con buenas intenciones y memes elegantes.
        </p>
      </div>
    </div>
  );
}

export default App;
