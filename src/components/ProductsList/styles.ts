import styled from 'styled-components'
import { Colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section`
  padding: 80px 0;
  background-color: ${Colors.background};
  .container {
    width: 1024px;
    margin: 0 auto;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-top: 80px;
  list-style: none;
  padding: 0;

  ${Card} {
    width: 472px;
  }
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: ${Colors.mainPink};
  margin: 0;
`
