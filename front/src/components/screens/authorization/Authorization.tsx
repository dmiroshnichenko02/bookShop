import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./authorization.module.scss";
import { IReg } from "../../../types/auth.types";
import Inputs from "../../ui/inputs/Inputs";
import openEye from "../../../../public/closed.png";
import closeEye from "../../../../public/opens.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useUserServices from "../../../services/authServices";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../../../store/login/login.slice.ts";
import Cookies from "js-cookie";

const Login: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const { login } = useUserServices();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object({
    login: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReg>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IReg> = async (data) => {
    try {
      const newData = JSON.stringify(data);
      console.log(newData);

      const res = await login(newData);
      console.log(res);
      const userData = {
        token: res.token,
        user: res.roles[0].role,
        id: res.user_id,
      };
      if(res.roles[0].role === "ADMIN") {
        Cookies.set("authCookieAdminToken", res.token);
      }
      Cookies.set("authCookie", "auth");
      Cookies.set("authCookieId", res.user_id.toString());

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
            <h2 className={styles.title}>Sign in</h2>

            {error ? (
              <div className={styles.errorBlock}>
                <div className={styles.error}>Something went wrong</div>
                <div
                  className={styles.tryAgain}
                  onClick={() => {
                    setError(false);
                    // Аннулирование полей формы при повторной попытке
                    reset();
                  }}
                >
                  Try again
                </div>
              </div>
            ) : (
              <div className={styles.form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={`${styles.authField} ${styles.blockInput}`}>
                    <Inputs
                      register={{ ...register("login", { required: true }) }}
                      name="login"
                      errors={errors}
                    />
                    {errors.login && (
                      <span className={styles.regError}>
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className={`${styles.passAuth} ${styles.password}`}>
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
                        This field is required
                      </span>
                    )}
                  </div>

                  <Link className={styles.already} to="/registration">
                    <div>Don't have an account?</div>
                  </Link>

                  <button type="submit">Sign in</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
