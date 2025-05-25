import React from "react";
import SectionHeading from "./section-heading";

const PrivacyPolicy = () => {
  return (
    <section className="py-24 mt-10 mb-8 pb-10 px-8 rounded-xl ">
      <div className="container-custom">
        <SectionHeading
          title="Privacy Policy"
          subtitle="Effective Date: 01-05-2025"
          center
        />

        <div className="max-w-4xl mx-auto">
          <div className="premium-card p-8 space-y-6">
            <p className="text-muted-foreground">Effective Date: 01-05-2025</p>
            <p className="text-muted-foreground">
              BackersStage (“we,” “our,” “us”) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website, use our platform, or participate in our events. Please
              read this policy carefully to understand our views and practices
              regarding your personal data.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "1. Information We Collect",
                  content: [
                    {
                      subtitle: "a. Personal Information:",
                      text: "We collect information that identifies you personally, such as your name, email address, phone number, company, job title, and any other information you provide during registration, communication, or use of our services.",
                    },
                    {
                      subtitle: "b. Technical Data:",
                      text: "This includes your IP address, browser type, operating system, device identifiers, and usage data collected automatically through cookies, log files, and other tracking technologies when you visit our website or use our services.",
                    },
                    {
                      subtitle: "c. Event Participation Data:",
                      text: "Details related to your participation in events, including registration information, pitch submissions, networking activities, and communication with other users.",
                    },
                  ],
                },
                {
                  title: "2. How We Use Your Information",
                  content: [
                    {
                      subtitle: "",
                      text: "We use your information to:",
                    },
                    {
                      subtitle: "",
                      text: "• Provide, operate, and maintain our services and events.",
                    },
                    {
                      subtitle: "",
                      text: "• Facilitate communications between founders, investors, partners, and participants.",
                    },
                    {
                      subtitle: "",
                      text: "• Process registrations, applications, and submissions.",
                    },
                    {
                      subtitle: "",
                      text: "• Improve and personalize your experience.",
                    },
                    {
                      subtitle: "",
                      text: "• Send important updates, event notifications, and marketing communications (with your consent).",
                    },
                    {
                      subtitle: "",
                      text: "• Comply with legal obligations and protect our rights.",
                    },
                  ],
                },
                {
                  title: "3. Sharing Your Information",
                  content: [
                    {
                      subtitle: "",
                      text: "We do not sell your personal data. We may share your information with:",
                    },
                    {
                      subtitle: "• Service Providers:",
                      text: "Third-party vendors who support our platform, events, and marketing efforts.",
                    },
                    {
                      subtitle: "• Partners and Sponsors:",
                      text: "With your consent or as necessary to facilitate partnerships and event participation.",
                    },
                    {
                      subtitle: "• Legal Authorities:",
                      text: "When required by law or to protect our legal rights.",
                    },
                  ],
                },
                {
                  title: "4. Cookies and Tracking Technologies",
                  content:
                    "We use cookies and similar tracking technologies to enhance your experience, analyze usage, and provide relevant content. You can control cookies through your browser settings but disabling some cookies may affect website functionality.",
                },
                {
                  title: "5. Data Security",
                  content:
                    "We implement reasonable technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.",
                },
                {
                  title: "6. Data Retention",
                  content:
                    "We retain your personal information as long as necessary to fulfill the purposes described in this policy or as required by law.",
                },
                {
                  title: "7. Your Rights",
                  content: [
                    {
                      subtitle: "",
                      text: "Depending on your location, you may have the right to:",
                    },
                    {
                      subtitle: "",
                      text: "• Access, correct, or delete your personal data.",
                    },
                    {
                      subtitle: "",
                      text: "• Object to or restrict certain processing of your data.",
                    },
                    {
                      subtitle: "",
                      text: "• Withdraw consent to marketing communications.",
                    },
                    {
                      subtitle: "",
                      text: "• Request data portability.",
                    },
                    {
                      subtitle: "",
                      text: "To exercise these rights, please contact us at atharv@backersstage.com.",
                    },
                  ],
                },
                {
                  title: "8. Children’s Privacy",
                  content:
                    "Our services are not intended for individuals under the age of 16. We do not knowingly collect personal data from minors.",
                },
                {
                  title: "9. Changes to This Policy",
                  content:
                    "We may update this Privacy Policy periodically. We will notify you of any significant changes via our website or email.",
                },
                {
                  title: "10. Contact Us",
                  content:
                    "If you have questions about this Privacy Policy or our data practices, please contact us at: partner@backersstage.com",
                },
                {
                  title: "11. Changes to Terms",
                  content:
                    "We may update these Terms from time to time. Continued use of our services after changes indicates your acceptance of the revised Terms.",
                },
                {
                  title: "12. Contact Information",
                  content:
                    "If you have questions about these Terms, please contact us at: Email: partner@backersstage.com",
                },
              ].map((section, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="heading-sm">{section.title}</h3>
                  {Array.isArray(section.content) ? (
                    <div className="space-y-2 pl-4">
                      {section.content.map((item, j) => (
                        <div key={j}>
                          {item.subtitle && (
                            <p className="font-medium">{item.subtitle}</p>
                          )}
                          <p className="text-muted-foreground">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">{section.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
