import styled from 'styled-components'
import { Colors } from '../../styles'

export const HeroContainer = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: 162px;
`

export const HeroBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  z-index: -1;
`

export const HeroContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 25px 0;
`

export const RestaurantType = styled.h2`
  font-size: 32px;
  font-weight: 100;
  color: ${Colors.white};
  margin-bottom: 156.5px;
`

export const RestaurantName = styled.h1`
  font-size: 32px;
  font-weight: 900;
  color: ${Colors.white};
`
