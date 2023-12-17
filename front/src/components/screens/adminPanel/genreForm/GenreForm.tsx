import { FC, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import useGenreServices from "../../../../services/genreServices";

import styles from "../adminPanel.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

type Inputs = {
  genre: string;
};

interface IResGenre {
  id: number | undefined;
  genre: string | string[];
}

const GenreForm: FC = () => {
  const [reqError, setReqError] = useState(false);
  const [send, setSend] = useState(false);
  const [response, setResponse] = useState<IResGenre>();

  const { postGenre } = useGenreServices();

  const token = useSelector((state: RootState) => state.login.token);

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      genre: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const newData = JSON.stringify(data);

      const res = await postGenre(newData, token);
      if (res) {
        setValue("genre", "");
        setSend(true);
        setResponse(res);
      }
    } catch (error) {
      setReqError(true);
      reset();
    }
  };

  return (
    <>
      {send ? (
        <div className={styles.successBlock}>
          <h4>Successful add genres</h4>
          <div className={styles.author}>
            <h4>
              Genre: <span>{response?.genre}</span>
            </h4>
          </div>
          <div
            className={styles.addAnother}
            onClick={() => {
              setSend(false);
              reset();
            }}
          >
            <span>Add another</span>
          </div>
        </div>
      ) : reqError ? (
        <div className={styles.erorsBlock}>
          <h4>Genres post error</h4>
          <div
            className={styles.btnErrors}
            onClick={() => {
              setReqError(false);
              reset();
            }}
          >
            Try again
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.genre}>
          <label htmlFor="genre">
            <input {...register("genre", { required: true })} />
            <span>genre</span>
          </label>
          {errors.genre && <span>This field is required</span>}

          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      )}
    </>
  );
};

export default GenreForm;
