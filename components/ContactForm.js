"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qm081rp",
        "template_2h8r9vi",
        form.current,
        "Vnw_CDBjz_JcOk2im"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setFormError(true);
        }
      );
  };

  return (
    <div className="lg:p-5 font-Encode-Sans">
      <motion.h3
        initial={{ y: "200%" }}
        transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 1 }}
        animate={{ y: 0 }}
        className="text-center lg:text-5xl text-5xl mt-10 pb-6 font-bold"
      >
        Contact Us
      </motion.h3>
      <p className="text-center text-lg mb-6">
        We would love to hear from you! Please fill out the form below to get in touch.
      </p>
      {formError && (
        <motion.div
          transition={{ duration: 0.5, delay: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-center text-lg mt-5 text-rose-600">
            Something went wrong! Please try again later.
          </p>
        </motion.div>
      )}
      <motion.div
        transition={{ duration: 0.5, delay: 0.7 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-5"
      >
        {formSubmitted ? (
          <motion.div
            transition={{ duration: 0.5, delay: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-center text-green-500 text-xl lg:mt-40 mt-20 mb-20">
              Thank you for your message! We'll get back to you shortly!
            </p>
          </motion.div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="bg-white shadow-md rounded-lg p-6">
            <div className="mx-auto rounded-xl max-w-xl">
              <div className="grid grid-cols-1 gap-6 label">
                <label className="block">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="appearance-none bg-gray-200 border border-gray-300 rounded w-full text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                  />
                </label>
                <label className="block">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="appearance-none bg-gray-200 border border-gray-300 rounded w-full text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                  />
                </label>
                <label className="block">
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Your Message"
                    className="appearance-none bg-gray-200 border border-gray-300 rounded w-full text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                  />
                </label>
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 hover:bg-indigo-300 hover:text-neutral-800 p-3 rounded-lg w-full"
                  >
                    Send Message
                  </motion.button>
                </div>
              </div>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default ContactForm ;
