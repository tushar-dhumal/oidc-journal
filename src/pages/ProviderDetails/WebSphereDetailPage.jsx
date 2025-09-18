import React from 'react';
import ProviderDetailPage from './ProviderDetailPage';
import webspherelogo from '../../assets/websphere.png';
import './provider-detail.scss';

const webSphereProviderData = {
  title: 'WebSphere OpenID Connect',
  description: 'WebSphere Liberty supports OpenID Connect (OIDC) for secure authentication in enterprise applications. It provides a robust implementation of OIDC protocols for identity management and access control in Java EE environments.',
  logo: webspherelogo,
  configSteps: [
    {
      title: 'Install WebSphere Liberty',
      description: 'Download and install WebSphere Liberty from the IBM website or use a container image if you prefer containerized deployment.',
    },
    {
      title: 'Configure server.xml',
      description: 'Add the necessary features to your server.xml file to enable OpenID Connect:',
      code: `
<server>
    <!-- Enable features -->
    <featureManager>
        <feature>openidConnectClient-1.0</feature>
        <feature>oauth-2.0</feature>
        <feature>ssl-1.0</feature>
        <feature>jsp-2.3</feature>
        <feature>servlet-4.0</feature>
    </featureManager>
    
    <!-- Other server configurations -->
</server>
      `
    },
    {
      title: 'Configure OpenID Connect Client',
      description: 'Add the OpenID Connect client configuration to your server.xml:',
      code: `
<server>
    <!-- OpenID Connect Client configuration -->
    <openidConnectClient id="OidcClient"
        clientId="your-client-id"
        clientSecret="your-client-secret"
        discoveryEndpointUrl="https://your-identity-provider/.well-known/openid-configuration"
        signatureAlgorithm="RS256"
        authorizationEndpointUrl="https://your-identity-provider/oauth2/authorize"
        tokenEndpointUrl="https://your-identity-provider/oauth2/token"
        jwkEndpointUrl="https://your-identity-provider/oauth2/jwks"
        issuerIdentifier="https://your-identity-provider"
        userIdentityToCreateSubject="sub"
        groupIdentifier="groups"
        userInfoEndpointUrl="https://your-identity-provider/oauth2/userinfo"
        scope="openid profile email"
        redirectToRPHostAndPort="https://your-app-host:port">
    </openidConnectClient>
</server>
      `
    },
    {
      title: 'Configure SSL',
      description: 'Configure SSL settings for secure communication:',
      code: `
<server>
    <!-- SSL configuration -->
    <ssl id="defaultSSLConfig" keyStoreRef="defaultKeyStore" trustStoreRef="defaultTrustStore" />
    
    <keyStore id="defaultKeyStore" location="keystore.jks" password="your-keystore-password" />
    <keyStore id="defaultTrustStore" location="truststore.jks" password="your-truststore-password" />
</server>
      `
    },
    {
      title: 'Configure Web Application',
      description: 'Configure your web application to use OpenID Connect for authentication:',
      code: `
<!-- web.xml -->
<web-app>
    <security-constraint>
        <web-resource-collection>
            <web-resource-name>Protected Resources</web-resource-name>
            <url-pattern>/protected/*</url-pattern>
        </web-resource-collection>
        <auth-constraint>
            <role-name>authenticated</role-name>
        </auth-constraint>
    </security-constraint>

    <security-role>
        <role-name>authenticated</role-name>
    </security-role>
</web-app>
      `
    },
    {
      title: 'Register with Identity Provider',
      description: 'Register your WebSphere Liberty application with your identity provider (like Okta, IBM Verify, etc.) to get the client ID and client secret.',
    },
    {
      title: 'Test the Configuration',
      description: 'Start your WebSphere Liberty server and test the OpenID Connect authentication flow by accessing a protected resource.',
      code: `
// Example Java code to access user information
@WebServlet("/userinfo")
public class UserInfoServlet extends HttpServlet {
    
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter writer = resp.getWriter();
        
        // Get the authenticated user principal
        Principal userPrincipal = req.getUserPrincipal();
        
        if (userPrincipal != null) {
            writer.println("Authenticated user: " + userPrincipal.getName());
            
            // If using JWT, you can access claims
            if (userPrincipal instanceof JsonWebToken) {
                JsonWebToken jwt = (JsonWebToken) userPrincipal;
                writer.println("Email: " + jwt.getClaim("email"));
                writer.println("Name: " + jwt.getClaim("name"));
            }
        } else {
            writer.println("No authenticated user found");
        }
    }
}
      `
    }
  ]
};

const WebSphereDetailPage = () => {
  return (
    <div className="websphere-detail">
      <ProviderDetailPage provider={webSphereProviderData} />
    </div>
  );
};

export default WebSphereDetailPage;
