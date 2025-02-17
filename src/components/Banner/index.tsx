import { Imagem, Titulo } from './styles'

import bannerImg from '../../assets/images/banner.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulo>
        <h2></h2>
      </Titulo>
    </div>
  </Imagem>
)

export default Banner
