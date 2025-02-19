class Menu {
  id: number
  title: string
  description: string
  category: string
  image: string
  rating: number
  isHighlight: boolean

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    image: string,
    rating: number,
    isHighlight: boolean
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.category = category
    this.image = image
    this.rating = rating
    this.isHighlight = isHighlight
  }
}

export default Menu
