import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

export const Card = styled.div`
  background-color: ${Colors.mainPink};
  padding: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 8px;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    border-radius: 8px;

    @media (max-width: ${breakpoints.mobile}) {
      height: 150px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8px;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  color: ${Colors.lightPink};
  margin: 8px 0;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${Colors.lightPink};
  margin-bottom: 8px;
  flex-grow: 1;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
    line-height: 20px;
  }
`

export const Button = styled.button`
  width: 100%;
  background-color: ${Colors.lightPink};
  color: ${Colors.mainPink};
  font-weight: 700;
  font-size: 14px;
  padding: 4px 0;
  border: none;
  margin-top: auto;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${Colors.white};
    color: ${Colors.mainPink};
  }
`
