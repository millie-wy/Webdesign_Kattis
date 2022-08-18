import "./Stylesheets/Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="page-title">Contact Us</h2>
      <form id="contact-form">
        <label className="form-label green">How can we help you?</label>
        <select defaultValue={"default"}>
          <option disabled value="default" />
          <option value="products">Products</option>
          <option value="membership">Membership</option>
          <option value="payment">Payment</option>
          <option value="delivery">Delivery</option>
          <option value="other">Other</option>
        </select>

        <div className="name-inputs">
          <label htmlFor="firstname" className="form-label name-parts">
            Firstname
            <input type="text" id="firstname" name="firstname" />
          </label>
          <label htmlFor="lastname" className="form-label name-parts">
            Lastname
            <input type="text" id="lastname" name="lastname" />
          </label>
        </div>

        <label htmlFor="email" className="form-label">
          Email
          <input type="text" id="email" name="email" />
        </label>

        <label htmlFor="message" className="form-label">
          Message
          <textarea type="text" id="message" name="message" />
        </label>

        <button className="submit-button">SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
