import React, { Component } from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'
import Engine75P from './images/1.png'
import Engine100s from './images/2.png'
import Engine125b from './images/3.png'

import {
  Flexbox,
  Radio
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
`

const EngineTitle = styled.h1`
  font-size: 30px;
  color: #AC1A28;
  font-weight: 300;
  line-height: 1.2;
`

const EngineRadio = styled(Radio)`
  background: #F7F9FA;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  flex-direction: row-reverse;
  margin: 24px 0;
  align-items: center;
  width: 100%;
`

const EngineDetails = styled.ul`
  display: flex;
  justify-content: space-between;
  color: #5B5B5B;
  font-size: 22px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: center;
`
const EngineValue = styled.span`
  color: #0F1C2D;
  font-size: 22px;
  font-weight: 500;
  
`
const EngineName = styled.span`
  color: #0F1C2D;
  font-size: 34px;
`
const EngineItem = styled.li`
  padding: 0 32px;
  color: #5B5B5B;
`

const EngineType = styled.span`
  color: #AB1725;
`

class Engine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      engine: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit() {
    console.log('test handleSubmit')
  }

  handleChange(e) {
    console.log('test handleChange', e.target.value)
    this.setState({ engine: e.target.value })
  }

  render() {
    return (
      <EngineContainer>
        <Flexbox horizontal justify='center'>
          <EngineImageContainer>
            { this.state.engine === '75p' && <img src={Engine75P} alt='' /> }
            { this.state.engine === '100s' && <img src={Engine100s} alt='' /> }
            { this.state.engine === '125b' && <img src={Engine125b} alt='' /> }
          </EngineImageContainer>
          <EngineContent>
            <EngineTitle>
              Engine
            </EngineTitle>
            <form onSubmit={this.handleSubmit}>
              <Flexbox vertical>
                <EngineRadio
                  name='engine'
                  value='75p'
                  checked={this.state.engine === '75p'}
                  onChange={this.handleChange}
                >
                  <EngineDetails>
                    <EngineItem>
                      <EngineName>75<EngineType>P</EngineType></EngineName>
                    </EngineItem>
                    <EngineItem>
                      <EngineValue>75</EngineValue>kWh
                    </EngineItem>
                    <EngineItem>
                      <EngineValue>275</EngineValue> miles range
                    </EngineItem>
                  </EngineDetails>
                </EngineRadio>
                <EngineRadio
                  name='engine'
                  value='100s'
                  checked={this.state.engine === '100s'}
                  onChange={this.handleChange}
                >
                  <EngineDetails>
                    <EngineItem>
                      <EngineName>100<EngineType>S</EngineType></EngineName>
                    </EngineItem>
                    <EngineItem>
                      <EngineValue>100</EngineValue>kWh
                    </EngineItem>
                    <EngineItem>
                      <EngineValue>355</EngineValue> miles range
                    </EngineItem>
                  </EngineDetails>
                </EngineRadio>
                <EngineRadio
                  name='engine'
                  value='125b'
                  checked={this.state.engine === '125b'}
                  onChange={this.handleChange}
                >
                  <EngineDetails>
                    <EngineItem>
                      <EngineName>125<EngineType>B</EngineType></EngineName>
                    </EngineItem>
                    <EngineItem>
                      <EngineValue>125</EngineValue>kWh
                    </EngineItem>
                    <EngineItem>
                      <EngineValue>420</EngineValue> miles range
                    </EngineItem>
                  </EngineDetails>
                </EngineRadio>
              </Flexbox>
            </form>
          </EngineContent>
        </Flexbox>
      </EngineContainer>
    )
  }
}
Engine.propTypes = {
  children: oneOfType([node, func])
}

Engine.displayName = 'Engine'

export default Engine
