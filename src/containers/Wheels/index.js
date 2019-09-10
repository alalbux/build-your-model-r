import React, { Component } from 'react'
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


class Wheels extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wheels: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit() {
    console.log('test handleSubmit')
  }

  handleChange(e) {
    console.log('test handleChange', e.target.value)
    this.setState({ wheels: e.target.value })
  }

  render() {
    return (
      <WheelsContainer>
        <Flexbox horizontal justify='center'>
          <WheelsContent>
            <WheelsTitle>
              Wheels
        </WheelsTitle>
            <WheelsImageContainer>
              <form>
                <Flexbox horizontal>
                  <WheelsRadio
                    name='wheels'
                    value='wheel1'
                    checked={this.state.wheels === 'wheel1'}
                    onChange={this.handleChange}
                  >
                    <img src={Wheels1} alt='' />
                  </WheelsRadio>
                  <WheelsRadio
                    name='wheels'
                    value='wheel2'
                    checked={this.state.wheels === 'wheel2'}
                    onChange={this.handleChange}
                  >
                    <img src={Wheels2} alt='' />
                  </WheelsRadio>
                  <WheelsRadio
                    name='wheels'
                    value='wheel3'
                    checked={this.state.wheels === 'wheel3'}
                    onChange={this.handleChange}
                  >
                    <img src={Wheels3} alt='' />
                  </WheelsRadio>
                </Flexbox>
              </form>
            </WheelsImageContainer>
          </WheelsContent>
        </Flexbox>
      </WheelsContainer>
    )
  }
}

Wheels.propTypes = {
  children: oneOfType([node, func])
}

Wheels.displayName = 'Wheels'

export default Wheels
