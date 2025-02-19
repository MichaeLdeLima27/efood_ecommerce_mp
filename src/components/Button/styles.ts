import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Colors } from '../../styles'

export const ButtonContainer = styled.button<{
  variant?: 'primary' | 'secondary'
}>`
  ${(props) =>
    props.variant === 'primary'
      ? `
    width: calc(100% - 38px);
    margin: 8px 8px;
    margin-top: 16px;
    padding: 4px 0;
    border: none;
    background-color: ${Colors.mainPink};
    color: ${Colors.darkPink};
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
    cursor: pointer;
  `
      : `
    width: 82px;
    height: 24px;
    border: 2px solid ${Colors.mainPink};
    color: ${Colors.darkPink};
    background-color: ${Colors.mainPink};
    margin: 8px 8px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 1px;
    cursor: pointer;
  `}
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${Colors.mainPink};
  color: ${Colors.darkPink};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 8px;
  text-decoration: none;
  border-radius: 8px;
`
