import styled from 'styled-components'
import { Colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${Colors.white};
  border: 1px solid ${Colors.mainPink};
  border-radius: 8px;
  position: relative;

  > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 8px;
  color: ${Colors.mainPink};
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px;
  color: ${Colors.mainPink};
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
