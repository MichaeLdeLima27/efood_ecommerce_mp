import MenuItem from '../MenuItem'
import { Container, List } from './styles'

type MenuItemType = {
  id: number
  title: string
  description: string
  image: string
}

type Props = {
  items: MenuItemType[]
}

const MenuList = ({ items }: Props) => (
  <Container>
    <List>
      {items.map((item) => (
        <MenuItem
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </List>
  </Container>
)

export default MenuList
