import { Card, Title, Description } from './styles'

import pizzaImage from '../../assets/images/pizza.png'

type Props = {
  title: string
  description: string
  image: string
}

const MenuItem = ({ title, description }: Props) => (
  <Card>
    <img src={pizzaImage} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <button>Adicionar ao carrinho</button>
  </Card>
)

export default MenuItem
