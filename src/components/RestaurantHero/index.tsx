import {
  HeroContainer,
  HeroBackground,
  HeroContent,
  RestaurantType,
  RestaurantName
} from './styles'

import heroBackground from '../../assets/images/pastaFundoPerfil.png'

type Props = {
  type: string
  name: string
  image: string
}

const RestaurantHero = ({ type, name }: Props) => {
  return (
    <HeroContainer>
      <HeroBackground style={{ backgroundImage: `url(${heroBackground})` }} />
      <HeroContent>
        <RestaurantType>{type}</RestaurantType>
        <RestaurantName>{name}</RestaurantName>
      </HeroContent>
    </HeroContainer>
  )
}

export default RestaurantHero
