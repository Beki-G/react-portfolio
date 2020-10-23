import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState({ contactName: "" });
  const [subject, setSubject] = useState({ subject: "" });
  const [message, setMessage] = useState({ message: "" });

  function onNameChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function onSubjectChange(e) {
    e.preventDefault();
    setSubject(e.target.value);
    console.log(subject);
  }

  function onMsgChange(e) {
    e.preventDefault();
    setMessage(e.target.value);
  }

  return (
    <form className="w-full max-w-lg mx-auto  flex-grow ">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="full-name"
          >
            Full Name
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-full-name"
            type="text"
            placeholder="Jane Doe"
            onChange={onNameChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="subject"
            type="text"
            placeholder="Let's work together!"
            onChange={onSubjectChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Message
          </label>
          <textarea
            className=" no-resize appearance-none block w-full bg-whitetext-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
            onChange={onMsgChange}
          ></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            className="shadow bg-sky text-eagleGreen hover:bg-eagleGreen hover:text-slateGray focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
            type="button"
          >
            <a
              className="mailto"
              href={`mailto:bekigonzalez01@gmail.com?subject=${subject}&body=${message}`}
            >
              Send
            </a>
          </button>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
  );
}

export default ContactForm;
