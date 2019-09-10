import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'
import Car from './car-home.png'
import Arrow from './Arrow'

import {
  Flexbox,
  Link
} from '../../components'

const HomeContainer = styled.div`
  padding-bottom: 32px;
  background: #ffffff;
  color: #007A8D;
  width: 100%;
  margin: 0 auto;
  padding: 16px 0;
  position: relative;
`

const HomeImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 120px;
`

const HomeTitleContainer = styled.div`
  position: absolute;
  top: -20px;
  left: 175px;
`

const HomeTitle = styled.h1`
  font-size: 30px;
  color: #AC1A28;
  font-weight: 300;
  line-height: 1.2;
`

const HomeTitleCarName = styled.span`
  color: #0F1C2D;
  font-weight: 300;
  letter-spacing: 12.5px;
`

const HomeTitleModelName = styled.span`
  display: block;
  font-size: 150px;
  font-weight: 500;
  text-transform: uppercase;
`

const HomeStartContent = styled.div`
  text-align: center;
`

const HomeStartLink = styled(Link)`
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 9.42222px;
  text-transform: uppercase;
`

const HomeFooter = styled.footer`
  padding-top: 80px;
`

const HomeFooterTextContainer = styled.span`
  font-weight: 500;
  line-height: 1.2;
  font-size: 15px;
  color: #AB1725;
`

const HomeFooterText = styled.span`
  display: block;
  color: #0F1C2D;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 1.5px;
`

const HomeFooterTextValue = styled.span`
  font-weight: 500;
  font-size: 42px;
  line-height: 1.2;
`

const Home = () => (
  <HomeContainer>
    <Flexbox vertical justify='center'>
      <HomeImageContainer>
        <HomeTitleContainer>
          <HomeTitle>
            Build your
            <HomeTitleModelName><HomeTitleCarName>Model</HomeTitleCarName> R</HomeTitleModelName>
          </HomeTitle>
        </HomeTitleContainer>
        <img src={Car} alt='' />
        <HomeStartContent>
          <HomeStartLink>Begin <Arrow /></HomeStartLink>
        </HomeStartContent>
      </HomeImageContainer>
      <HomeFooter>
        <Flexbox horizontal justify='space-between'>
          <HomeFooterTextContainer>
            <HomeFooterTextValue>2.5</HomeFooterTextValue> s
            <HomeFooterText>From 0 to 100</HomeFooterText>
          </HomeFooterTextContainer>
          <HomeFooterTextContainer>
            <HomeFooterTextValue>420</HomeFooterTextValue> mi
            <HomeFooterText>Miles range</HomeFooterText>
          </HomeFooterTextContainer>
          <HomeFooterTextContainer>
            <HomeFooterTextValue>250</HomeFooterTextValue>mp/h
            <HomeFooterText>Max spreed</HomeFooterText>
          </HomeFooterTextContainer>
        </Flexbox>
      </HomeFooter>
    </Flexbox>
  </HomeContainer>
)

Home.propTypes = {
  children: oneOfType([node, func])
}

Home.displayName = 'Home'

export default Home
