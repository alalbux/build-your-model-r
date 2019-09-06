import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'
import {
  Flexbox,
  Text
} from '../../'
import Arrow from './Arrow'

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: 99;
  left: 0;
  padding-bottom: 32px;
  background: #ffffff;
  color: #0F1C2D;
  font-weight: 300;
  font-size: 18px;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  box-sizing: border-box;
  box-shadow: inset 0px 8px 20px 0px rgba(0,0,0,0.08);
`

const FooterCalculateAmount = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #5B5B5B;
`

const FooterAmount = styled.div`
  font-weight: 300;
  font-size: 32px;
  color: #AB1725;
`

const FooterCarModel = styled.div`
  font-weight: normal;
`

const FooterEngine = styled.div`
  font-weight: 500;
  font-size: 18px;
`

const FooterEngineType = styled.span`
  color: #AB1725;
`

const FooterColor = styled.div`
  background: none;
`

const FooterWheels = styled.div`
  background: none;
`

const FooterNextStep = styled.div`
  text-align: center;
`

const FooterNextStepLink = styled.a`
  font-size: 22px;
`

const Footer = () => (
  <FooterContainer>
    <Flexbox horizontal middle justify='space-between'>
      <FooterCalculateAmount>
        Total 
        <FooterAmount>$63.000</FooterAmount>
      </FooterCalculateAmount>
      <FooterCarModel>
        Model R
      </FooterCarModel>
      <FooterEngine>
        75<FooterEngineType>P</FooterEngineType>
      </FooterEngine>
      <FooterColor>
        Red
      </FooterColor>
      <FooterWheels>
        <Text>Rodinha</Text>
      </FooterWheels>
      <FooterNextStep>
        <FooterNextStepLink href="#">next <Arrow /></FooterNextStepLink>
      </FooterNextStep>
    </Flexbox>
  </FooterContainer>
)

Footer.propTypes = {
  children: oneOfType([node, func])
}

Footer.displayName = 'Footer'

export default Footer
