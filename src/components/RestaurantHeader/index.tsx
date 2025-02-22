import { Link } from 'react-router-dom'
import { HeaderBar, HeaderContent, CartText, RestaurantsButton } from './styles'

import logo from '../../assets/images/logo.svg'

const RestaurantHeader = () => (
  <HeaderBar>
    <HeaderContent>
      <Link to="/">
        <RestaurantsButton>Restaurantes</RestaurantsButton>
      </Link>
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
      <CartText>0 produto(s) no carrinho</CartText>
    </HeaderContent>
  </HeaderBar>
)

export default RestaurantHeader
