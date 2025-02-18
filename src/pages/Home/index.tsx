import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Menu from '../../models/Menu'

import pasta from '../../assets/images/pasta.png'
import pizza from '../../assets/images/pizza.png'
import sushi from '../../assets/images/sushi.png'

const restaurantes: Menu[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    category: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.',
    image: sushi,
    rating: 4.9
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pasta,
    rating: 4.6
  },
  {
    id: 3,
    title: 'Pizzaria Bella Napoli',
    category: 'Italiana',
    description:
      'As melhores pizzas artesanais com ingredientes importados da Itália. Massa fina e crocante, molho de tomate caseiro e coberturas generosas.',
    image: pizza,
    rating: 4.7
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList
      menus={restaurantes}
      title="Restaurantes em destaque"
      background="gray"
    />
  </>
)

export default Home
