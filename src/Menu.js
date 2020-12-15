import React from "react";

const Menu = ({ items }) => {
  return (
    <div>
      {items.map((menuItem) => {
        const { id, title, price, description } = menuItem;
        return (
          <article key={id}>
            <header>
              <h4>{title}</h4>
              <h4>${price}</h4>
            </header>
            <p>{description}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
