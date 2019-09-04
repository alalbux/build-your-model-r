import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'
// import ResultBuild75P from './images/1.png'
// import ResultBuild100s from './images/2.png'
// import ResultBuild125b from './images/3.png'

import {
  Flexbox,
  Link
} from '../../components'

const ResultBuildContainer = styled.div`
  padding-bottom: 32px;
  background: #ffffff;
  color: #007A8D;
  width: 100%;
  margin: 0 auto;
  padding: 16px 0;
  position: relative;
`

const ResultBuildImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  padding-top: 120px;
`

const ResultBuildContent = styled.div`
  width: 50%;
  background: #000;
`

const ResultBuildTitle = styled.h1`
  font-size: 30px;
  color: #AC1A28;
  font-weight: 300;
  line-height: 1.2;
`

const ResultBuild = () => (
  <ResultBuildContainer>
    <Flexbox horizontal justify='center'>
      <ResultBuildImageContainer>
        {/* <img src={ResultBuild75P} alt='' />
        <img src={ResultBuild100s} alt='' />
        <img src={ResultBuild125b} alt='' /> */}
      </ResultBuildImageContainer>
      <ResultBuildContent>
        <ResultBuildTitle>
          ResultBuild
          </ResultBuildTitle>
      </ResultBuildContent>
    </Flexbox>
  </ResultBuildContainer>
)

ResultBuild.propTypes = {
  children: oneOfType([node, func])
}

ResultBuild.displayName = 'ResultBuild'

export default ResultBuild
