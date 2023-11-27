import { FC } from 'react';

import { useForm, SubmitHandler } from "react-hook-form"

import useFormatServices from '../../../../services/formatServices';

import styles from '../adminPanel.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

type Inputs = {
    format: string
}

const FormatForm: FC = () => {

  const token = useSelector((state: RootState) => state.login.token)

    const {postFormat} = useFormatServices();

    const {
        register,
        setValue,
        handleSubmit,
        // watch,
        formState: { errors },
      } = useForm<Inputs>({
        defaultValues: {
            format: "",
            
        }
      })
      const onSubmit: SubmitHandler<Inputs> = async(data) => {
        console.log(data);

        const newData = JSON.stringify(data)

        const res = await postFormat(newData, token);
        console.log(res);
        setValue('format', "")
      }

      

      

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.format}>
        <label htmlFor="firstName">
            <input {...register("format", { required: true })} />
            <span>Format</span>
        </label>
        {errors.format && <span>This field is required</span>}

        <button type="submit" className="submit-btn">Send</button>
      </form>
    </>
  );
}

export default FormatForm