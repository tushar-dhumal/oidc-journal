import React from 'react';
import ProviderDetailPage from './ProviderDetailPage';
import oktalogo from '../../assets/okta.png';
import './provider-detail.scss';

const oktaProviderData = {
  title: 'Okta OpenID Connect',
  description: 'Okta OpenID Connect (OIDC) is an identity layer built on top of OAuth 2.0 that enables secure user authentication and authorization. It allows applications to verify user identities and access profile information from Okta as the identity provider.',
  logo: oktalogo,
  configSteps: [
    {
      title: 'Create an Okta Developer Account',
      description: 'Sign up for a free Okta Developer account at developer.okta.com if you don\'t already have one. This will give you access to the Okta Admin Console.',
    },
    {
      title: 'Create a New Application',
      description: 'In the Okta Admin Console, navigate to Applications > Applications and click "Create App Integration". Select "OIDC - OpenID Connect" as the sign-in method and "Web Application" as the application type.',
    },
    {
      title: 'Configure Application Settings',
      description: 'Provide a name for your application and configure the following settings:',
      code: `
// Sign-in redirect URIs
http://localhost:3000/login/callback

// Sign-out redirect URIs
http://localhost:3000

// Trusted Origins
http://localhost:3000
      `
    },
    {
      title: 'Configure Token Settings',
      description: 'Under the "General" tab, scroll to "Token Settings" and configure the following:',
      code: `
// Access Token Lifetime: 1 hour
// Refresh Token Lifetime: 24 hours
// ID Token Lifetime: 1 hour

// Grant Types:
- Authorization Code
- Refresh Token

// User consent: Required
      `
    },
    {
      title: 'Assign Users or Groups',
      description: 'Navigate to the "Assignments" tab and assign users or groups who should have access to this application.',
    },
    {
      title: 'Get Client Credentials',
      description: 'After creating the application, you\'ll receive a Client ID and Client Secret. Store these securely as they\'ll be needed for your application configuration.',
      code: `
// Example configuration for your application
const oktaConfig = {
  issuer: 'https://your-domain.okta.com/oauth2/default',
  clientId: 'your-client-id',
  redirectUri: 'http://localhost:3000/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};
      `
    },
    {
      title: 'Implement OIDC in Your Application',
      description: 'Use the Okta SDK or a library like oidc-client to implement the OpenID Connect flow in your application.',
      code: `
// Example using React and Okta React SDK
import { Security, LoginCallback } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
  issuer: 'https://your-domain.okta.com/oauth2/default',
  clientId: 'your-client-id',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email']
});

function App() {
  return (
    <Security oktaAuth={oktaAuth}>
      <Router>
        <Route path="/login/callback" component={LoginCallback} />
        {/* Other routes */}
      </Router>
    </Security>
  );
}
      `
    }
  ]
};

const OktaDetailPage = () => {
  return (
    <div className="okta-detail">
      <ProviderDetailPage provider={oktaProviderData} />
    </div>
  );
};

export default OktaDetailPage;

// Made with Bob
