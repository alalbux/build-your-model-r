import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'
// import Color75P from './images/1.png'
// import Color100s from './images/2.png'
// import Color125b from './images/3.png'

import {
  Flexbox,
  Link
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

const Color = () => (
  <ColorContainer>
    <Flexbox horizontal justify='center'>
      <ColorImageContainer>
        image
      </ColorImageContainer>
      <ColorContent>
        <ColorTitle>
          Color
        </ColorTitle>
      </ColorContent>
    </Flexbox>
  </ColorContainer>
)

Color.propTypes = {
  children: oneOfType([node, func])
}

Color.displayName = 'Color'

export default Color
