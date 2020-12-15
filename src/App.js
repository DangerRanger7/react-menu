import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import Button from "react-bootstrap/Button";
import { Container, Row, Grid, Col } from "react-bootstrap";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <Container className="center">
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(" +
            "https://images.unsplash.com/photo-1577859714523-5f0b6c98ece7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" +
            ")",
          backgroundPosition: "center",
          height: "300px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <h1 className="heroText">Treat Your Taste Buds</h1>
      </div>
      <div className="menuTitile">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>

      <div className="button-list">
        <Categories categories={categories} filterItems={filterItems} />
      </div>

      <Row>
        <Col>
          <Menu items={menuItems} />
        </Col>
      </Row>
    </Container>
    /* <main className="center">
      
      <div class="header">
        
      </div>
      <section>
        <div>
          <h2>Our Menu</h2>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>*/
  );
}

export default App;
