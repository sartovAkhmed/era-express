import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Закажите вашу любимую еду прямо здесь</h2>
        <p>
          Выберите из разнообразного меню, включающего изысканные блюда,
          приготовленные из лучших ингредиентов с мастерством кулинарии. Наша
          миссия — удовлетворить ваши вкусы и улучшить ваше кулинарное
          впечатление с каждым вкусным приемом пищи.
        </p>
        <button>Посмотреть меню</button>
      </div>
    </div>
  );
};

export default Header;
