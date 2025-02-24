import { Menu } from '../../models/Menu'
import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  menus: Menu[]
}

const ProductsList = ({ title, menus }: Props) => (
  <Container>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {menus.map((menu) => (
          <Product
            key={menu.id}
            category={menu.category}
            description={menu.description}
            image={menu.image}
            rating={menu.rating}
            title={menu.title}
            isHighlight={menu.isHighlight}
            tipo={menu.tipo}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
