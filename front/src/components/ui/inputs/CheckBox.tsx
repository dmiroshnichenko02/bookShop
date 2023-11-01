import { FC, PropsWithChildren } from "react";

interface InputsProps {
  fullName: string;
  id?: number ;
}

const CheckBox: FC<PropsWithChildren<InputsProps>> = ({
  fullName,
  id,
}) => {
  return (
    <>
      <option value={id}>{fullName}</option>
    </>
  );
};

export default CheckBox;
