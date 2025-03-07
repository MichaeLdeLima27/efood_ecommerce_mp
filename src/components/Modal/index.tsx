import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CircleLoader } from 'react-spinners'

import { addItem, openCart } from '../../store/reducers/cart'
import { MenuItem } from '../../models/Menu'
import * as S from './styles'

type Props = {
  menuItem: MenuItem
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ menuItem, isOpen, onClose }: Props) => {
  const dispatch = useDispatch()
  const [imageLoading, setImageLoading] = useState(true)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose()
    }

    if (isOpen) {
      setAnimate(true)
      window.addEventListener('keydown', handleEsc)
    }

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen])

  const handleClose = () => {
    setAnimate(false)
    setTimeout(() => {
      onClose()
    }, 300) // Match this with the animation duration in CSS
  }

  const handleAddToCart = () => {
    dispatch(addItem(menuItem))
    dispatch(openCart())
    handleClose()
  }

  if (!isOpen) return null

  return (
    <S.Container onClick={handleClose} animate={animate}>
      <S.ModalContent onClick={(e) => e.stopPropagation()} animate={animate}>
        <S.CloseButton onClick={handleClose}>&times;</S.CloseButton>
        <S.ImageContainer>
          {imageLoading && (
            <S.LoaderWrapper>
              <CircleLoader color="#E66767" size={50} />
            </S.LoaderWrapper>
          )}
          <S.ModalImage
            src={menuItem.foto}
            alt={menuItem.nome}
            onLoad={() => setImageLoading(false)}
            style={{ opacity: imageLoading ? 0 : 1 }}
          />
        </S.ImageContainer>
        <S.ProductInfo>
          <h2>{menuItem.nome}</h2>
          <p>{menuItem.descricao}</p>
          <p>Serve: de {menuItem.porcao}</p>
          <button onClick={handleAddToCart}>
            Adicionar ao carrinho - R$ {menuItem.preco.toFixed(2)}
          </button>
        </S.ProductInfo>
      </S.ModalContent>
    </S.Container>
  )
}

export default Modal
