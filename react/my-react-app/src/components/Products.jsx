import React from 'react';
import './Products.css';

function Products() {
  const list = [
    {
      id: 1,
      name: "Кепка Red Bull Racing",
      price: "1 499 грн",
      img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: 2,
      name: "Худі Red Bull Team",
      price: "3 299 грн",
      img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: 3,
      name: "Модель боліда F1",
      price: "2 100 грн",
      img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: 4,
      name: "Футболка Verstappen",
      price: "1 850 грн",
      img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=500"
    }
  ];

  return (
    <div className="products">
      <h2>Продукція</h2>

      <div className="box">
        {list.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.name} className="img" />
            <h3 className="name">{item.name}</h3>
            <p className="price">{item.price}</p>
            <button className="btn">Купити</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;