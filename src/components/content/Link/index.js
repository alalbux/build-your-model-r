import styled from 'styled-components'

const Link = styled.a`
  color: #0F1C2D;
  text-decoration: none;
  cursor: pointer;

  &:visited {
    color: #0F1C2D;
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
    text-decoration: none;
  }
`

Link.displayName = 'Link'

export default Link
