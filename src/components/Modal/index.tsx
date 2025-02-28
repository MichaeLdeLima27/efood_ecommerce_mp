import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, openCart } from '../../store/reducers/cart'
import {
  Container,
  ModalContent,
  ModalImage,
  ProductInfo,
  CloseButton
} from './styles'
import { MenuItem } from '../../models/Menu'

type Props = {
  menuItem: MenuItem
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ menuItem, isOpen, onClose }: Props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  const handleAddToCart = () => {
    dispatch(addItem(menuItem))
    dispatch(openCart())
    onClose()
  }

  if (!isOpen) return null

  return (
    <Container onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalImage src={menuItem.foto} alt={menuItem.nome} />
        <ProductInfo>
          <h2>{menuItem.nome}</h2>
          <p>{menuItem.descricao}</p>
          <p>Serve: de {menuItem.porcao}</p>
          <button onClick={handleAddToCart}>
            Adicionar ao carrinho - R$ {menuItem.preco.toFixed(2)}
          </button>
        </ProductInfo>
      </ModalContent>
    </Container>
  )
}

export default Modal
