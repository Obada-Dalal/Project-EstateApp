import "./Contact.css";
import OurFeaturedAgents from "../ourfeaturedagents/OurFeaturedAgents";
import React, { useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Contact() {
  const form = useRef();
  const [showMassage, setShowMassage] = useState(false);
  const [textMassage, setTextMassage] = useState("");
  const [isSending, setIsSending] = useState(false); // لحماية الزر أثناء الإرسال

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isFormValid =
    name.trim() !== "" && email.includes("@") && message.trim() !== "";

  const handleManualSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setShowMassage(false); // إخفاء أي رسالة سابقة عند محاولة إرسال جديدة

    try {
      const response = await fetch("https://formspree.io/f/mqargbpw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message
        })
      });

      if (response.ok) {
        // 1. تحديث نص الرسالة وإظهارها
        setTextMassage("Your message has been sent successfully!");
        setShowMassage(true);

        // 2. تفريغ الحقول
        setName("");
        setEmail("");
        setMessage("");

        // 3. (اختياري) إخفاء رسالة النجاح تلقائياً بعد 5 ثوانٍ
        setTimeout(() => setShowMassage(false), 5000);
      } else {
        setTextMassage("Failed to send. Please try again.");
        setShowMassage(true);
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setTextMassage("Connection error. Please check your internet.");
      setShowMassage(true);
    } finally {
      setIsSending(false);
    }
  };

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
            <form ref={form} onSubmit={handleManualSubmit}>
              <label>Name :</label>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Email :</label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Message :</label>
              <textarea
                name="message"
                placeholder="Enter Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              {/* مكان ظهور الرسالة والأنيميشن */}
              {showMassage && (
                <div
                  className="Massage"
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <DotLottieReact
                    src="https://lottie.host/16c4c764-d49f-4da1-bafe-b8e036807f2e/8NA2NfTYAi.lottie"
                    autoplay
                    loop={false}
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p
                    className="textMassage"
                    style={{
                      color: textMassage.includes("Failed") ? "red" : "green",
                      margin: 0
                    }}
                  >
                    {textMassage}
                  </p>
                </div>
              )}

              {isFormValid && (
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
