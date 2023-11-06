import { IAuthor } from "./author.types";
import { IFormat } from "./format.types";
import { IGenres } from "./genres.types";
import { ILang } from "./lang.types";

export interface IBook {
    id?: number,
    name: string,
    image?: string,
    publicationYear: number,
    description: string,
    price: number,
    quantity: number,
    languagesID: number[],
    authorsID: number[],
    genresID: number[],
    isbn: number,
    formatsID: number[],
    rating: string,
    coverImageLink: string,
}

export interface IBookGet {
    id?: number,
    name: string,
    image?: string,
    publicationYear: number,
    description: string,
    price: number,
    quantity: number,
    languages: ILang[],
    authors: IAuthor[],
    genres: IGenres[],
    isbn?: number,
    formats: IFormat[],
    rating: string,
    coverImageLink: string,
}