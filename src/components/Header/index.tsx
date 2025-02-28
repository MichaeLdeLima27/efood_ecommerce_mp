import { Link } from 'react-router-dom'
import {
  HeaderBar,
  HeaderContent,
  LinkCart,
  Links,
  LinkItem,
  LogoContainer
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { openCart } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.svg'

const Header = () => {
  const { items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(openCart())
  }

  return (
    <HeaderBar>
      <HeaderContent>
        <Links>
          <LinkItem>
            <Link to="/">Restaurantes</Link>
          </LinkItem>
        </Links>
        <LogoContainer>
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </LogoContainer>
        <LinkCart href="#" onClick={handleCartClick}>
          {items.length} produto(s) no carrinho
        </LinkCart>
      </HeaderContent>
    </HeaderBar>
  )
}

export default Header
