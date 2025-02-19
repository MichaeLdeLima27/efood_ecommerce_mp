import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 384px;
  margin-top: -24px;
`

export const Imagem = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background: rgba(230, 103, 103, 0.05);
`

export const Logo = styled.img`
  position: absolute;
  width: 125px;
  height: 57.5px;
  left: 50%;
  transform: translateX(-50%);
  top: 40px;
  background: ${Colors.mainPink};
`

export const Titulo = styled.h1`
  position: absolute;
  width: 539px;
  height: 84px;
  left: 50%;
  transform: translateX(-50%);
  top: 236px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: ${Colors.mainPink};
`
