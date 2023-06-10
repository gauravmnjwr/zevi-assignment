import ProductCardComponent from "./components/ProductCard";
import NavbarComponent from "./components/NavbarComponent";
// import FilterComponent from "./components/FilterComponent";
import { productDataGenerator } from "./components/dataGenerator/DataGenerator";
import { useState } from "react";

function App() {
  const [data, setData] = useState(productDataGenerator());
  console.log(data);

  const searchQuery = (q) => {
    const obj = productDataGenerator();
    if (q) {
      const renderedData = obj.filter((e, i) => {
        return e.name.toLowerCase().includes(q.toLowerCase());
      });
      setData(renderedData);
    } else {
      setData(obj);
    }
  };

  const getFilters = (filter) => {
    console.log(filter);
    const obj = productDataGenerator();
    const renderedData = obj.filter((o, i) => {
      // if()
    });
  };

  return (
    <div className="App">
      <NavbarComponent searchQuery={searchQuery} />
      <ProductCardComponent data={data} getFilters={getFilters} />
    </div>
  );
}

export default App;
