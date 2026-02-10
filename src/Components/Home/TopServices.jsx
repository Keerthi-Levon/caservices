import {
  RiUserLine,
  RiBuilding2Line,
  RiTeamLine,
  RiHandHeartLine,
  RiBankLine,
  RiRocketLine,
} from "react-icons/ri";

const services = [
  {
    title: "One Person Company (OPC) Registration",
    desc:
      "Are you a solo founder? OPC offers legal recognition while allowing full control of your business.",
    Icon: RiUserLine,
    sections: [
      {
        heading: "We take care of:",
        items: [
          "Nominee appointment",
          "Single-director compliance",
          "OPC incorporation",
          "ROC filings",
        ],
      },
    ],
  },
  {
    title: "Private Limited Company (Pvt Ltd) Registration",
    desc:
      "Ideal for startups and growing businesses planning to raise funding and scale operations.",
    Icon: RiBuilding2Line,
    sections: [
      {
        heading: "Includes:",
        items: [
          "DSC & DIN for directors",
          "Company name reservation",
          "MOA & AOA drafting",
          "ROC registration",
          "PAN, TAN & GST support",
        ],
      },
    ],
  },
  {
    title: "Limited Liability Partnership (LLP) Registration",
    desc:
      "Perfect for small teams seeking operational flexibility with limited liability protection.",
    Icon: RiTeamLine,
    sections: [
      {
        heading: "Our LLP Services:",
        items: [
          "LLP name approval",
          "LLP agreement drafting",
          "MCA registration",
          "Compliance setup",
        ],
      },
    ],
  },
  {
    title: "Section 8 Company / NGO Registration",
    desc:
      "Want to create social impact? We help register Section 8 companies for charitable purposes.",
    Icon: RiHandHeartLine,
    sections: [
      {
        heading: "We assist with:",
        items: [
          "Name approval under Rule 8",
          "Drafting objectives & MOA",
          "ROC & RD filings",
          "12A & 80G registration",
        ],
      },
    ],
  },
  {
    title: "Public Limited Company Registration",
    desc:
      "For businesses planning large-scale operations or public funding with regulatory compliance.",
    Icon: RiBankLine,
    sections: [
      {
        heading: "End-to-end Support:",
        items: [
          "Share capital structuring",
          "SEBI & MCA compliance",
          "Regulatory filings",
          "Public company governance",
        ],
      },
    ],
  },
  {
    title: "Startup Registration & Advisory",
    desc:
      "Launch your startup quickly with expert registration, compliance, and advisory support.",
    Icon: RiRocketLine,
    sections: [
      {
        heading: "Startup Services:",
        items: [
          "Startup India registration",
          "Business structure advisory",
          "Legal & compliance planning",
          "Ongoing support",
        ],
      },
    ],
  },
];

const TopServices = () => {
  return (
    <section className="topService-section">
      <div className="container">
        {/* HEADER */}
        <div className="text-content text-center mb-5">
          <h2 className="text-content-h2">
            Our <span>Company Registration</span> Services
          </h2>
          <p className="text-content-para">
            We help you set up the right legal entity based on your goals, team
            size, and long-term business plans.
          </p>
        </div>

        {/* CARDS */}
        <div className="row">
          {services.map(({ title, desc, Icon, sections }, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="topService-card mt-4">
                <div className="icon-wrapper">
                  <Icon className="service-icon"  />
                </div>

                <h5 className="service-card-h5">{title}</h5>
                <p className="service-desc">{desc}</p>

                {sections.map((section, i) => (
                  <div key={i} className="service-extra mt-3">
                    <strong className="service-strong">{section.heading}</strong>
                    <ul className="service-list">
                      {section.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopServices;
