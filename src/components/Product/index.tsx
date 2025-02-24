import { useNavigate } from 'react-router-dom'
import Tag from '../Tag'
import Button from '../Button'
import { Card, Titulo, Descricao, Infos } from './styles'

type Props = {
  title: string
  category: string
  description: string
  image: string
  rating: number
  isHighlight?: boolean
  tipo: string
}

const Product = ({
  title,
  category,
  description,
  image,
  rating,
  isHighlight,
  tipo
}: Props) => {
  const navigate = useNavigate()

  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {isHighlight && <Tag>Destaque da semana</Tag>}
        <Tag>{category}</Tag>
      </Infos>
      <Titulo>
        {title}
        <span>{rating.toFixed(1)}</span>
      </Titulo>
      <Descricao>{description}</Descricao>
      <Button
        type="button"
        title="Saiba mais"
        variant="secondary"
        onClick={() => navigate(`/restaurant/${tipo}`)}
      >
        Saiba mais
      </Button>
    </Card>
  )
}

export default Product
