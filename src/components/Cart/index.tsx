import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
  closeCart,
  removeItem,
  getTotalPrice,
  openCheckout
} from '../../store/reducers/cart'
import trashIcon from '../../assets/images/lixeira.png'
import closeIcon from '../../assets/images/close.png'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const [animate, setAnimate] = useState(false)
  const [removingItems, setRemovingItems] = useState<Record<number, boolean>>(
    {}
  )
  const [isClosing, setIsClosing] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setIsClosing(false)
      // Delay animation start to allow transition to work properly
      setTimeout(() => {
        setAnimate(true)
      }, 50)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleCloseCart = () => {
    setIsClosing(true)
    setAnimate(false)
    setTimeout(() => {
      dispatch(closeCart())
      setIsClosing(false)
    }, 300)
  }

  const handleRemoveItem = (id: number) => {
    setRemovingItems((prev) => ({ ...prev, [id]: true }))
    setTimeout(() => {
      dispatch(removeItem(id))
      setRemovingItems((prev) => ({ ...prev, [id]: false }))
    }, 500) // Match with animation duration
  }

  const handleCheckout = () => {
    dispatch(openCheckout())
  }

  if (!isOpen && !isClosing) {
    return null
  }

  return (
    <S.CartContainer animate={animate}>
      <S.CartOverlay onClick={handleCloseCart} animate={animate} />
      <S.CartContent animate={animate}>
        <S.CloseButton onClick={handleCloseCart}>
          <img src={closeIcon} alt="Fechar" />
        </S.CloseButton>

        {items.length === 0 ? (
          <S.EmptyCart>Carrinho vazio</S.EmptyCart>
        ) : (
          <>
            {items.map((item) => (
              <S.CartItem key={item.id} removing={removingItems[item.id]}>
                <S.CartItemContent>
                  <S.ItemImage src={item.foto} alt={item.nome} />
                  <S.ItemInfo>
                    <S.ItemTitle>{item.nome}</S.ItemTitle>
                    <S.ItemPrice>R$ {item.preco.toFixed(2)}</S.ItemPrice>
                  </S.ItemInfo>
                </S.CartItemContent>
                <S.RemoveButton
                  onClick={() => handleRemoveItem(item.id)}
                  aria-label="Remover item"
                >
                  <img src={trashIcon} alt="Remover item" />
                </S.RemoveButton>
              </S.CartItem>
            ))}

            <S.CartTotal>
              <span>Valor total</span>
              <span>R$ {getTotalPrice(items)}</span>
            </S.CartTotal>

            <S.CheckoutButton onClick={handleCheckout}>
              Continuar com a entrega
            </S.CheckoutButton>
          </>
        )}
      </S.CartContent>
    </S.CartContainer>
  )
}

export default Cart
