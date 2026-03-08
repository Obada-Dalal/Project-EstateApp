import "./Contact.css";
import OurFeaturedAgents from "../ourfeaturedagents/OurFeaturedAgents";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Contact() {
  const form = useRef();
  const [showMassage, setShowMassage] = useState(false);
  const [textMassage, setTextMassage] = useState("");

  // state لمتابعة القيم
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ivcdjf7",
      "template_nv6yqig",
      form.current,
      "q1NS15pvkXyOQjQPb"
    );

    e.target.reset();

    // إعادة تفريغ القيم
    setName("");
    setEmail("");
    setMessage("");

    // عند الضغط على الزر نظهر الـ Massage
    setTextMassage("Sending...");
    setShowMassage(true);

    setTimeout(() => {
      setTextMassage("Message Sent!");
    }, 3000);

    setTimeout(() => {
      setShowMassage(false);
    }, 5500);
  };

  // شرط التحقق من الحقول
  const isFormValid =
    name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

  return (
    <div className="Box" id="Contact">
      <div className="continer continerContact">
        <div className="backgrounMainContact">
          <div className="TextMain">
            <p>Contact Us</p>
            <h3>Get Helps & Friendly Support</h3>
          </div>
        </div>
        <div className="BoxContactAgents">
          <OurFeaturedAgents />
        </div>
        <div className="BoxContactWebSit">
          <div className="BoxForm">
            <h2>
              To contact the website designer, enter your name, personal email
              address, and write your message in the designated space.
            </h2>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name :</label>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>

              <label>Email :</label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>

              <label>Message :</label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              {showMassage && (
                <div className="Massage">
                  <DotLottieReact
                    src="https://lottie.host/16c4c764-d49f-4da1-bafe-b8e036807f2e/8NA2NfTYAi.lottie"
                    autoplay
                    loop={false}
                    style={{ width: "100px", height: "50px" }}
                  />
                  <p className="textMassage">{textMassage}</p>
                </div>
              )}

              {/* زر الإرسال يظهر فقط إذا كانت الحقول ممتلئة */}
              {isFormValid && (
                <button className="btn btn-primary">Send Message</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
