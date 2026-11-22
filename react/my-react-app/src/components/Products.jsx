import './Products.css';


function Products() {
  const list = [
    {
      id: 1,
      name: "Кепка Red Bull Racing",
      price: "1 499 грн",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyEXaken8LtvYMRHng-GAWih2_9iuPehujkKlGes-zAQ&s=10"
    },
    {
      id: 2,
      name: "Худі Red Bull Team",
      price: "3 299 грн",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6UJMOXqXc84CLW7G8yHFZKEJZt8m1xKX-rYJFm_5WDA&s"
    },
    {
      id: 3,
      name: "Модель боліда F1",
      price: "2 100 грн",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSPQDR0LADvmaqAQ-NwYo1i5myoZDimcbPMn21RrEaxP8gmPXI6blEeIqPubj4KpgJPAq6n-NtVqPm3e7iSUF7ZdM5Yhg8QpK3mL0Y7NfQPSfAxkXjTzl3UT7tVso2fN75QwPO0zw&usqp=CAc"
    },
    {
      id: 4,
      name: "Футболка Verstappen",
      price: "1 850 грн",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTqzOeMwuPDv7yMcBySY-HMywuMwIYOPizscXyl18rrtvTij7xF1stkuUAvDw9iBZW-EUS-pBRaRN6x_gr-8E2MzTHYrC4BL9wzcLL_VfI9pa9PcguVYQ3p0hZTSkoi-xn8UG8OiRQ&usqp=CAc"
    }
  ];

  return (
    <section className="products">
      <div className="products-header">
        <h2>Продукція</h2>
        <span className="subtitle">Офіційний мерч Red Bull Racing</span>
      </div>  

      <div className="box">
        {list.map((item) => (
          <div key={item.id} className="card">
            <div className="img-wrap">
              <img src={item.img} alt={item.name} className="img" />
            </div>

            <div className="card-body">
              <h3 className="name">{item.name}</h3>
              <p className="price">{item.price}</p>
              <button className="btn">Купити</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
