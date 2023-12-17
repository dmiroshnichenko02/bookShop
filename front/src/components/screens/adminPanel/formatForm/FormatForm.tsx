import { FC, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import useFormatServices from "../../../../services/formatServices";

import styles from "../adminPanel.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

type Inputs = {
  format: string;
};

interface IResFormat {
  id: number | undefined;
    format: string | string[];
}

const FormatForm: FC = () => {
  const [reqError, setReqError] = useState(false);
  const [send, setSend] = useState(false);
  const [response, setResponse] = useState<IResFormat>();

  const token = useSelector((state: RootState) => state.login.token);

  const { postFormat } = useFormatServices();

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      format: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const newData = JSON.stringify(data);
      const res = await postFormat(newData, token);
      if(res) {
        setValue("format", "");
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
        <h4>Successful add format</h4>
        <div className={styles.author}>
          <h4>
            Format: <span>{response?.format}</span>
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
        <h4>Format post error</h4>
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
      <form onSubmit={handleSubmit(onSubmit)} className={styles.format}>
      <label htmlFor="firstName">
        <input {...register("format", { required: true })} />
        <span>Format</span>
      </label>
      {errors.format && <span>This field is required</span>}

      <button type="submit" className="submit-btn">
        Send
      </button>
    </form>
    )}
  </>
  );
};

export default FormatForm;
