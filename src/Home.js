import { useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

function Home() {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(false)
        const form = e.target;
        const formData = new FormData(form);
        const { myProductId } = Object.fromEntries(formData.entries());
        fetch(`http://localhost:8080/product?id=${myProductId}`)
            .then((response) => response.json())
            .then(setData)
            .then(setLoading(false))
            .catch(setError)
        console.log(myProductId);
    }
    if (loading) return <h1>Loading...</h1>
    if (error !== null) {
        return <pre>{JSON.stringify(error)}</pre>
    }
    if (data === null) return (
        <form method="post" onSubmit={handleSubmit}>
            <label>
                Search Product: <input name="myProductId" defaultValue={1} />
            </label>
            <button type="submit">Search</button>
        </form>
    )
    else return (
        <form method="post" onSubmit={handleSubmit}>
            <label>
                Search Product: <input name="myProductId" defaultValue={1} />
            </label>
            <button type="submit">Search</button>
            <h1>Product id: {data.id}</h1>
            <h2>Product name: {data.name}</h2>
            <Link to={`product/${data.id}`} >{data.id}</Link>
        </form>
    );
}

export default Home;
