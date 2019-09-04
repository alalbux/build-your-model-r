import React from 'react'
import styled from 'styled-components'
import Text from '../../content/Text'

const Radio = styled(({ children, className, ...inputProps }) => (
  <label className={className}>
    <input type='radio' {...inputProps} />
    <Text>{children}</Text>
    <div className='box' />
  </label>
))`
  position: relative;
  margin-right: 1.5rem;

  & .box {
    position: absolute;
    height: 22px;
    width: 22px;
    background: #fff;
    border-color: #fff;
    border: 1px solid #fff;
    border-radius: 50%;
  }


  &:hover input:not([disabled]) ~ .box,
  & input:not([disabled]):focus ~ .box {
    border-color: #fff;
  }

  &:hover input:not([disabled]):checked ~ .box,
  & input:checked:focus ~ .box {
    border-color: #fff;
  }

  & input:checked:focus ~ .box,
  & input:checked ~ .box {
    background: #AB1725;
    border-color: #fff;
  }

  & input:disabled:checked ~ .box,
  & input:disabled ~ .box {
    border-color: #fff;
  }

  & input:disabled:checked ~ .box {
    background: #AB1725;
  }

  & input:checked ~ .box:after {
    display: none;
  }

  & input:disabled ~ ${Text} {
    color: #d1cdd2;
  }
`

Radio.displayName = 'Radio'

export default Radio
