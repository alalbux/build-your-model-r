import PropTypes from 'prop-types'
import styled from 'styled-components'

const Cell = styled.div`
  display: grid;
  grid-column: span 12;

  @media (min-width: 320px)  { grid-column: span ${props => props.size[5] || 12}; }
  @media (min-width: 480px)  { grid-column: span ${props => props.size[4] || 6}; }
  @media (min-width: 600px)  { grid-column: span ${props => props.size[3] || 4}; }
  @media (min-width: 801px)  { grid-column: span ${props => props.size[2] || 3}; }
  @media (min-width: 1025px) { grid-column: span ${props => props.size[1] || 2}; }
  @media (min-width: 1281px) { grid-column: span ${props => props.size[0] || 1}; }
`

Cell.propTypes = {
  size: PropTypes.array
}

Cell.defaultProps = {
  size: [1, 2, 3, 4, 6, 12]
}

Cell.displayName = 'Cell'

export default Cell
