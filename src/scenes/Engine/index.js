import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'
import Engine75P from './images/1.png'
import Engine100s from './images/2.png'
import Engine125b from './images/3.png'

import {
  Flexbox,
  Link
} from '../../components'

const EngineContainer = styled.div`
  padding-bottom: 32px;
  background: #ffffff;
  color: #007A8D;
  width: 100%;
  margin: 0 auto;
  padding: 16px 0;
  position: relative;
`

const EngineImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  padding-top: 120px;
`

const EngineContent = styled.div`
  width: 50%;
  background: #000;
`

const EngineTitle = styled.h1`
  font-size: 30px;
  color: #AC1A28;
  font-weight: 300;
  line-height: 1.2;
`

const Engine = () => (
  <EngineContainer>
    <Flexbox horizontal justify='center'>
      <EngineImageContainer>
        <img src={Engine75P} alt='' />
        <img src={Engine100s} alt='' />
        <img src={Engine125b} alt='' />
      </EngineImageContainer>
      <EngineContent>
        <EngineTitle>
          Engine
          </EngineTitle>
      </EngineContent>
    </Flexbox>
  </EngineContainer>
)

Engine.propTypes = {
  children: oneOfType([node, func])
}

Engine.displayName = 'Engine'

export default Engine
