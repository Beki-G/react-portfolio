import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./styles.css";

function ContactInfo() {
  return (
    <div className="justify-center items-center mx-0 flex flex-col mb-10 w-4/5 contactMe min-h-9/10">
      <div className="text-3xl font-semibold mb-6 mt-10">Contact Me!</div>

      <div className="text-lg mb-4 text-center ">
        Feel free to reach out to me on social media shoot me an email using the
        form below!
      </div>

      <a className="font-medium mb-1 hover:text-sky" href="https://twitter.com/bekigonzalez4" target="_blank" rel="noopener noreferrer">
        Twitter
      </a>
      <a className="font-medium mb-1 hover:text-sky" href="https://github.com/Beki-G" target="_blank" rel="noopener noreferrer">
        Github
      </a>
      <a
        className="font-medium mb-1 hover:text-sky"
        href="https://www.linkedin.com/in/rebeca-gonzalez/" target="_blank" rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <br/>
      <ContactForm />
    </div>
  );
}

export default ContactInfo;