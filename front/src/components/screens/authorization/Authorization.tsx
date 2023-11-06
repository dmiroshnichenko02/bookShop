import { FC } from "react";

// import useUserServices from "../../../services/authServices";
import { useForm, SubmitHandler } from "react-hook-form";

import styles from "./authorization.module.scss";
import { IReg } from "../../../types/auth.types";
import Inputs from "../../ui/inputs/Inputs";


const Login: FC = () => {

    // const [showPassword, setShowPassword] = useState(false);

    // const handlePassword = () => {
    //     setShowPassword(showPassword => !showPassword);
    // }

    // const { getUserById } = useUserServices();

  const {
    register,
    // setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IReg>();

  const onSubmit: SubmitHandler<IReg> = async (data) => {
    const newData = JSON.stringify(data);

    console.log(newData);

    // const res = await postUser(newData);
    console.log(newData);
  };

  return (
    <>
      <div className={styles.registration}>
        <div className="container">
          <div className={styles.wrapper}>
            <h2>Sign up</h2>

            <div className={styles.form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Inputs
                  register={{ ...register("login", { required: true }) }}
                  name="login"
                  errors={errors}
                />
                <div className={styles.pass}>
                <Inputs
                  register={{ ...register("password", { required: true }) }}
                  name="password"
                  errors={errors}
                  type="password"
                />
                <div className={styles.showPass}></div>
                </div>

                <button type="submit">Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
