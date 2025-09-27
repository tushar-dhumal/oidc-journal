import React from 'react';
import ProviderDetailPage from './ProviderDetailPage';
import ibmverifylogo from '../../assets/ibmverify.png';
import './provider-detail.scss';

const ibmVerifyProviderData = {
  title: 'IBM Verify OpenID Connect',
  description: 'IBM Verify provides OpenID Connect (OIDC) capabilities for secure authentication and identity verification. It offers a comprehensive solution for managing digital identities and access across enterprise applications.',
  logo: ibmverifylogo,
  configSteps: [
    {
      title: 'Set Up IBM Security Verify',
      description: 'If you don\'t already have an IBM Security Verify tenant, sign up for one through the IBM Cloud catalog or contact IBM Sales for an enterprise solution.',
    },
    {
      title: 'Access the Admin Console',
      description: 'Log in to your IBM Security Verify admin console at your-tenant-name.verify.ibm.com/ui/admin.',
    },
    {
      title: 'Create a New Application',
      description: 'Navigate to Applications > Applications and click "Add application". Select "Custom Application" as the application type.',
    },
    {
      title: 'Configure OIDC Settings',
      description: 'In the application configuration, select "OpenID Connect" as the sign-on method and configure the following settings:',
      code: `
// Application name: Your application name
// Description: Brief description of your application

// Sign-on URL (ACS URL): 
http://localhost:3000/login/callback

// Allowed origins:
http://localhost:3000
      `
    },
    {
      title: 'Configure Advanced Settings',
      description: 'Under the "Sign-on" tab, configure the advanced settings:',
      code: `
// Grant types:
- Authorization code
- Refresh token

// Response types:
- Code

// Token endpoint authentication method:
- Client secret post

// Scopes:
- openid
- profile
- email
      `
    },
    {
      title: 'Configure Access Policies',
      description: 'Navigate to the "Access" tab and configure who can access this application. You can assign access to specific users or groups.',
    },
    {
      title: 'Get Client Credentials',
      description: 'After saving the application, you\'ll be provided with a Client ID and Client Secret. Store these securely as they\'ll be needed for your application configuration.',
      code: `
// Example configuration for your application
const ibmVerifyConfig = {
  issuer: 'https://your-tenant-name.verify.ibm.com/oidc/endpoint/default',
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  redirectUri: 'http://localhost:3000/login/callback',
  scopes: ['openid', 'profile', 'email']
};
      `
    },
    {
      title: 'Implement OIDC in Your Application',
      description: 'Use a standard OIDC client library to implement the OpenID Connect flow in your application.',
      code: `
// Example using React and oidc-client
import { UserManager } from 'oidc-client';

const oidcConfig = {
  authority: 'https://your-tenant-name.verify.ibm.com/oidc/endpoint/default',
  client_id: 'your-client-id',
  client_secret: 'your-client-secret',
  redirect_uri: window.location.origin + '/login/callback',
  response_type: 'code',
  scope: 'openid profile email',
  automaticSilentRenew: true
};

const userManager = new UserManager(oidcConfig);

// Login function
const login = () => {
  userManager.signinRedirect();
};

// Handle callback
const handleCallback = async () => {
  const user = await userManager.signinRedirectCallback();
  // Store user info and tokens
  return user;
};
      `
    }
  ]
};

const IBMVerifyDetailPage = () => {
  return (
    <div className="ibm-verify-detail">
      <ProviderDetailPage provider={ibmVerifyProviderData} />
    </div>
  );
};

export default IBMVerifyDetailPage;
