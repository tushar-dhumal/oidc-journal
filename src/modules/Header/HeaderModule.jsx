import React, { useState } from 'react';
import {
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from '@carbon/react';
import { Notification, UserAvatar, Switcher } from '@carbon/icons-react';
import { useNavigate } from 'react-router-dom';
import { CARD_CONTENT } from '../../constants';

// eslint-disable-next-line react/prop-types
export default function CommonHeader(className) {

  const navigate = useNavigate();
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);

  const handleClickSideNavExpand = () => {
    setIsSideNavExpanded(!isSideNavExpanded);
  };

  const handleCardClick = (path) => {
    navigate(path);
  };
  return (
    <Header aria-label="Carbon Tutorial" className={className}>
      <SkipToContent />
      <HeaderMenuButton
        aria-label="Open menu"
        isCollapsible
        onClick={handleClickSideNavExpand}
        isActive={isSideNavExpanded}
      />

      <HeaderName href="/" prefix="">
        OIDC Journal
      </HeaderName>

      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Notifications">
          <Notification size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="User Avatar">
          <UserAvatar size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher">
          <Switcher size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>

      
      <SideNav aria-label="Side navigation" isRail expanded={isSideNavExpanded}>
        <SideNavItems>
          
          <SideNavLink renderIcon={'home'} onClick={() => handleCardClick(CARD_CONTENT.OKTA.path)}>
            Okta OpenID Connect
          </SideNavLink>
          <SideNavLink renderIcon={'home'} onClick={() => handleCardClick(CARD_CONTENT.IBM_VERIFY.path)}>
            IBM Verify
          </SideNavLink>
          <SideNavLink renderIcon={'home'} onClick={() => handleCardClick(CARD_CONTENT.WEBSPHERE.path)}>
            IBM WebSphere Liberty
          </SideNavLink>
        </SideNavItems>
      </SideNav>
     
    </Header>
  );
};
