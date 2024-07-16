import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Supplychain(productId){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    useEffect(()=>{
        fetch(`http://localhost:8080/supplychain/${productId}`)
        .then((response) => response.json())
            .then(setData)
            .then(setLoading(false))
            .catch(setError)
    },[])
    return (
        <>
            <div>
                <time>2024-07-11</time>
                <ol>
                    <li>001</li>
                    <li>002</li>
                    <li>003</li>
                    <li>004</li>
                    <li>005</li>
                </ol>
            </div>
        </>
    )

}

function Product(){
    const {id} = useParams()
    const [supplychain, setSupplychain] = useState(null);
    const [error, setError] = useState(null);

    return(
        <>
            <h1 color="blue">Hello from Page product {id} and supplychain {id}</h1>
            <Supplychain productId={id}/>
        </>
    )
}

export default Product