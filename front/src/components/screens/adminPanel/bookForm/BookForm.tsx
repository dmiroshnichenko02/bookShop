import { FC } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import useBookServices from "../../../../services/bookServices";
import { IBook } from "../../../../types/book.types";

interface Inputs extends IBook {}

const BookForm: FC = () => {
  const { postBook } = useBookServices();

  const {
    register,
    setValue,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      publicationYear: 0,
      description: "",
      price: 0,
      quantity: 0,
      languages: "",
      authors: "",
      genres: "",
      isbn: 0,
      formats: "",
      rating: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const res = await postBook(data);
    console.log(res);
    setValue("name", "");
    setValue("publicationYear", 0);
    setValue("description", "");
    setValue("price", 0);
    setValue("quantity", 0);
    setValue("languages", "");
    setValue("authors", "");
    setValue("genres", "");
    setValue("isbn", 0);
    setValue("formats", "");
    setValue("rating", "");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          <input {...register("name", { required: true })} />
          <span>Format</span>
        </label>
        {errors.name && <span>This field is required</span>}

        <label htmlFor="publicationYear">
          <input {...register("publicationYear", { required: true })} />
          <span>publicationYear</span>
        </label>
        {errors.publicationYear && <span>This field is required</span>}

        <label htmlFor="description">
          <input {...register("description", { required: true })} />
          <span>description</span>
        </label>
        {errors.description && <span>This field is required</span>}

        <label htmlFor="price">
          <input {...register("price", { required: true })} />
          <span>price</span>
        </label>
        {errors.price && <span>This field is required</span>}

        <label htmlFor="quantity">
          <input {...register("quantity", { required: true })} />
          <span>quantity</span>
        </label>
        {errors.quantity && <span>This field is required</span>}

        <label htmlFor="languages">
          <input {...register("languages", { required: true })} />
          <span>languages</span>
        </label>
        {errors.languages && <span>This field is required</span>}

        <label htmlFor="authors">
          <input {...register("authors", { required: true })} />
          <span>authors</span>
        </label>
        {errors.authors && <span>This field is required</span>}

        <label htmlFor="genres">
          <input {...register("genres", { required: true })} />
          <span>genres</span>
        </label>
        {errors.genres && <span>This field is required</span>}

        <label htmlFor="isbn">
          <input {...register("isbn", { required: true })} />
          <span>isbn</span>
        </label>
        {errors.isbn && <span>This field is required</span>}

        <label htmlFor="formats">
          <input {...register("formats", { required: true })} />
          <span>formats</span>
        </label>
        {errors.formats && <span>This field is required</span>}

        <label htmlFor="rating">
          <input {...register("rating", { required: true })} />
          <span>rating</span>
        </label>
        {errors.rating && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
};

export default BookForm;
