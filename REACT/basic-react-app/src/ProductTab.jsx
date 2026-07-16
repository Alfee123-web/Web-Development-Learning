import Product from "./Product.jsx";

function ProductTab() {
    let styles = {
display:"flex",
flexWrap :"wrap",
justifyContent:"center",
alignItems:"center"
    };

    return (
      <div style={styles}>
   <Product title="Logictech master" idx={0} />
            <Product title="Zebronics" idx={1} />
            <Product title="Petronics" idx={2} />
            <Product title="Apple pencil" idx={3} />

      </div>
         
    );
}
export default ProductTab;