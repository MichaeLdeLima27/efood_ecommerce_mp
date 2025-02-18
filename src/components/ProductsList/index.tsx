import Menu from '../../models/Menu'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  menus: Menu[]
}

const ProductsList = ({ background, title, menus }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {menus.map((menu) => (
          <Product
            key={menu.id}
            category={menu.category}
            description={menu.description}
            image={menu.image}
            infos={menu.infos}
            system={menu.system}
            title={menu.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
