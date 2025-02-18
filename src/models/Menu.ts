class Menu {
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string
  rating: number
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    rating: number,
    title: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.system = system
    this.rating = rating
    this.title = title
  }
}

export default Menu
