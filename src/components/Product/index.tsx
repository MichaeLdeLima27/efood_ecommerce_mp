import Tag from '../Tag'
import Button from '../Button'
import { Card, Titulo, Descricao, Infos } from './styles'

type Props = {
  title: string
  category: string
  description: string
  image: string
  rating: number
}

const Product = ({ title, category, description, image, rating }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      <Tag>{category}</Tag>
      <Tag>{rating.toString()}</Tag>
    </Infos>
    <Titulo>
      {title}
      <span>{rating}</span>
    </Titulo>
    <Descricao>{description}</Descricao>
    <Button type="button" title="Saiba mais" variant="primary">
      Saiba mais
    </Button>
  </Card>
)

export default Product
