import { FC } from 'react';

import { useForm, SubmitHandler } from "react-hook-form"

import useGenreServices from '../../../../services/genreServices';

import styles from '../adminPanel.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

type Inputs = {
  genre: string
}

const GenreForm: FC = () => {

    const {postGenre} = useGenreServices();

    const token = useSelector((state: RootState) => state.login.token)



    const {
        register,
        setValue,
        handleSubmit,
        // watch,
        formState: { errors },
      } = useForm<Inputs>({
        defaultValues: {
          genre: "",
        }
      })
      const onSubmit: SubmitHandler<Inputs> = async(data) => {
        console.log(data);

        const newData = JSON.stringify(data)

        console.log(newData)

        const res = await postGenre(newData, token);
        console.log(res);
        setValue('genre', '')
      }
      

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.genre}>
        <label htmlFor="genre">
            <input {...register("genre", { required: true })} />
            <span>genre</span>
        </label>
        {errors.genre && <span>This field is required</span>}

        <button type="submit" className="submit-btn">Send</button>
      </form>
    </>
  );
}

export default GenreForm