import BodyContainer from './../../components/BodyContainer/BodyContainer';
import Footer from './../../components/Footer/Footer';
import Navbar from './../../components/Navbar/Navbar';
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
    <div>
    <Navbar active="home"/>
    <BodyContainer>
        <h1>Home</h1>
      </BodyContainer>
      <Footer />
    </div>
  )
}

export default Home;