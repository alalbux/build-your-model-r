import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'
import {
  Flexbox,
  Text
} from '../..'

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: 99;
  left: 0;
  padding-bottom: 32px;
  background: #ffffff;
  color: #007A8D;
  width: 100%;
  margin: 0 auto;
  padding: 16px 0;
  box-shadow: inset 0px 8px 20px 0px rgba(0,0,0,0.08);
`

const FooterCalculateAmount = styled.div`
  background: red;
`

const FooterCarModel = styled.div`
  background: green;
`

const FooterEngine = styled.div`
  background: blue;
`

const FooterColor = styled.div`
  background: grey;
`

const FooterWheels = styled.div`
  background: cyan;
`

const FooterNextStep = styled.div`
  background: purple;
`

const Footer = () => (
  <FooterContainer>
    <Flexbox horizontal justify='space-between'>
      <FooterCalculateAmount>
        <Text>Total $63.000</Text>
      </FooterCalculateAmount>
      <FooterCarModel>
        <Text>Model R</Text>
      </FooterCarModel>
      <FooterEngine>
        <Text>75P</Text>
      </FooterEngine>
      <FooterColor>
        <Text>Red</Text>
      </FooterColor>
      <FooterWheels>
        <Text>Rodinha</Text>
      </FooterWheels>
      <FooterNextStep>
        <Text>Next</Text>
      </FooterNextStep>
    </Flexbox>
  </FooterContainer>
)

Footer.propTypes = {
  children: oneOfType([node, func])
}

Footer.displayName = 'Footer'

export default Footer
