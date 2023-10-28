import { FC } from 'react';

import { useForm, SubmitHandler } from "react-hook-form"

import useAuthorServices from '../../../../services/authorServices';

type Inputs = {
  firstName: string
  middleName: string
  lastName: string
}

const AuthorForm: FC = () => {

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

        const res = await postAuthor(newData);
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

        <input type="submit" />
      </form>
    </>
  );
}

export default AuthorForm