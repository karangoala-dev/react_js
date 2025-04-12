import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import ProductCard from "./components/ProductCard";
import './App.css';

export default function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const PAGE_SIZE = 10;
  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  const startIndex = currentPage * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  useEffect(() => {
    let getdata = async () => {
      let fetchPromise = await fetch(
        "https://dummyjson.com/products?limit=200"
      );
      let response = await fetchPromise.json();
      setData(response.products);
    };
    getdata();
  }, []);

  return data.length === 0 ? (
    <h1>Loading products...</h1>
  ) : (
    <div className="App">
      <h2>Products Pagination</h2>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
      <div className="product-container">
        {data.slice(startIndex, endIndex).map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            image={item.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
