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

// eslint-disable-next-line react/prop-types
export default function CommonHeader(className) {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);

  const handleClickSideNavExpand = () => {
    setIsSideNavExpanded(!isSideNavExpanded);
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
          <SideNavMenu renderIcon={'home'} title="Category title">
            <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
            <SideNavMenuItem aria-current="page" href="javascript:void(0)">
              Link
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu renderIcon={'home'} title="Category title">
            <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
            <SideNavMenuItem aria-current="page" href="javascript:void(0)">
              Link
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu renderIcon={'home'} title="Category title">
            <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
            <SideNavMenuItem aria-current="page" href="javascript:void(0)">
              Link
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
          </SideNavMenu>
          <SideNavLink renderIcon={'home'} href="javascript:void(0)">
            Link
          </SideNavLink>
          <SideNavLink renderIcon={'home'} href="javascript:void(0)">
            Link
          </SideNavLink>
        </SideNavItems>
      </SideNav>
     
    </Header>
  );
};
