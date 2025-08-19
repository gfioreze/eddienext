const GetInTouch = () => {
    return(
        <section id="get-in-touch">
        <div className="get-in-touch">
          <form action="" method="post" className="get-in-touch-form">
            <label htmlFor="name_input" className="name_input">
              Name:
            </label>
            <input type="text" name="name" id="name_input" required />

            <label htmlFor="email_input" className="email_input">
              Email:
            </label>
            <input type="email" name="email" id="email_input" required />

            <label htmlFor="message_input" className="message_input">
              Message:
            </label>
            <textarea name="message" id="message_input" rows="5" required></textarea>

            <button type="submit" className="form-btn">
              Send
            </button>
          </form>
        </div>
      </section>
    );
};

export default GetInTouch;