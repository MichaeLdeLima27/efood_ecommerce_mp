import { Link } from 'react-router-dom'
import { HeaderBar, LinkCart, Links, LinkItem } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { openCart } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/shopping-cart.svg'

const Header = () => {
  const { items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(openCart())
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/">Restaurantes</Link>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <LinkCart href="/cart" onClick={handleCartClick}>
        {items.length} produto(s) no carrinho
        <img src={cart} alt="Carrinho de compras" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header
