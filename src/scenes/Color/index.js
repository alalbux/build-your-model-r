import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'
import CarRed from './images/4.png'
import CarBlue from './images/5.png'
import CarGrey from './images/6.png'
import BlueOption from './images/dot-blue.png'
import Greyption from './images/dot-grey.png'
import RedOption from './images/dot-red.png'

import {
  Flexbox,
  Radio
} from '../../components'

const ColorContainer = styled.div`
  padding-bottom: 32px;
  background: #ffffff;
  color: #007A8D;
  width: 100%;
  margin: 0 auto;
  padding: 16px 0;
  position: relative;
`

const ColorImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  padding-top: 120px;
`

const ColorContent = styled.div`
  width: 50%;
  background: #000;
`

const ColorTitle = styled.h1`
  font-size: 30px;
  color: #AC1A28;
  font-weight: 300;
  line-height: 1.2;
`


const EngineRadio = styled(Radio)`
  display: flex;
`

const Color = () => (
  <ColorContainer>
    <Flexbox horizontal justify='center'>
      <ColorImageContainer>
        <img src={CarRed} alt='' />
        <img src={CarBlue} alt='' />
        <img src={CarGrey} alt='' />
      </ColorImageContainer>
      <ColorContent>
        <ColorTitle>
          Color
        </ColorTitle>
        <form>
          <Flexbox horizontal>
            <EngineRadio name='engine'>
              <img src={RedOption} alt='' />
            </EngineRadio>
            <EngineRadio name='engine' defaultChecked>
              <img src={BlueOption} alt='' />
            </EngineRadio>
            <EngineRadio name='engine'>
              <img src={Greyption} alt='' />
            </EngineRadio>
          </Flexbox>
        </form>
      </ColorContent>
    </Flexbox>
  </ColorContainer>
)

Color.propTypes = {
  children: oneOfType([node, func])
}

Color.displayName = 'Color'

export default Color
