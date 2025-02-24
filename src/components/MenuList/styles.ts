import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.div`
  background-color: ${Colors.background};
  padding-top: 56px;
  padding-bottom: 120px;
`

export const List = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`
