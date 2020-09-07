import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/InputForm.css";
import db from "../firebase";
function InputForm() {
  const { register, handleSubmit, errors } = useForm();
  const [showtext, setshowtext] = useState(false);

  const onSubmit = (data, e) => {
    db.collection("inquiries").add({
      name: data.name,
      email: data.email,
      message: data.message,
    });
    setshowtext(!showtext);
    e.target.reset();
  };

  return (
    <div>
      <form className="Form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            ref={register({ required: "Name required" })}
          />
        </label>
        {errors.name && <p id="firstwarning">{errors.name.message}</p>}
        <label>
          <input
            placeholder="Email"
            type="email"
            name="email"
            ref={register({ required: true })}
          />
        </label>
        <label>
          <textarea
            placeholder="Message"
            type="text"
            name="message"
            ref={register({ required: "Message required" })}
          />
        </label>

        {errors.message && <p id="warning">{errors.message.message}</p>}

        <label id="LastLabel">
          <button>Submit</button>
        </label>
        {showtext && <div id="received">Message Received!</div>}
      </form>
    </div>
  );
}

export default InputForm;
