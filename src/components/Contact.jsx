import React, { useState } from "react";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
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
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-full justify-items-center gap-y-8">
        <form
          onSubmit={handleSubmit}
          className={`relative ${
            dark ? "border-cyan-300" : "border-gray-400"
          } border rounded-lg flex flex-col gap-y-5 max-w-sm w-full p-10`}
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
          <button
            type="submit"
            title="send email"
            className={`${
              dark ? "text-black bg-cyan-300 hover:bg-white" : "text-white hover:bg-gray-800  bg-black"
            } rounded-full absolute bottom-2 right-2 p-1`}
          >
            <IoIosSend size={22} />
          </button>
        </form>
        <div className="flex flex-col max-w-sm w-full items-start justify-center gap-y-6">
          <div className="flex gap-x-4 items-center justify-center">
            <FaPhoneAlt
              size={20}
              className={`${dark ? "text-cyan-300" : "text-black"}`}
            />
            <h3 className={`${dark ? "text-white" : "text-gray-900"}`}>
              +923180522996
            </h3>
          </div>
          <div className="flex gap-x-4 items-center justify-center">
            <MdEmail
              size={20}
              className={`${dark ? "text-cyan-300" : "text-black"}`}
            />
            <h3 className={`${dark ? "text-white" : "text-gray-900"}`}>
              safeerkhan1748@gmail.com
            </h3>
          </div>
          <div className="flex gap-x-4 items-center justify-center">
            <IoLocationSharp
              size={20}
              className={`${dark ? "text-cyan-300" : "text-black"}`}
            />
            <h3 className={`${dark ? "text-white" : "text-gray-900"}`}>
              CB-325 Darbar-e-kareemi Wah cantt, Pakistan
            </h3>
          </div>
          <div className="flex gap-x-4 items-center justify-center">
            <FaGithub
              size={20}
              className={`${dark ? "text-cyan-300" : "text-black"}`}
            />
            <h3 className={`${dark ? "text-white" : "text-gray-900"}`}>
              https://github.com/safeer1748
            </h3>
          </div>
          <div className="flex gap-x-4 items-center justify-center">
            <FaLinkedin
              size={20}
              className={`${dark ? "text-cyan-300" : "text-black"}`}
            />
            <h3 className={`${dark ? "text-white" : "text-gray-900"}`}>
              https://www.linkedin.com/in/safeer-muhammad-ba302427a/
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
