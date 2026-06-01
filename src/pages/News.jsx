import { useState } from "react";
function News() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [messageColor, setMessageColor] = useState("red");

function handleSubmit(e) {
  e.preventDefault();
  const emailPattern =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (name.trim() === "") {
  setMessage("Name cannot be empty");
  setMessageColor("red");
  return;
  }
  if (!emailPattern.test(email)) {
  setMessage("Enter valid email");
  setMessageColor("red");
  return;
  }
  setMessage("Subscription successful!");
  setMessageColor("lightgreen");

  localStorage.setItem("subscriberName", name);
  setName("");
  setEmail("");
}

  return (
    <main>

      <section id="news">

        <h2>📰 Latest News</h2>

        <div className="news-container">

          <article className="news-box">
            <h4>🏆 SRH Crowned Champions</h4>

            <p>
              Sunrisers Hyderabad defeated CSK by 6 wickets
              in the IPL 2026 Final.
            </p>
          </article>

          <article className="news-box">
            <h4>🧡 Orange Cap – Virat Kohli</h4>

            <p>
              Virat Kohli scored 712 runs in IPL 2026,
              finishing as the tournament's highest run scorer.
            </p>
          </article>

          <article className="news-box">
            <h4>💜 Purple Cap – Jasprit Bumrah</h4>

            <p>
              Jasprit Bumrah led the bowling charts with
              26 wickets this season.
            </p>
          </article>

          <article className="news-box">
            <h4>⭐ Player of the Season – Virat Kohli</h4>

            <p>
              Virat Kohli delivered consistent match-winning
              performances throughout IPL 2026.
            </p>
          </article>

        </div>

      </section>

      {/* SUBSCRIBE SECTION */}

      <section className="subscribe-section">

        <h2>📩 Subscribe for IPL Updates</h2>

        <form onSubmit={handleSubmit} noValidate>

          <label>Name</label>

          <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />

          <label>Email</label>

          <input formNoValidate type="email" placeholder="Enter your email" value={email}onChange={(e) => setEmail(e.target.value)}/>

          <p id="formMessage" style={{ color: messageColor }}>{message}</p>
          <button type="submit">Subscribe</button>
          

        </form>

      </section>

    </main>
  );
}

export default News;