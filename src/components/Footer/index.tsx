import { Container, FooterSection, SectionTitle, Links, Link } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Exemplo de Links de rodapé</SectionTitle>
        <Links>
          <Link href="#">Home</Link>
          <Link href="#">Sobre</Link>
          <Link href="#">Contato</Link>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; Max Template - Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
