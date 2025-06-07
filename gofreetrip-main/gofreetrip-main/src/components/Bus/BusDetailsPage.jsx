import React, { useState } from "react";
import BusSlider from "./BusSlider";
import { FaBus } from "react-icons/fa";
const BusDetailsPage = () => {
  const thumbs = ["/download.jpg", "/download.jpg", "/download.jpg"];
  const largeImages = ["/download.jpg", "/download.jpg", "/download.jpg"];
  const galleryImages = ["/download.jpg", "/download.jpg", "/download.jpg"];

  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState({
    field_1: true,
    field_2: false,
    field_3: false,
    field_4: false,
  });

  const toggleAccordion = (field) => {
    setOpenAccordion((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const tabs = [
    { label: "Policies", id: "field_1" },
    { label: "Description", id: "field_2" },
    { label: "Amenities", id: "field_3" },
    { label: "Pickup & Drop", id: "field_4" },
    { label: "Gallery", id: "field_5" },
    { label: "FAQ", id: "field_6" },
  ];

  return (
    <div className="col-xl-8">
      <div className="card p-4 border-0 mb-4">
        <h4>
          {" "}
          <FaBus className="me-2" size={24}></FaBus> ARV Bus
        </h4>
      </div>
      <div className="service-wrap border-0 mb-4">
        <BusSlider thumbs={thumbs} largeImages={largeImages} />
      </div>

      {/* Tab Navigation */}
      <ul className="active-tab-list d-flex align-items-center flex-wrap mb-4">
        {tabs.map((tab, index) => (
          <li key={index}>
            <a
              href={`#${tab.id}`}
              className={`me-3 btn ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Accordion Sections */}
      <div className="accordion custom-accordion">
        {/* Policies */}
        <div className="accordion-item mb-4" id="field_1">
          <div className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              onClick={() => toggleAccordion("field_1")}
            >
              Policies
            </button>
          </div>
          <div
            className={`accordion-collapse collapse ${
              openAccordion.field_1 ? "show" : ""
            }`}
          >
            <div className="accordion-body">
              <p>Some policies info goes here...</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="accordion-item mb-4" id="field_2">
          <div className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              onClick={() => toggleAccordion("field_2")}
            >
              Description
            </button>
          </div>
          <div
            className={`accordion-collapse collapse ${
              openAccordion.field_2 ? "show" : ""
            }`}
          >
            <div className="accordion-body">
              <p className="mb-2">
                Kicking off on April 1, 2025, the "DreamsTour" will take Luna to
                major cities across North America and Europe...
              </p>
              <div className="read-more">
                <div className="more-text">
                  <p>
                    Each concert will showcase her unique blend of pop and
                    ethereal soundscapes...
                  </p>
                </div>
                <a
                  href="#"
                  className="fs-14 fw-medium more-link text-decoration-underline mb-2"
                >
                  Show More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="accordion-item mb-4" id="field_3">
          <div className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              onClick={() => toggleAccordion("field_3")}
            >
              Amenities
            </button>
          </div>
          <div
            className={`accordion-collapse collapse ${
              openAccordion.field_3 ? "show" : ""
            }`}
          >
            <div className="accordion-body">
              <div className="row gy-3">
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex align-items-center">
                    <span className="avatar avatar-md bg-primary-transparent rounded-circle me-2">
                      <i className="isax isax-gps fs-16"></i>
                    </span>
                    <p>GPS Navigation Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pickup & Drop */}
        <div className="accordion-item mb-4" id="field_4">
          <div className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              onClick={() => toggleAccordion("field_4")}
            >
              Pickup & Drop
            </button>
          </div>
          <div
            className={`accordion-collapse collapse ${
              openAccordion.field_4 ? "show" : ""
            }`}
          >
            <div className="accordion-body">
              <p>Pickup & Drop locations and timings listed here...</p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="accordion-item mb-4" id="field_5">
          <div className="accordion-header">
            <button className="accordion-button" type="button">
              Gallery
            </button>
          </div>
          <div className="accordion-collapse collapse show">
            <div className="accordion-body">
              <div className="tour-gallery-slider">
                {galleryImages.map((img, i) => (
                  <a
                    className="galley-wrap me-2"
                    href={img}
                    data-fancybox="gallery"
                    key={i}
                  >
                    <img
                      src={img}
                      style={{ width: "200px" }}
                      alt={`Gallery ${i}`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="accordion-item mb-4" id="field_6">
          <div className="accordion-header">
            <button className="accordion-button" type="button">
              Frequently Asked Questions
            </button>
          </div>
          <div className="accordion-collapse collapse show">
            <div className="accordion-body">
              <div className="accordion faq-accordion" id="accordionFaq">
                {[
                  "How old do I need to be to rent a car?",
                  "What documents do I need to rent a car?",
                  "What types of vehicles are available for rent?",
                ].map((q, i) => (
                  <div className="accordion-item mb-2" key={i}>
                    <div className="accordion-header">
                      <button
                        className={`accordion-button fw-medium ${
                          i > 0 ? "collapsed" : ""
                        }`}
                        type="button"
                      >
                        {q}
                      </button>
                    </div>
                    <div
                      className={`accordion-collapse collapse ${
                        i === 0 ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          We offer a diverse fleet of vehicles to suit every
                          need...
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusDetailsPage;
