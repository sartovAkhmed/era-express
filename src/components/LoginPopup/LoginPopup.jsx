import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const apiReg = "http://api.era-express.makalabox.com/api/users/";
  const apiAuth = "http://api.era-express.makalabox.com/api/jwt/create/";

  const [currState, setCurrState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // Обработчик изменений в полях ввода
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Отправка данных формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = currState === "Sign Up" ? apiReg : apiAuth; // URL для регистрации или входа
    const data = {
      email: formData.email,
      password: formData.password,
      ...(currState === "Sign Up" && { full_name: formData.fullName }), // Для регистрации добавляем имя
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Ошибка при отправке данных");
      }

      const result = await response.json();
      localStorage.setItem("refresh", result.refresh);
      localStorage.setItem("access", result.access);

      setShowLogin(false); // Закрыть попап при успешной отправке
    } catch (error) {
      console.error("Ошибка:", error.message);
      alert(`Ошибка: ${error.message}`);
    }
  };

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>{" "}
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Закрыть"
          />
        </div>
        <form className="login-popup-inputs" onSubmit={handleSubmit}>
          {currState === "Sign Up" ? (
            <input
              type="text"
              name="fullName"
              placeholder="Ваше имя"
              value={formData.fullName}
              onChange={handleChange}
            />
          ) : null}
          <input
            type="email"
            name="email"
            placeholder="Ваша почта"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">
            {currState === "Login" ? "Войти" : "Создать аккаунт"}
          </button>
        </form>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" />
          <p>
            Продолжая, я соглашаюсь с условиями использования и политикой
            конфиденциальности.
          </p>
        </div>
        {currState === "Login" ? (
          <p>
            Нет аккаунта?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Нажмите здесь</span>
          </p>
        ) : (
          <p>
            Уже есть аккаунт?{" "}
            <span onClick={() => setCurrState("Login")}>Войти</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
