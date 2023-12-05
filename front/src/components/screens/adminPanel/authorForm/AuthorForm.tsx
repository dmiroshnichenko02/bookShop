import { FC } from 'react';

import { useForm, SubmitHandler } from "react-hook-form"

import useAuthorServices from '../../../../services/authorServices';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

type Inputs = {
  firstName: string
  middleName: string
  lastName: string
}

const AuthorForm: FC = () => {

  const token = useSelector((state: RootState) => state.login.token)

    const {postAuthor} = useAuthorServices();


    const {
        register,
        setValue,
        handleSubmit,
        // watch,
        formState: { errors },
      } = useForm<Inputs>({
        defaultValues: {
            firstName: "",
            middleName: "",
            lastName: "",
        }
      })
      const onSubmit: SubmitHandler<Inputs> = async(data) => {
        console.log(data);

        const newData = JSON.stringify(data)

        console.log(newData)

        const res = await postAuthor(newData, token);
        console.log(res);
        setValue('firstName', "");
        setValue('middleName', "");
        setValue('lastName', "");
      }
      

  return (
    <>
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

        <button type="submit" className="submit-btn">Send</button>
      </form>
    </>
  );
}

export default AuthorForm