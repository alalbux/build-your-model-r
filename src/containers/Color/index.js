import React, { Component } from 'react'
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
`

const ColorTitle = styled.h1`
  font-size: 30px;
  color: #AC1A28;
  font-weight: 300;
  line-height: 1.2;
`

const ColorRadio = styled(Radio)`
  display: flex;
`

class Color extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit() {
    console.log('test handleSubmit')
  }

  handleChange(e) {
    console.log('test handleChange', e.target.value)
    this.setState({ color: e.target.value })
  }

  render() {
    return (
      <ColorContainer>
        <Flexbox horizontal justify='center'>
          <ColorImageContainer>
            {this.state.color === 'red' && <img src={CarRed} alt='' />}
            {this.state.color === 'blue' && <img src={CarBlue} alt='' />}
            {this.state.color === 'gray' && <img src={CarGrey} alt='' />}
          </ColorImageContainer>
          <ColorContent>
            <ColorTitle>
              Color
            </ColorTitle>
            <form onSubmit={this.handleSubmit}>
              <Flexbox horizontal>
                <ColorRadio
                  name='color'
                  value='red'
                  checked={this.state.color === 'red'}
                  onChange={this.handleChange}
                >
                  <img src={RedOption} alt='' />
                </ColorRadio>
                <ColorRadio
                  name='color'
                  value='blue'
                  checked={this.state.color === 'blue'}
                  onChange={this.handleChange}
                >
                  <img src={BlueOption} alt='' />
                </ColorRadio>
                <ColorRadio
                  name='color'
                  value='gray'
                  checked={this.state.color === 'gray'}
                  onChange={this.handleChange}
                >
                  <img src={Greyption} alt='' />
                </ColorRadio>
              </Flexbox>
            </form>
          </ColorContent>
        </Flexbox>
      </ColorContainer>
    )
  }
}
Color.propTypes = {
  children: oneOfType([node, func])
}

Color.displayName = 'Color'

export default Color
