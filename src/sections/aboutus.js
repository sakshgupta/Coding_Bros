import React from "react";

function aboutus() {
  return (
    <section id="aboutus">
      <div className="container-fluid-form2 row">
        <div className="col-6 about-text">
          <h1>About PAW </h1>
          <p>
            PAW provide shelter and healthcare to dogs that needs our help. We
            believe animals are people too, like us they have the right to life,
            liberty and to live a happy life. Our shelter-cum-healthcare is
            anticipated to work for 24x7 that would give, rescue, proper care,
            home, food, playing time, serve as a holding centre for animals of
            cruelty cases and various other activities. So our company decided
            to make a website which will take care of these dogs and give
            shelter to them via the website, targeting a large audience.
          </p>
        </div>
        <div className="about_image col-6">
          <img src="/img/dogs/aboutus.png" width={250} alt="Dog"></img>
        </div>
      </div>
    </section>
  );
}

export default aboutus;
