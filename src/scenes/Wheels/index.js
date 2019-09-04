import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'
// import Wheels75P from './images/1.png'
// import Wheels100s from './images/2.png'
// import Wheels125b from './images/3.png'

import {
  Flexbox,
  Link
} from '../../components'

const WheelsContainer = styled.div`
  padding-bottom: 32px;
  background: #ffffff;
  color: #007A8D;
  width: 100%;
  margin: 0 auto;
  padding: 16px 0;
  position: relative;
`

const WheelsImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  padding-top: 120px;
`

const WheelsContent = styled.div`
  width: 50%;
  background: #000;
`

const WheelsTitle = styled.h1`
  font-size: 30px;
  color: #AC1A28;
  font-weight: 300;
  line-height: 1.2;
`

const Wheels = () => (
  <WheelsContainer>
    <Flexbox horizontal justify='center'>
      <WheelsImageContainer>
        image
      </WheelsImageContainer>
      <WheelsContent>
        <WheelsTitle>
          Wheels
          </WheelsTitle>
      </WheelsContent>
    </Flexbox>
  </WheelsContainer>
)

Wheels.propTypes = {
  children: oneOfType([node, func])
}

Wheels.displayName = 'Wheels'

export default Wheels
