import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success('Message sent successfully!');
        },
        (error) => {
          toast.error('Failed to send message. Please try again.');
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5> Get In Touch </h5>
      <h2> Contact Me </h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option_icon" />
            <h4>Emails</h4>
            <h5>mannannasir49@gmail.com</h5>
            <a href="mailto:mannannasir49@gmail.com" target="_blank">
              {" "}
              Send a message{" "}
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon" />
            <h4>WhatsApp</h4>
            <h5> Mannan Nasir </h5>
            <a
              href="https://api.whatsapp.com/send?phone=+923211156826"
              target="_blank"
            >
              {" "}
              Send a message{" "}
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            maxLength={50}
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            maxLength={50}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            maxLength={1000}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {" "}
            Send Message{" "}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
