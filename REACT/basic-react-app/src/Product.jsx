import "./Product.css";
import Price from "./Price";

function Product({ title, idx}) {
    let oldPrices = ["20000", "30000", "50000", "60000"];
    let newPrices = ["10000", "25000", "40000", "55000"];
    let description = ["fast", "durable", "wireless", "lightweight"];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}
export default Product;