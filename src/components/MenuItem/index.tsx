import { Card, Title, Description, Button } from './styles'

type Props = {
  title: string
  description: string
  image: string
  onClick: () => void
}

const MenuItem = ({ title, description, image, onClick }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button onClick={onClick}>Mais detalhes</Button>
  </Card>
)

export default MenuItem
