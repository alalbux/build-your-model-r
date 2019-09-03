import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'
import Car from './car-home.png'

import {
  Flexbox,
  Text
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
  padding-top: 150px;
`

const HomeTitleContainer = styled.div`
  position: absolute;
  top: 10px;
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

const Home = () => (
  <HomeContainer>
    <Flexbox vertical justify='center'>
      <HomeImageContainer>
        <HomeTitleContainer>
          <HomeTitle>
            Build your <HomeTitleModelName><HomeTitleCarName>Model</HomeTitleCarName> R</HomeTitleModelName>
          </HomeTitle>
        </HomeTitleContainer>
        <img src={Car} alt='image car model R' />
      </HomeImageContainer>
    </Flexbox>
  </HomeContainer>
)

Home.propTypes = {
  children: oneOfType([node, func])
}

Home.displayName = 'Home'

export default Home
