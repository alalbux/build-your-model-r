import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'

import Logo from './Logo'

import Link from '../../content/Link'
import Flexbox from '../Flexbox';

const HeaderContainer = styled.header`
  padding-bottom: 32px;
  background: #ffffff;
  color: #007A8D;
  width: 100%;
  margin: 0 auto;
  padding: 16px 0;
`
const HeaderMenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #0F1C2D;
  font-size: 16px;
  font-weight: 500;
  width: 50%;
`

const HeaderMenuItem = styled.li`
  font-weight: 500;
`

const HeaderMenuLink = styled(Link)`
  line-height: 1.5;
`

const HeaderMenuActive = styled(HeaderMenuLink)`
  border-bottom: #AB1725 solid 2px;
`

const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`

const Header = () => (
  <HeaderContainer>
    <Flexbox horizontal justify='between'>
      <HeaderLogoContainer>
        <Logo />
      </HeaderLogoContainer>
      <HeaderMenuList>
        <HeaderMenuItem>
          <HeaderMenuActive>Model R</HeaderMenuActive>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <HeaderMenuLink>Model IQ</HeaderMenuLink>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <HeaderMenuLink>Model Mobi</HeaderMenuLink>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <HeaderMenuLink>Model Charlie</HeaderMenuLink>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <HeaderMenuLink>Model Italy</HeaderMenuLink>
        </HeaderMenuItem>
      </HeaderMenuList>
    </Flexbox>
  </HeaderContainer>
)

Header.propTypes = {
  children: oneOfType([node, func])
}

Header.displayName = 'Header'

export default Header
