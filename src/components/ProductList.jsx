import React, { useEffect, useState } from 'react';
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(data=>
            {
                setProducts(data);
                setLoading(false);
            })
            .catch(error=>{
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, []);
  // Show loading text while data is being fetched
    return (
        <div>
            <h2>Product List</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {products.map(product => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default ProductList; 