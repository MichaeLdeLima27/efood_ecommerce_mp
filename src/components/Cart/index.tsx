import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
  closeCart,
  removeItem,
  getTotalPrice,
  openCheckout
} from '../../store/reducers/cart'
import * as S from './styles'
import trashIcon from '../../assets/images/lixeira.png'
import closeIcon from '../../assets/images/close.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const handleCloseCart = () => {
    dispatch(closeCart())
  }

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id))
  }

  const handleCheckout = () => {
    dispatch(openCheckout())
  }

  if (!isOpen) {
    return null
  }

  return (
    <S.CartContainer>
      <S.CartOverlay onClick={handleCloseCart} />
      <S.CartContent>
        <S.CloseButton onClick={handleCloseCart}>
          <img src={closeIcon} alt="Fechar" />
        </S.CloseButton>

        {items.length === 0 ? (
          <S.EmptyCart>Carrinho vazio</S.EmptyCart>
        ) : (
          <>
            {items.map((item) => (
              <S.CartItem key={item.id}>
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
