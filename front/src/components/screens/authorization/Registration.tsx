import { FC, useState } from "react";

import useUserServices from "../../../services/authServices";
import { useForm, SubmitHandler } from "react-hook-form";

import styles from "./authorization.module.scss";
import { IRegister } from "../../../types/auth.types";
import Inputs from "../../ui/inputs/Inputs";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import openEye from "../../../../public/closed.png";
import closeEye from "../../../../public/opens.png";

import { useDispatch } from "react-redux";
import { actions } from "../../../store/login/login.slice.ts";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Registration: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const { postUser } = useUserServices();

  const dispatch = useDispatch();

  const schema = yup.object({
    login: yup
      .string()
      .email("Login must be valid email")
      .required("Login must be valid email"),
    password: yup
      .string()
      .required("Password is required field")
      .min(8, "The password must contain at least 8 characters")
      .matches(/[0-9]/, "The password must contain at least 1 digit")
      .matches(/[A-Z]/, "Password must contain at least 1 capital letter"),
    confirmPassword: yup
      .string()
      .required("Confirm the password")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

  const {
    register,
    // setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IRegister> = async (data) => {
    try {
      const newData = {
        login: data.login,
        password: data.password,
        rolesIDS: [2],
      };

      console.log(JSON.stringify(newData));

      const res = await postUser(JSON.stringify(newData));

      const userData = {
        token: "",
        user: res.roles[0].role,
        id: res.id,
      };
      console.log(userData, "user");

      Cookies.set("authCookie", "auth");
      dispatch(actions.isLogin(userData));

      navigate("/");
    } catch (error) {
      console.error("Error decoding token:", error);
      setError(true);
      reset();
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <div className={styles.registration}>
        <div className="container">
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Sign up</h2>

            {error ? (
              <div className={styles.errorBlock}>
                <div className={styles.error}>Something went wrong</div>
                <div
                  className={styles.tryAgain}
                  onClick={() => {
                    setError(false);
                    reset();
                  }}
                >
                  Try again
                </div>
              </div>
            ) : (
              <div className={styles.form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.blockInput}>
                    <Inputs
                      register={{ ...register("login", { required: true }) }}
                      name="login"
                      errors={errors}
                    />
                    {errors.login && (
                      <span className={styles.regError}>
                        {errors.login.message}
                      </span>
                    )}
                  </div>
                  <div className={`${styles.password} ${styles.firstPass}`}>
                    <Inputs
                      register={{ ...register("password", { required: true }) }}
                      name="password"
                      errors={errors}
                      type={showPassword ? "text" : "password"}
                    />
                    <div className={styles.showPass}>
                      <img
                        src={showPassword ? closeEye : openEye}
                        alt="Toggle Password"
                        onClick={handleTogglePassword}
                      />
                    </div>
                    {errors.password && (
                      <span className={styles.regError}>
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <div className={styles.password}>
                    <Inputs
                      register={{
                        ...register("confirmPassword", { required: true }),
                      }}
                      name="confirm Password"
                      errors={errors}
                      type={showPassword ? "text" : "password"}
                    />
                    <div className={styles.showPass}>
                      <img
                        src={showPassword ? closeEye : openEye}
                        alt="Toggle Password"
                        onClick={handleTogglePassword}
                      />
                    </div>
                    {errors.confirmPassword && (
                      <span className={styles.regError}>
                        {errors.confirmPassword.message}
                      </span>
                    )}
                  </div>
                  <Link className={styles.already} to="/login">
                    <div>Already sign up?</div>
                  </Link>

                  <button type="submit">Sign up</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
