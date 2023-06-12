import ProductCardComponent from "./components/ProductCard";
import NavbarComponent from "./components/NavbarComponent";
import { productDataGenerator } from "./components/dataGenerator/DataGenerator";
import { useEffect, useState } from "react";
import FilterOperations from "./utils/FilterOperations";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState("");
  const [searchQ, setSearchQ] = useState("");
  const [filterElement, setFilterElement] = useState(null);

  useEffect(() => {
    setData(productDataGenerator());
  }, []);

  const searchQuery = (q) => {
    setSearchQ(q);
  };

  const getFilters = (filterQueries) => {
    setAppliedFilters(filterQueries);
  };

  const filteredDataFromUtils = (newData) => {
    setFilteredData(newData);
    return newData;
  };

  const getFilterRef = (filterRef) => {
    setFilterElement(filterRef);
  };

  return (
    <div className="App">
      <NavbarComponent
        searchQuery={searchQuery}
        filterElement={filterElement}
      />
      <ProductCardComponent
        data={filteredData}
        getFilters={getFilters}
        getFilterRef={getFilterRef}
      />
      <FilterOperations
        data={data}
        searchQ={searchQ}
        filteredDataFromUtils={filteredDataFromUtils}
        appliedFilters={appliedFilters}
      />
    </div>
  );
}

export default App;
