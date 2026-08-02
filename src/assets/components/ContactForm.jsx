import { useState } from "react";
import Topic from "../components/Topic";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    class: "",
    grade: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const clearForm = () =>
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      
      message: "",
    });

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="h-auto flex justify-start flex-col items-center gap-10 p-5">
      <Topic
            title="Let's Get In Touch"
            subtitle=" We’re here to help you find your perfect rhythm. Get in touch and start your musical journey today!"
          />
      <div className="w-full max-w-3xl bg-white  p-5 sm:p-8">
        <form onSubmit={submit} className="space-y-5">

          {/* Grid: 1 column mobile, 2 columns desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-[#ABABAB]">

            <Field label="Your First Name*" >
              <input name="firstName" onChange={handleChange}
                placeholder="Enter First Name" className={inputStyle}/>
            </Field>

            <Field label="Your Last Name*" >
              <input name="lastName" onChange={handleChange}
                placeholder="Enter Last Name" className={inputStyle}/>
            </Field>

            <Field label="Email Address*" >
              <input name="email" type="email" onChange={handleChange}
                placeholder="Enter Email Address" className={inputStyle}/>
            </Field>

            <Field label="Your Mobile Number">
              <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-400">
                <span className="text-sm mr-2">🇱🇰</span>
                <input name="phone" onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full outline-none"/>
              </div>
            </Field>

            

          </div>

          {/* Message full width */}
          <Field label="Message*">
            <textarea
              name="message"
              rows={5}
              onChange={handleChange}
              placeholder="Enter your message here"
              className={inputStyle}
            />
          </Field>

          {/* Buttons — mobile left, desktop right */}
          <div className="flex gap-3 pt-2 md:justify-end">
            <button
              type="button"
              onClick={clearForm}
              className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50"
            >
              Clear
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-yellow-400 rounded-lg text-sm font-medium hover:bg-yellow-500"
            >
              Send
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

/* Reusable field wrapper */
function Field({ label, children }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      {children}
    </div>
  );
}

const inputStyle =
  "w-full border border-[#ABABAB]  color-[#ABABAB] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 p-3";
