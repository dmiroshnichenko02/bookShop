import { FC, PropsWithChildren } from 'react'
import { FieldErrors } from 'react-hook-form';
import { IBook } from '../../../types/book.types';

interface Inputss extends IBook {}


interface InputsProps<T> {
    register: object;
    name: keyof T | string;
    errors: FieldErrors<Inputss>;
    type?: string
  }

const Inputs: FC<PropsWithChildren<InputsProps<Inputss>>> = ({ register, name, errors, type = 'text'}) => {
  return (
    <>
        <label htmlFor={name}>
          <input {...register} type={type}/>
          <span>{name}</span>
        </label>
        {errors.name && <span>This field is required</span>}
    </>
  )
}

export default Inputs