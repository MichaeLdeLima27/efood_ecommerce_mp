import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Colors } from '../../styles'

export const ButtonContainer = styled.button<{
  variant?: 'primary' | 'secondary'
}>`
  ${(props) =>
    props.variant === 'primary'
      ? `
    width: calc(100% - 16px);
    margin: 8px;
    margin-top: 16px;
    padding: 4px 0;
    border: none;
    background-color: ${Colors.mainPink};
    color: ${Colors.white};
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
  `
      : `
    border: 2px solid ${Colors.mainPink};
    color: ${Colors.darkPink};
    background-color: transparent;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 8px;
  `}
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${Colors.mainPink};
  color: ${Colors.darkPink};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
