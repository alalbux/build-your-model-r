import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'

import Logo from './Logo'

import Grid from '../Grid'
import Cell from '../Cell'
import Link from '../../content/Link'

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
`

const HeaderMenuItem = styled.li`
  margin-right: 24px;
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
`

const Header = () => (
  <HeaderContainer>
    <Grid>
      <Cell size={[4]}>
        <HeaderLogoContainer>
          <Logo />
        </HeaderLogoContainer>
      </Cell>
      <Cell size={[8]}>
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
      </Cell>
    </Grid>
  </HeaderContainer>
)

Header.propTypes = {
  children: oneOfType([node, func])
}

Header.displayName = 'Header'

export default Header
