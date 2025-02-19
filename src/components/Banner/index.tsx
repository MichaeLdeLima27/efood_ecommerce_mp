import { Container, Imagem, Logo, Titulo } from './styles'
import logo from '../../assets/images/logo.svg'
import bannerImg from '../../assets/images/banner.png'

const Banner = () => (
  <Container>
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <Logo src={logo} alt="efood" />
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </Imagem>
  </Container>
)

export default Banner
