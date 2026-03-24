import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../styles/FaqPage.css';

gsap.registerPlugin(ScrollTrigger);

const tabs = ['Services', 'General', 'Account'];

const faqData: Record<string, { q: string; a: string }[]> = {
  Services: [
    { q: 'What industries do you specialize in?', a: 'We work across education, e-commerce, SaaS, healthcare, fintech, and tech startups. Our strategies are tailored to each industry\'s unique challenges.' },
    { q: 'How long does a typical project take?', a: 'Timelines vary — a marketing campaign launches in 2-4 weeks, while a full website or app build typically takes 8-16 weeks from discovery to deployment.' },
    { q: 'Do you offer free consultations?', a: 'Yes! We provide a complimentary initial consultation for all prospects, and free ongoing consultancy for educational institutions.' },
    { q: 'What makes BeyondEdge different from other agencies?', a: 'We combine marketing, development, and AI under one roof. No handoffs between agencies — one team, one vision, measurable results.' },
    { q: 'Can you work with our existing tech stack?', a: 'Absolutely. We integrate with your current tools and platforms, whether it\'s WordPress, Shopify, React, or custom backends.' },
    { q: 'Do you provide ongoing support after launch?', a: 'Yes. We offer maintenance plans, performance monitoring, and continuous optimization to ensure long-term success.' },
    { q: 'How do I get featured in the BeyondEdge Showcase?', a: 'If we\'ve worked together on a project and you\'re happy with the results, we\'d love to feature it. Just reach out to our team and we\'ll take care of the rest.' },
  ],
  General: [
    { q: 'What is BeyondEdge?', a: 'BeyondEdge is a full-service digital consultancy that combines marketing, development, and AI automation to help businesses scale smarter and faster.' },
    { q: 'Where are you located?', a: 'We have offices in San Francisco and London, but we work with clients globally across 12+ countries.' },
    { q: 'How do I get started?', a: 'Simply reach out via our contact page or book a free consultation. We\'ll discuss your goals and put together a tailored proposal.' },
    { q: 'Are you planning on hosting meetups?', a: 'Yes! We regularly host strategy workshops, networking events, and industry meetups. Follow us on social media or check our events page for upcoming dates.' },
    { q: 'Do you have case studies I can review?', a: 'Absolutely. Visit our Work page to see detailed case studies with real results from our client engagements.' },
  ],
  Account: [
    { q: 'How do I access my project dashboard?', a: 'Once onboarded, you\'ll receive login credentials for your dedicated client portal where you can track progress, review deliverables, and communicate with your team.' },
    { q: 'What is your pricing model?', a: 'We offer project-based pricing, monthly retainers, and custom packages. Every engagement starts with a detailed proposal tailored to your goals and budget.' },
    { q: 'Can I upgrade or change my plan?', a: 'Yes, you can adjust your engagement at any time. We\'re flexible and can scale services up or down based on your needs.' },
    { q: 'How do I cancel my subscription?', a: 'You can cancel your retainer with 30 days notice. We\'ll ensure a smooth handoff and provide all deliverables and documentation.' },
  ],
};

const FaqPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('Services');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const splits: SplitType[] = [];
    const ctx = gsap.context(() => {
      const titleEl = document.querySelector('.faqp-title') as HTMLElement;
      if (titleEl) {
        const split = new SplitType(titleEl, { types: 'chars' });
        splits.push(split);
        if (split.chars) {
          gsap.set(split.chars, { yPercent: 120, opacity: 0 });
          gsap.to(split.chars, { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.015, ease: 'power3.out', delay: 0.3 });
        }
      }
    }, pageRef);

    return () => { splits.forEach(s => s.revert()); ctx.revert(); };
  }, []);

  // Reset open FAQ when tab changes
  useEffect(() => { setOpenFaq(null); }, [activeTab]);

  const currentFaqs = faqData[activeTab] || [];

  return (
    <div className="page faqp-page" ref={pageRef}>
      <section className="faqp-section">
        <div className="faqp-header">
          <div className="faqp-header__left">
            <h1 className="faqp-title">Got questions?<br/>We've got answers.</h1>
          </div>
        </div>

        {/* Tab buttons */}
        <div className="faqp-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`faqp-tab${activeTab === tab ? ' faqp-tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="faqp-list">
          {currentFaqs.map((faq, i) => (
            <div key={`${activeTab}-${i}`} className={`faqp-item${openFaq === i ? ' faqp-item--open' : ''}`}>
              <button className="faqp-item__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <span className="faqp-item__icon">{openFaq === i ? '−' : '+'}</span>
              </button>
              <div className="faqp-item__a">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
