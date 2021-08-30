import Product from "../Product/Product"
import Bag from "../Bag/Bag"
import Seasons from "../Seasons/Seasons" 
import Header from '../Header/Header'
import Nav from '../Nav/Nav' 
import './ProductGrid.css'

export default function ProductGrid() {
    return (
        <div className="grid-div">
            <Nav />
            <main>
                <div className='row center'>
                    <Seasons />
                </div>
            </main>
            <footer>
                &copy; Will, Brooks, Michael, and Nick Co.
            </footer>
            {/* { products.map( product => (
                <Product key={product._id} product={product} />
                )
            )} */}
        </div>
    );
}