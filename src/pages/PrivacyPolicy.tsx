import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LegalPage.css';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <button className="legal-page__back" onClick={() => navigate('/')}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Back to Home
      </button>

      <h1 className="legal-page__title">Privacy Policy</h1>
      <p className="legal-page__updated">Last updated: March 1, 2026</p>

      <div className="legal-page__section">
        <h2>1. Introduction</h2>
        <p>
          BeyondEdge ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
        <p>
          By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not access our website.
        </p>
      </div>

      <div className="legal-page__section">
        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Personal identification information (name, email address, phone number)</li>
          <li>Business information (company name, job title, industry)</li>
          <li>Technical data (IP address, browser type, device information)</li>
          <li>Usage data (pages visited, time spent, click patterns)</li>
          <li>Communication data (messages, inquiries, feedback submitted through our forms)</li>
        </ul>
      </div>

      <div className="legal-page__section">
        <h2>3. How We Use Your Information</h2>
        <p>We use the collected information for the following purposes:</p>
        <ul>
          <li>To provide, maintain, and improve our services</li>
          <li>To process and respond to your inquiries and requests</li>
          <li>To send you newsletters, marketing updates, and service-related communications</li>
          <li>To analyze website usage patterns and optimize user experience</li>
          <li>To detect, prevent, and address technical issues or security threats</li>
          <li>To comply with applicable legal obligations</li>
        </ul>
      </div>

      <div className="legal-page__section">
        <h2>4. Data Sharing & Disclosure</h2>
        <p>
          We do not sell, rent, or trade your personal information to third parties. We may share your data with:
        </p>
        <ul>
          <li>Trusted service providers who assist in operating our website and services</li>
          <li>Analytics partners (e.g., Google Analytics) to help us understand usage patterns</li>
          <li>Legal authorities when required by law or to protect our rights</li>
        </ul>
      </div>

      <div className="legal-page__section">
        <h2>5. Cookies & Tracking Technologies</h2>
        <p>
          Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies help us understand how you interact with our site, remember your preferences, and deliver relevant content.
        </p>
        <p>
          You can control cookie settings through your browser preferences. Note that disabling cookies may affect the functionality of certain features on our website.
        </p>
      </div>

      <div className="legal-page__section">
        <h2>6. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security assessments. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
        </p>
      </div>

      <div className="legal-page__section">
        <h2>7. Your Rights</h2>
        <p>Depending on your location, you may have the following rights:</p>
        <ul>
          <li>Access and review the personal data we hold about you</li>
          <li>Request correction or deletion of your personal data</li>
          <li>Opt out of marketing communications at any time</li>
          <li>Request data portability in a commonly used format</li>
          <li>Lodge a complaint with a relevant data protection authority</li>
        </ul>
      </div>

      <div className="legal-page__section">
        <h2>8. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
        </p>
      </div>

      <div className="legal-page__section">
        <h2>9. Changes to This Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
        </p>
      </div>

      <div className="legal-page__contact">
        <h3>Questions About Privacy?</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:privacy@beyondedge.com">privacy@beyondedge.com</a> or call us at +1 (555) 123-4567.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
