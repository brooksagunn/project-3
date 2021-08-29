import Product from "../Product/Product"
import Header from '../Header/Header'
import './ProductGrid.css'

export default function ProductGrid() {
    return (
    <div className="grid-div">
        
        <main>
            <div className='row center'>
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </main>
        <footer>
            ...
        </footer>
        {/* { products.map( product => (
            <Product key={product._id} product={product} />
            )
         )} */}
    </div>
    );
}