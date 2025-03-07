import { useState } from 'react'
import { CircleLoader } from 'react-spinners'

import * as S from './styles'

type Props = {
  title: string
  description: string
  image: string
  onClick: () => void
}

const MenuItem = ({ title, description, image, onClick }: Props) => {
  const [imageLoading, setImageLoading] = useState(true)

  return (
    <S.Card>
      <S.ImageContainer>
        {imageLoading && (
          <S.LoaderWrapper>
            <CircleLoader color="#E66767" size={30} />
          </S.LoaderWrapper>
        )}
        <img
          src={image}
          alt={title}
          onLoad={() => setImageLoading(false)}
          style={{ opacity: imageLoading ? 0 : 1 }}
        />
      </S.ImageContainer>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Button onClick={onClick}>Mais detalhes</S.Button>
    </S.Card>
  )
}

export default MenuItem
