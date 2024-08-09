import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import {  MdOutlineMail  } from "react-icons/md";
import emailjs from "@emailjs/browser";
const Contact = ({ dark }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert("Error sending email:", error);
      });
  };

  return (
    <section
      id="contact"
      className={`${
        dark ? "bg-gray-900" : "bg-white"
      } flex flex-col py-32 w-full items-center justify-center px-5 sm:px-24`}
    >
      <h1
        className={`font-bold text-4xl pb-20 ${
          dark ? "text-cyan-300" : "text-black"
        }`}
      >
        Contact
      </h1>
      <div className="flex w-full justify-center">
        <form
          onSubmit={handleSubmit}
          className={`relative ${
            dark ? "border-cyan-300" : "border-gray-400"
          } border rounded-lg flex flex-col gap-y-5 max-w-md w-full p-10`}
        >
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="name"
              className={`${
                dark ? "text-white" : "text-gray-900"
              } text-sm font-medium`}
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full rounded-lg border text-sm ${
                dark
                  ? "bg-gray-900 placeholder:text-gray-400 text-white  border-cyan-300 focus:ring-cyan-300"
                  : "bg-white focus:ring-blue-600 border-gray-400"
              }`}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col  gap-y-2">
            <label
              htmlFor="email"
              className={`${
                dark ? "text-white" : "text-gray-900"
              } text-sm font-medium`}
            >
              Your Email
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              className={`w-full rounded-lg border text-sm ${
                dark
                  ? "bg-gray-900 placeholder:text-gray-400 text-white border-cyan-300 focus:ring-cyan-300"
                  : "bg-white focus:ring-blue-600 border-gray-400"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col  gap-y-2">
            <label
              htmlFor="message"
              className={`${
                dark ? "text-white" : "text-gray-900"
              } text-sm font-medium`}
            >
              Message
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows={4}
              className={`w-full rounded-lg border text-sm ${
                dark
                  ? "bg-gray-900 placeholder:text-gray-400 text-white border-cyan-300 focus:ring-cyan-300"
                  : "bg-white focus:ring-blue-600 border-gray-400"
              }`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <a href="mailto:safeerkhan1748@gmail.com">
          <button
          type="button"
            title="safeerkhan1748@gmail.com"
            className={`${
              dark ? "text-black bg-cyan-300 hover:bg-white" : "text-white hover:bg-gray-800  bg-black"
            } rounded-full absolute top-2 left-2 p-1`}
          >
            < MdOutlineMail size={20} />
          </button>
          </a>
          <button
            type="submit"
            title="send email"
            className={`${
              dark ? "text-black bg-cyan-300 hover:bg-white" : "text-white hover:bg-gray-800  bg-black"
            } rounded-full absolute bottom-2 right-2 p-1`}
          >
            <IoIosSend size={20} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
