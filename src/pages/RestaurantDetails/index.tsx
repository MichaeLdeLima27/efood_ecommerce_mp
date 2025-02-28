import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantHero from '../../components/RestaurantHero'
import MenuList from '../../components/MenuList'
import Modal from '../../components/Modal'
import { MenuItem, Restaurant } from '../../models/Menu'
import Header from '../../components/Header'

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const RestaurantDetails = () => {
  const { tipo } = useParams<{ tipo: string }>()
  const [restaurant, setRestaurant] = useState<Restaurant>()
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        const foundRestaurant = res.find((r: Restaurant) => r.tipo === tipo)
        setRestaurant(foundRestaurant)
      })
  }, [tipo])

  const handleOpenModal = (item: MenuItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  if (!restaurant) {
    return <h3>Loading...</h3>
  }

  return (
    <>
      <Header />
      <RestaurantHero
        type={capitalize(restaurant.tipo)}
        name={restaurant.titulo}
        image={restaurant.capa}
      />
      <MenuList items={restaurant.cardapio} onItemClick={handleOpenModal} />

      {selectedItem && (
        <Modal
          menuItem={selectedItem}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  )
}

export default RestaurantDetails
