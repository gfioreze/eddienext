const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="about-me-container">
        <div className="about-me-text">
          <h1 className="title-1">Hi, I&apos;m Eddie!</h1>
          <h1 className="subtitle">I am a creator based in Manchester</h1>
          <h1 className="subsubtitle">
            I specialise in sports media and have worked with organisations from
            grassroots to elite and everywhere in-between
          </h1>
          <h1 className="smallest-title">
            <span>*</span> Some of my clients include Glasgow Rangers, Oldham
            Athletic and The Coaching Manual
          </h1>
        </div>
        <img
          src="/assets/profile-picture.jpg"
          alt=""
          className="about-me__img"
        />
      </div>
    </section>
  );
};

export default AboutMe;
