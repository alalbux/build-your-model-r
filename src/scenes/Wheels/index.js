import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'
import Wheels1 from './images/7.png'
import Wheels2 from './images/8.png'
import Wheels3 from './images/9.png'

import {
  Flexbox,
  Radio
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
  width: 100%;
  padding-top: 120px;
`

const WheelsContent = styled.div`
  width: 100%;
`

const WheelsTitle = styled.h1`
  font-size: 30px;
  color: #AC1A28;
  font-weight: 300;
  line-height: 1.2;
`

const WheelsRadio = styled(Radio)`
  display: flex;
`

const Wheels = () => (
  <WheelsContainer>
    <Flexbox horizontal justify='center'>
      <WheelsContent>
        <WheelsTitle>
          Wheels
        </WheelsTitle>
        <WheelsImageContainer>
          <form>
            <Flexbox horizontal>
              <WheelsRadio name='wheels'>
                <img src={Wheels1} alt='' />
              </WheelsRadio>
              <WheelsRadio name='wheels' defaultChecked>
                <img src={Wheels2} alt='' />
              </WheelsRadio>
              <WheelsRadio name='wheels'>
                <img src={Wheels3} alt='' />
              </WheelsRadio>
            </Flexbox>
          </form>
        </WheelsImageContainer>
      </WheelsContent>
    </Flexbox>
  </WheelsContainer>
)

Wheels.propTypes = {
  children: oneOfType([node, func])
}

Wheels.displayName = 'Wheels'

export default Wheels
