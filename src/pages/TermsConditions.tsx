import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LegalPage.css';

const TermsConditions = () => {
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

      <h1 className="legal-page__title">Terms & Conditions</h1>
      <p className="legal-page__updated">Last updated: March 1, 2026</p>

      <div className="legal-page__section">
        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing or using the BeyondEdge website and services, you agree to be bound by these Terms & Conditions. If you do not agree to all the terms, you may not access or use our services.
        </p>
      </div>

      <div className="legal-page__section">
        <h2>2. Services</h2>
        <p>
          BeyondEdge provides digital consultancy services including, but not limited to, digital marketing strategy, web and mobile development, AI and automation solutions, and education and startup consultancy. The specific scope and deliverables of any project will be outlined in a separate service agreement.
        </p>
      </div>

      <div className="legal-page__section">
        <h2>3. Intellectual Property</h2>
        <p>
          All content on this website — including text, graphics, logos, icons, images, and software — is the property of BeyondEdge or its content suppliers and is protected by international copyright laws.
        </p>
        <ul>
          <li>You may not reproduce, distribute, or create derivative works without our written permission</li>
          <li>Client deliverables become the client's property upon full payment as specified in individual contracts</li>
          <li>BeyondEdge retains the right to showcase completed work in portfolios unless otherwise agreed</li>
        </ul>
      </div>

      <div className="legal-page__section">
        <h2>4. User Responsibilities</h2>
        <p>When using our website and services, you agree to:</p>
        <ul>
          <li>Provide accurate and complete information in all forms and communications</li>
          <li>Not use our services for any unlawful or prohibited purpose</li>
          <li>Not attempt to interfere with or disrupt the operation of our website</li>
          <li>Not impersonate any person or entity or misrepresent your affiliation</li>
          <li>Comply with all applicable local, national, and international laws</li>
        </ul>
      </div>

      <div className="legal-page__section">
        <h2>5. Payment Terms</h2>
        <p>
          Payment terms for our services are outlined in individual project proposals and contracts. General terms include:
        </p>
        <ul>
          <li>Payments are due as specified in the project agreement</li>
          <li>Late payments may incur additional fees as outlined in the contract</li>
          <li>All prices are exclusive of applicable taxes unless stated otherwise</li>
          <li>Refund eligibility is determined on a case-by-case basis per our refund policy</li>
        </ul>
      </div>

      <div className="legal-page__section">
        <h2>6. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, BeyondEdge shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability for any claim shall not exceed the amount you paid for the specific service giving rise to the claim.
        </p>
      </div>

      <div className="legal-page__section">
        <h2>7. Confidentiality</h2>
        <p>
          Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of a project. This obligation continues for a period of two years after the termination of any service agreement.
        </p>
      </div>

      <div className="legal-page__section">
        <h2>8. Termination</h2>
        <p>
          Either party may terminate a service engagement with written notice as specified in the project agreement. Upon termination:
        </p>
        <ul>
          <li>All outstanding payments become immediately due</li>
          <li>Completed deliverables will be transferred to the client upon payment</li>
          <li>Both parties retain the right to use non-confidential information</li>
        </ul>
      </div>

      <div className="legal-page__section">
        <h2>9. Dispute Resolution</h2>
        <p>
          Any disputes arising from these terms or our services shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration in accordance with the rules of the American Arbitration Association, conducted in San Francisco, California.
        </p>
      </div>

      <div className="legal-page__section">
        <h2>10. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms & Conditions at any time. Changes become effective immediately upon posting to this page. Continued use of our services constitutes acceptance of the updated terms.
        </p>
      </div>

      <div className="legal-page__contact">
        <h3>Questions About These Terms?</h3>
        <p>
          If you have any questions about these Terms & Conditions, please reach out to us at <a href="mailto:legal@beyondedge.com">legal@beyondedge.com</a> or call us at +1 (555) 123-4567.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
