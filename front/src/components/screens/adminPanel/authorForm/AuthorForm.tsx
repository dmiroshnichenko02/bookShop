import { FC, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import useAuthorServices from "../../../../services/authorServices";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

import styles from "./authorForm.module.scss";

type Inputs = {
  firstName: string;
  middleName: string;
  lastName: string;
};

interface IAuthorResponse {
  id: number | undefined;
  firstName: string;
  middleName: string;
  lastName: string;
}

const AuthorForm: FC = () => {
  const [reqError, setReqError] = useState(false);
  const [send, setSend] = useState(false);
  const [response, setResponse] = useState<IAuthorResponse>();

  const token = useSelector((state: RootState) => state.login.token);

  const { postAuthor } = useAuthorServices();

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const newData = JSON.stringify(data);

      const res = await postAuthor(newData, token);

      if (res) {
        setValue("firstName", "");
        setValue("middleName", "");
        setValue("lastName", "");
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
          <h4>Successful add author</h4>
          <div className={styles.author}>
            <h4>Name: <span>{response?.firstName}</span></h4>
            <h4>Middle name: <span>{response?.middleName}</span></h4>
            <h4>Last name: <span>{response?.lastName}</span></h4>
          </div>
          <div className={styles.addAnother} onClick={() => {
            setSend(false);
            reset();
          }}><span>Add another</span></div>
        </div>
      ) : reqError ? (
        <div className={styles.erorsBlock}>
          <h4>Author post error</h4>
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName">
            <input {...register("firstName", { required: true })} />
            <span>First Name</span>
          </label>
          {errors.firstName && <span>This field is required</span>}

          <label htmlFor="middleName">
            <input {...register("middleName", { required: true })} />
            <span>Middle Name</span>
          </label>
          {errors.middleName && <span>This field is required</span>}

          <label htmlFor="lastName">
            <input {...register("lastName", { required: true })} />
            <span>Last Name</span>
          </label>
          {errors.lastName && <span>This field is required</span>}

          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      )}
    </>
  );
};

export default AuthorForm;
