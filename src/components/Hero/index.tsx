import {
  HeroContainer,
  HeroBackground,
  HeroContent,
  RestaurantType,
  RestaurantName
} from './styles'

type Props = {
  type: string
  name: string
  image: string
}

const Hero = ({ type, name, image }: Props) => {
  return (
    <HeroContainer>
      <HeroBackground style={{ backgroundImage: `url(${image})` }} />
      <HeroContent>
        <RestaurantType>{type}</RestaurantType>
        <RestaurantName>{name}</RestaurantName>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
