import styled from 'styled-components'

import { Props } from '.'
import { Colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'menus'>>`
  padding: 80px 0;
  background-color: ${Colors.background};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? Colors.background : Colors.gray};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-top: 80px;
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: ${Colors.mainPink};
`
