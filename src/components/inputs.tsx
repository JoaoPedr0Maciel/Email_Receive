import "../styles/components/inputs.sass";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Inputs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: any) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs.send("service_t04ggmj", "template_vs9o8nh", templateParams, "rKcyRV0NeD32ZtXmy").then((res) => {
      console.log("email enviado", res.status, res.text);
    });
  }

  return (
    <form id="form-container" onSubmit={sendEmail}>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite seu nome:"
        value={name}
      />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        name=""
        id=""
        value={email}
        placeholder="Digite seu email:"
      />

      <textarea
        name=""
        id=""
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder="Fale comigo!!"
      ></textarea>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Inputs;
