import { FC, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import useLanguageServices from "../../../../services/languageServices";

import styles from "../adminPanel.module.scss";
import { RootState } from "../../../../store/store";
import { useSelector } from "react-redux";

type Inputs = {
  language: string;
};

interface IResLanguage {
  id: number | undefined;
  language: string | string[];
}

const FormatForm: FC = () => {
  const [reqError, setReqError] = useState(false);
  const [send, setSend] = useState(false);
  const [response, setResponse] = useState<IResLanguage>();

  const { postLanguage } = useLanguageServices();

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
      language: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const newData = JSON.stringify(data);
      const res = await postLanguage(newData, token);
      if (res) {
        setValue("language", "");
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
          <h4>Successful add language</h4>
          <div className={styles.author}>
            <h4>
              Language: <span>{response?.language}</span>
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
          <h4>Language post error</h4>
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
        <form onSubmit={handleSubmit(onSubmit)} className={styles.lang}>
          <label htmlFor="language">
            <input {...register("language", { required: true })} />
            <span>language</span>
          </label>
          {errors.language && <span>This field is required</span>}

          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      )}
    </>
  );
};

export default FormatForm;
