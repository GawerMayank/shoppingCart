import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-grow justify-around items-center">
          <div className=" bg-rose-50 w-1/3 rounded p-3">
            <h1 className="text-center font-semibold text-3xl text-rose-700">
              Contact US
            </h1>
            <p className="text-center">(Submit your details here)</p>
            <div className="flex flex-col space-y-2 mt-4 mb-4">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-1/2 border rounded px-1"
              />
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                placeholder="Email Address"
                className="w-1/2 border rounded px-1"
              />
              <label htmlFor="number">Number:</label>
              <input
                type="text"
                placeholder="Phone"
                className="w-1/2 border rounded px-1"
              />
              <label htmlFor="query">Query:</label>
              <textarea
                name=""
                placeholder="Message..."
                className="rounded border px-1"
                rows={5}
              ></textarea>
              <div></div>
              <div className="flex justify-center">
                <button type="submit" className="bg-rose-400 w-fit p-1 rounded">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="bg-rose-50 w-1/3 p-5 flex flex-col gap-3">
            <div>
              <p className="text-3xl text-rose-700">General Inquiries</p>
              <p className="text-lg">
                Have a question... or just want to say hello? Get in touch:
              </p>
              <p className="text-rose-500 text-lg">info@eshopping.com</p>
              <p className="text-rose-500 text-lg">888-000-44-44</p>
            </div>
            <div>
              <p className="text-3xl text-rose-700">Our Location</p>
              <p className="text-lg">73 Church Street Guilford,</p>
              <p className="text-lg">CT 06437</p>
              <p className=" text-rose-500 text-lg">GET DIRECTIONS</p>
            </div>
            <div>
              <p className="text-3xl text-rose-700">Our newsletter</p>
              <p className="text-lg">
                Stay up to date with our latest newsletter:
              </p>
              <p className="text-lg text-rose-500">Sign Up here</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
