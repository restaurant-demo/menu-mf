import React from 'react';
import "./Menu.css";
import AddMenu from "../AddMenu";
import Card from "../Card";

const MenuComponent = () => {
  return (
    <>
      <section className="custom-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <AddMenu />
      </section>
    </>
  );
};

export default MenuComponent;
