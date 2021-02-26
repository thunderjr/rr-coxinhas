interface ImageProps {
    src: string
    width: number
    height: number
}

export default interface CardapioEntry {
    id: number
    name: string
    description: string
    price: number
    imageProps: ImageProps
}