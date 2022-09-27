import React from "react";
const AdoptionJourney = () => {
  return (
    <section id="adoption-journey">
      <h2 className="fw-bold display-6 text-secondary text-center">
        Your Pet Adoption Journey With ThePetNest
      </h2>
      <div className="container-fluid">
        <div className="row my-lg-5">
          <div className="col-lg-6 adoption-journey">
            <img
              src="https://i.ibb.co/WzgQKwD/adopt-me-pet-02032021.jpg"
              alt="adopt me"
            />
          </div>
          <div className="col-lg-6">
            <div className="row my-lg-4">
              <div className="col-lg-2 text-center mt-lg-4">
                <img
                  src="https://img.icons8.com/external-soft-fill-juicy-fish/64/000000/external-quick-big-data-soft-fill-soft-fill-juicy-fish.png"
                  alt="quick big"
                />
              </div>
              <div className="col-lg-10 mt-lg-4">
                <h5 className="fw-bold text-secondary">Search Pet</h5>
                <p className="text-secondary me-lg-5">
                  Adopt a dog or cat who's right for you. Simply enter your city
                  above to start your search.
                </p>
              </div>
              <div className="col-lg-2 text-center mt-lg-4">
                <img
                  src="https://img.icons8.com/external-flat-icons-inmotus-design/64/000000/external-247-Help-charity-help-flat-icons-inmotus-design.png"
                  alt="help icon"
                />
              </div>
              <div className="col-lg-10 mt-lg-4">
                <h5 className="fw-bold text-secondary">Connect</h5>
                <p className="text-secondary me-lg-5">
                  Once you find a pet, click "show number" to get contact info
                  for their pet parent or rescue. Contact them to learn more
                  about how to meet and adopt the pet.
                </p>
              </div>
              <div className="col-lg-2 text-center mt-lg-4">
                <img
                  src="https://img.icons8.com/stickers/64/000000/dog-house.png"
                  alt="dog house"
                />
              </div>
              <div className="col-lg-10 mt-lg-4">
                <h5 className="fw-bold text-secondary">AdoptLove</h5>
                <p className="text-secondary me-lg-5">
                  The rescue or pet parents will walk you through their adoption
                  process. Prepare your home for the arrival of your fur baby to
                  help them adjust to their new family.
                </p>
              </div>
              <div className="col-lg-2 text-center mt-lg-4">
                <img
                  src="https://img.icons8.com/external-mixed-line-solid-yogi-aprelliyanto/64/000000/external-vaccination-pet-shop-mixed-line-solid-yogi-aprelliyanto.png"
                  alt="vaccination"
                />
              </div>
              <div className="col-lg-10 mt-lg-4">
                <h5 className="fw-bold text-secondary">
                  Free Vet Consultation
                </h5>
                <p className="text-secondary me-lg-5">
                  ThePetNest will help your pet to settle down in its new home,
                  once you complete the Adoption journey reach out to us for
                  free vet consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdoptionJourney;
