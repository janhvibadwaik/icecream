import BodyContainer from './../../components/BodyContainer/BodyContainer';
import Footer from './../../components/Footer/Footer';
import Navbar from './../../components/Navbar/Navbar';
import ProductCard from './../../components/ProductCard/ProductCard';
import PRODUCTS from './../../config';
import './Home.css';
/*function Card({children}){
    return (
        <div className="card">
            {children}
        </div>
    );

}*/

function Home() {
  return (
    <div >
    <Navbar active="home"/>
    <BodyContainer>
        
        <div className="products-container">
        {PRODUCTS.map((product)=>{
            return <ProductCard product={product}/>
})}
        </div>
      </BodyContainer>
      <Footer />
    </div>
  );
}

export default Home;