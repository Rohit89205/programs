import React, { useState, useEffect } from "react";
import "./pagination.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProd = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const data = await res.json();
    console.log(data, "data");

    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(data.total / 10)
    }
  };

  useEffect(() => {
    fetchProd();
  }, [page]);

  const selectPageHandler = (selectedPage) => {
    if(selectedPage > 0 && selectedPage <= totalPages){
      setPage(selectedPage);
    }
  }

  console.log(totalPages, 'ttoal pages page')

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.map((product, index) => {
            return (
              <span className="products__single" key={index}>
                <img src={product.thumbnail} alt={product.title} />
                {product.title}
              </span>
            );
          })}
        </div>
      )}

      {products.length > 0 && <div className="pagination">
          <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? '' : 'pagination__disable'}>◀</span>
          {
            [...Array(totalPages)].map((_, i) => {
              return <span className={page === i + 1 ? 'pagination__selected': ''} onClick={() => selectPageHandler(i + 1)} key={i}>{i + 1}</span>
            })
          }
          <span onClick={() => selectPageHandler(page + 1)} className={page < totalPages ? '' : 'pagination__disable'}>▶</span>
        </div>}
    </div>
  );
};
export default Pagination;
