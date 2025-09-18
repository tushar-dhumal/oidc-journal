import React from 'react';
import { PageHeader } from '@carbon/ibm-products';
import './provider-detail.scss';

const ProviderDetailPage = ({ provider }) => {
  const { title, description, configSteps, logo } = provider;

  return (
    <div className="provider-detail-page">
      <PageHeader 
        title={title}
        subtitle="OpenID Connect Configuration"
        background={false}
      >
        <div className="provider-detail-header">
          {logo && <img src={logo} alt={`${title} Logo`} className="provider-logo" />}
          <p className="provider-description">{description}</p>
        </div>
      </PageHeader>

      <div className="provider-detail-content">
        <h2>Configuration Steps</h2>
        <div className="config-steps">
          {configSteps && configSteps.map((step, index) => (
            <div key={index} className="config-step">
              <h3>Step {index + 1}: {step.title}</h3>
              <p>{step.description}</p>
              {step.code && (
                <pre className="code-block">
                  <code>{step.code}</code>
                </pre>
              )}
              {step.image && (
                <div className="step-image-container">
                  <img src={step.image} alt={`Step ${index + 1}`} className="step-image" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProviderDetailPage;

// Made with Bob
