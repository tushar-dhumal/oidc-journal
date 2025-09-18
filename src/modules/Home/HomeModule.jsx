import React, { useRef } from 'react';
import { ExpressiveCard, PageHeader } from '@carbon/ibm-products';
import { FlexGrid, Row, Column } from '@carbon/react';
import { useNavigate } from 'react-router-dom';
import oktalogo from '../../assets/okta.png';
import ibmverifylogo from '../../assets/ibmverify.png';
import webspherelogo from '../../assets/websphere.png';
import { CARD_CONTENT, CSS_CLASSES } from '../../constants';

import './home.scss';


export default function HomeModule() {
  const refMain = useRef(null);
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  const pageContent = (
    <FlexGrid className={"home-page-content"} narrow={true}>
      <Row>
        {/* Okta Card */}
        <Column sm={1} md={2} lg={4} className={"home-page-content-block"}>
          <div className={"home-page-content-text"}>
            <ExpressiveCard
              className={`${"home-page-content-card"} ${"okta-card"}`}
              media={<img src={oktalogo} alt="Okta Logo" />}
              primaryButtonText={CARD_CONTENT.OKTA.buttonText}
              title={CARD_CONTENT.OKTA.title}
              onClick={() => handleCardClick(CARD_CONTENT.OKTA.path)}
            >
              <div className="card-content-wrapper">
                <p>{CARD_CONTENT.OKTA.description}</p>
              </div>
            </ExpressiveCard>
          </div>
        </Column>
        
        {/* IBM Verify Card */}
        <Column sm={1} md={2} lg={4} className={"home-page-content-block"}>
          <div className={"home-page-content-text"}>
            <ExpressiveCard
              className={`${"home-page-content-card"} ${"ibm-verify-card"}`}
              media={<img src={ibmverifylogo} alt="IBM Verify Logo" />}
              primaryButtonText={CARD_CONTENT.IBM_VERIFY.buttonText}
              title={CARD_CONTENT.IBM_VERIFY.title}
              onClick={() => handleCardClick(CARD_CONTENT.IBM_VERIFY.path)}
            >
              <div className="card-content-wrapper">
                <p>{CARD_CONTENT.IBM_VERIFY.description}</p>
              </div>
            </ExpressiveCard>
          </div>
        </Column>
        
        {/* WebSphere Card */}
        <Column sm={2} md={4} lg={4} className={"home-page-content-block"}>
          <div className={"home-page-content-text"}>
            <ExpressiveCard
              className={`${"home-page-content-card"} ${"websphere-card"}`}
              media={<img src={webspherelogo} alt="WebSphere Logo" />}
              primaryButtonText={CARD_CONTENT.WEBSPHERE.buttonText}
              title={CARD_CONTENT.WEBSPHERE.title}
              onClick={() => handleCardClick(CARD_CONTENT.WEBSPHERE.path)}
            >
              <div className="card-content-wrapper">
                <p>{CARD_CONTENT.WEBSPHERE.description}</p>
              </div>
            </ExpressiveCard>
          </div>
        </Column>
      </Row>
    </FlexGrid>
  );
  return (
    <>
      <PageHeader style={{ marginTop: '3.1rem' }}
        title="Welcome to OIDC Journal"
        subtitle="One-Stop OIDC Tester and Integration Guide"
      >
        <div style={{ display: 'flex' }}>
          <p style={{ marginRight: '50px', maxWidth: '600px' }}>
            OpenID Connect (OIDC) is an identity layer on top of the OAuth 2.0 protocol.
            It enables client applications to rely on authentication that is performed by an OIDC Provider to verify the identity of a user.
            Clients can also obtain basic profile information about a user and exchange it in a REST-like manner from OIDC Providers.
          </p>
        </div>
      </PageHeader>
      <main className="home-page__main" ref={refMain}>
        {pageContent}
      </main>
    </>
  );
};
