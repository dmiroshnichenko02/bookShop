import { FC } from 'react';

import { useForm, SubmitHandler } from "react-hook-form"

import useLanguageServices from '../../../../services/languageServices';

import styles from '../adminPanel.module.scss';

type Inputs = {
  language: string
}

const FormatForm: FC = () => {

    const {postLanguage} = useLanguageServices();

    const {
        register,
        setValue,
        handleSubmit,
        // watch,
        formState: { errors },
      } = useForm<Inputs>({
        defaultValues: {
          language: "",
            
        }
      })
      const onSubmit: SubmitHandler<Inputs> = async(data) => {
        console.log(data);

        const newData = JSON.stringify(data)

        const res = await postLanguage(newData);
        console.log(res);
        setValue('language', "")
      }

      

      

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.lang}>
        <label htmlFor="language">
            <input {...register("language", { required: true })} />
            <span>language</span>
        </label>
        {errors.language && <span>This field is required</span>}

        <button type="submit" className="submit-btn">Send</button>
      </form>
    </>
  );
}

export default FormatForm