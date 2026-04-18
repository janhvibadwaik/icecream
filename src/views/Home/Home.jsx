import BodyContainer from './../../components/BodyContainer/BodyContainer';
import Footer from './../../components/Footer/Footer';
import Navbar from './../../components/Navbar/Navbar';
import PageTitle from './../../components/PageTitle/PageTitle';
import ProductCard from './../../components/ProductCard/ProductCard';
import { PRODUCTS } from './../../config';
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
    <PageTitle title="Welcome to Our Ice Cream Shop" subtitle="Enjoy the best ice cream in town!" />
    <BodyContainer>
        
        <div className="products-container">
        {PRODUCTS.map((product)=>{
            return <ProductCard product={product} key={product.id}/>
})}
        </div>
      </BodyContainer>
      <Footer />
    </div>
  );
}

export default Home;