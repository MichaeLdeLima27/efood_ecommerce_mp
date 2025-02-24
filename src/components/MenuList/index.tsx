import MenuItem from '../MenuItem'
import { Container, List } from './styles'
import { MenuItem as MenuItemType } from '../../models/Menu'

type Props = {
  items: MenuItemType[]
  onItemClick: (item: MenuItemType) => void
}

const MenuList = ({ items, onItemClick }: Props) => (
  <Container>
    <List>
      {items.map((item) => (
        <MenuItem
          key={item.id}
          title={item.nome}
          description={item.descricao}
          image={item.foto}
          onClick={() => onItemClick(item)}
        />
      ))}
    </List>
  </Container>
)

export default MenuList
