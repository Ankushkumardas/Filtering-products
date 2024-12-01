
import React, { useState } from 'react';
import Nav from './components/Nav';
import Products from './components/Products';
import Recommended from './components/Recommended';
import Sidebar from './Sidebar';
import products from './db/Data';
import Category from './components/Category';
import Card from './components/Card';

function App() {
  console.log(products);
  // State for category selection
  const [selectedcategory, setselectedcategory] = useState(null);

  // State for input filter
  const [query, setquery] = useState("");

  const handleinputchange = (e) => {
    setquery(e.target.value);
  };

  const filtereditems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  const handleradiochange = (e) => {
    setselectedcategory(e.target.value);
  };

  const handlebuttonchange = (e) => {
    setselectedcategory(e.target.value);
  };

  function filtereddata(products, selected, query) {
    let filteredproducts = products;

    if (query) {
      filteredproducts = filtereditems;
    }

    if (selected) {
      filteredproducts = filteredproducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    
    return filteredproducts.map(
      ({ img, title, newPrice, prevPrice, star, reviews }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          newPrice={newPrice}
          prevPrice={prevPrice}
          star={star}
          reviews={reviews}
        />
      )
    );
  }

  const result = filtereddata(products, selectedcategory, query);

  return (
    <div>
      <Nav query={query} handleinputchange={handleinputchange} />
      <div className="relative flex pt-16">
        {/* Sidebar occupies 1/6 of the width */}
        <div className="w-1/7">
          <Sidebar handleradiochange={handleradiochange} />
        </div>

        {/* Main content occupies 5/6 of the width */}
        <div className="p-4 px-10 ml-40 w-6/7">
          <Recommended handlebuttonchange={handlebuttonchange} />
          <Products result={result} />
        </div>
      </div>
    </div>
  );
}

export default App;