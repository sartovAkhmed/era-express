import React, { useContext } from "react";
import "./ExploreMenu.css";
import { StoreContext } from "../../Context/StoreContext";

const ExploreMenu = (props) => {
  const { category, setCategory } = props;

  const { menu_list } = useContext(StoreContext);

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Исследуйте наше меню</h1>
      <p className="explore-menu-text">
        Выберите из разнообразного меню, включающего аппетитные блюда. Наша
        миссия — удовлетворить ваши вкусы и улучшить ваш опыт ужина, предлагая
        каждое блюдо как настоящую вкусную историю.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                src={item.menu_image}
                className={category === item.menu_name ? "active" : ""}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
