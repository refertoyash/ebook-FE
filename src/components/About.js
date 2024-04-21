import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const About = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2u4sag2",
        "template_l1d3w6b",
        form.current,
        "sL4Ghu4J8pQtbY8s_"
      )
      .then(
        (result) => {
          props.showAlert("Message sent successfully", "success");
          console.log(result.text);
        },
        (error) => {
          props.showAlert("Not Sent", "danger");
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h3>eMemobook</h3>
      is an online project designed to provide users with a simple and effective
      way to keep track of their important tasks and notes. With eMemobook,
      users can easily create, update, and delete notes as needed, making it an
      ideal tool for anyone looking to stay organized and on top of their to-do
      lists.
      <hr />
      Built using a modern tech stack that includes{" "}
      <strong>MongoDB, Express, React, Node.js, and MaterialUI</strong>,
      eMemobook is both powerful and user-friendly. The app has intuitive
      interface makes it easy to get started, and its robust features ensure
      that users can quickly and easily manage their notes.
      <hr />
      To use eMemobook, users must first create an account by{" "}
      <i>signing up or logging in</i>. Once they have logged in, they can start
      creating notes right away. Whether they need to jot down a quick reminder
      or keep track of a longer to-do list, eMemobook makes it easy to stay
      organized and on track.
      <hr />
      Overall, eMemobook is an excellent tool for anyone looking to simplify
      their life and stay on top of their tasks and to-do lists. With its
      powerful features and easy-to-use interface, it is sure to be a valuable
      asset for anyone looking to boost their productivity and get more done.
      <hr />
      <p>
        With that said, please enjoy using eMemobook and let us know if you have
        any questions or feedback!
      </p>
      <h3>FeedBack Form</h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label htmlFor="user_name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="user_name"
            id="user_name"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user_email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="user_email"
            id="user_email"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Write your Message
          </label>
          <textarea
            className="form-control"
            name="message"
            id="message"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            type="submit"
            value="Send"
            className="btn btn-primary outline"
          >
            Send Your Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default About;
