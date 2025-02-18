import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Menu from '../../models/Menu'

import pasta from '../../assets/images/pasta.png'
import pizza from '../../assets/images/pizza.png'
import sushi from '../../assets/images/sushi.png'


const promocoes: Menu[] = [
  {
    id: 1,
    category: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis...',
    title: 'Hioki Sushi',
    rating: 4.9,
    image: sushi
  },
  {
    id: 2,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas...',
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    image: pasta
  },
  {
    id: 3,
    category: 'Italiana',
    description:
      '',
    title: 'Pizza C',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: pizza
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]

const emBreve: Menu[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Resident Evil 4',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    image: resident
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList
      menus={promocoes}
      title="Exemplo de Promoções"
      background="gray"
    />
    <ProductsList
      menus={emBreve}
      title="Exemplo de Em breve"
      background="black"
    />
  </>
)

export default Home
