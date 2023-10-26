export interface IBook {
    id: number,
    name: string,
    image: string,
    publicationYear: number,
    description: string,
    price: number,
    quantity: number,
    languages: string | string[],
    authors: string | string[],
    genres: string | string[],
}