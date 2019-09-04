import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  padding-bottom: 32px;
  background: #ffffff;
  color: #007A8D;
  width: 100%;
  margin: 0 auto;
  padding: 16px 0;
  box-shadow: 8px 0px 47px rgba(0, 0, 0, 0.076002);
`
const Footer = () => (
  <FooterContainer>
    <Flexbox horizontal justify='space-between'>
      <FooterTextContainer>
        <FooterTextValue>2.5</FooterTextValue> s
            <FooterText>From 0 to 100</FooterText>
      </FooterTextContainer>
      <FooterTextContainer>
        <FooterTextValue>420</FooterTextValue> mi
            <FooterText>Miles range</FooterText>
      </FooterTextContainer>
      <FooterTextContainer>
        <FooterTextValue>250</FooterTextValue>mp/h
            <FooterText>Max spreed</FooterText>
      </FooterTextContainer>
    </Flexbox>
  </FooterContainer>
)

Footer.propTypes = {
  children: oneOfType([node, func])
}

Footer.displayName = 'Footer'

export default Footer
