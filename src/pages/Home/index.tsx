import { useState, useEffect } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { Restaurant } from '../../models/Menu'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  const parsedRestaurants = restaurants.map((restaurant) => ({
    id: restaurant.id,
    title: restaurant.titulo,
    isHighlight: restaurant.destacado,
    category: restaurant.tipo,
    description: restaurant.descricao,
    image: restaurant.capa,
    rating: restaurant.avaliacao,
    tipo: restaurant.tipo
  }))

  return (
    <>
      <Banner />
      <ProductsList menus={parsedRestaurants} title="" />
    </>
  )
}

export default Home
