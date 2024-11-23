import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Товары</p> <p>Название</p> <p>Цена</p> <p>Количество</p>{" "}
          <p>Общая сумма</p> <p>Удалить</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.food_id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.food_image} alt="" />
                  <p>{item.food_name}</p>
                  <p>${item.food_price}</p>
                  <div>{cartItems[item.food_id]}</div>
                  <p>${item.food_price * cartItems[item.food_id]}</p>
                  <p
                    className="cart-items-remove-icon"
                    onClick={() => removeFromCart(item.food_id)}
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Итоги корзины</h2>
          <div>
            <div className="cart-total-details">
              <p>Промежуточный итог</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Стоимость доставки</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Итого</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            ПЕРЕЙТИ К ОФОРМЛЕНИЮ
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Если у вас есть промокод, введите его здесь</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="промокод" />
              <button>Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
