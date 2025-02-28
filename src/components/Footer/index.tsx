import { Container, SocialLinks, SocialIcon, FooterText, Logo } from './styles'

import twitter from '../../assets/images/twitter.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
const Footer = () => (
  <Container>
    <div className="container">
      <Logo>
        <Link to="/">
          <img src={logo} alt="E-food" />
        </Link>
      </Logo>
      <SocialLinks>
        <SocialIcon href="#" title="Instagram">
          <img src={instagram} alt="Instagram" />
        </SocialIcon>
        <SocialIcon href="#" title="Facebook">
          <img src={facebook} alt="Facebook" />
        </SocialIcon>
        <SocialIcon href="#" title="Twitter">
          <img src={twitter} alt="Twitter" />
        </SocialIcon>
      </SocialLinks>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterText>
    </div>
  </Container>
)

export default Footer
