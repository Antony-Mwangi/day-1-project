import "../styles/contact.css";

export default function ContactPage() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="subtitle">We’d love to hear from you! Reach out with any questions.</p>

      <div className="contact-grid">

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Campus Information</h2>
          <p><strong>Address:</strong> Nairobi University Road, Nairobi, Kenya</p>
          <p><strong>Phone:</strong> +254 712 345 678</p>
          <p><strong>Email:</strong> info@campusconnect.ac.ke</p>

          <h3>Campus Hours</h3>
          <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
          <p>Saturday: 9:00 AM – 1:00 PM</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <h2>Send a Message</h2>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>

      {/* Google Map */}
      <div className="map-embed">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31850.85321581383!2d36.8219465!3d-1.2863899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6c9b93fd3%3A0x8a9ef6e7!2sUniversity%20of%20Nairobi!5e0!3m2!1sen!2ske!4v1733600000000"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
