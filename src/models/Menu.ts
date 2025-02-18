class Menu {
  id: number
  title: string
  description: string
  category: string
  image: string
  rating: number

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    image: string,
    rating: number
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.category = category
    this.image = image
    this.rating = rating
  }
}

export default Menu
