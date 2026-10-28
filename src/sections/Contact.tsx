import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { GithubIcon } from '../components/icons/GithubIcon';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback if clipboard API is restricted
      const textArea = document.createElement('textarea');
      textArea.value = siteConfig.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section className="editorial-section contact-section" id="contact" aria-label="Contact Daniel Danuwar">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">06 // DIRECT DISPATCH</span>
          <h2 className="section-title">Have a project or opportunity in mind?</h2>
          <p className="section-subtitle">
            Whether you have a relevant software development opportunity, a technical problem to solve, or a collaborative project, I'd like to hear about it.
          </p>
        </div>

        {/* Contact Dispatch Layout */}
        <div className="contact-editorial-grid">
          {/* Main Dispatch Card */}
          <div className="contact-card-primary">
            <div className="contact-card-top font-mono text-xs">
              <span className="accent-text">CHANNEL: DIRECT EMAIL</span>
              <span className="text-muted">OPEN TO NEW IDEAS</span>
            </div>

            <div className="contact-main-body">
              <span className="email-label font-mono text-xs text-muted">PRIMARY DISPATCH INBOX:</span>
              <div className="email-display-wrap">
                <span className="email-address-text font-mono">{siteConfig.email}</span>
              </div>

              {/* Action Buttons */}
              <div className="contact-actions-row">
                <a
                  href={`mailto:${siteConfig.email}?subject=Hello%20Daniel%20%E2%80%94%20Inquiry%20from%20Digital%20HQ`}
                  className="btn-primary"
                  id="contact-send-email-btn"
                >
                  <Mail size={15} />
                  <span>Send direct email</span>
                  <ArrowUpRight size={14} />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="btn-secondary copy-email-btn"
                  id="contact-copy-email-btn"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={15} className="accent-text" />
                      <span className="accent-text">Copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>Copy email address</span>
                    </>
                  )}
                </button>
              </div>

              {copied && (
                <div className="copy-feedback-banner font-mono text-xs">
                  <Check size={12} className="accent-text" />
                  <span>{siteConfig.email} successfully copied to your clipboard.</span>
                </div>
              )}
            </div>

            <div className="contact-card-footer font-mono text-xs text-muted">
              <span>● No automated spam bots or third-party tracking scripts. Hand-reviewed personally.</span>
            </div>
          </div>

          {/* Secondary Profiles & System Meta */}
          <div className="contact-card-secondary">
            <div className="network-card">
              <div className="network-header font-mono text-xs">
                <span className="text-muted">REPOSITORIES &amp; CODE</span>
              </div>
              <div className="network-content">
                <div className="network-item">
                  <div className="network-info">
                    <GithubIcon size={18} className="accent-text" />
                    <div>
                      <h4 className="network-name">GitHub</h4>
                      <p className="network-sub font-mono text-xs text-muted">Open-source repositories &amp; experiments</p>
                    </div>
                  </div>
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="network-link-btn font-mono text-xs"
                    aria-label="Visit Daniel's GitHub profile"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Timezone & Presence Box */}
            <div className="presence-card font-mono text-xs">
              <div className="presence-row">
                <span className="text-muted">LOCAL TIMEZONE:</span>
                <span className="presence-val">{siteConfig.timezoneLabel}</span>
              </div>
              <div className="presence-row">
                <span className="text-muted">RESPONSE TIME:</span>
                <span className="presence-val">Typically within 24–48 hours</span>
              </div>
              <div className="presence-row">
                <span className="text-muted">PREFERRED MEDIUM:</span>
                <span className="presence-val accent-text">Email with concise context</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
