import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <h3>Biography</h3>
        <p>Who we are</p>
        <p>
          ZeeCare Medical Institute is proud to offer a wide range of services,
          from routine check-ups and screenings to specialized treatments and
          surgeries. Our team of healthcare professionals includes doctors,
          nurses, and support staff, all dedicated to your health and
          well-being. We believe in the power of preventive care and work
          closely with our patients to create personalized health plans. At
          ZeeCare, we're not just your healthcare provider, we're your partner
          in health.
        </p>
      </div>
    </div>
  );
};

export default Biography;
