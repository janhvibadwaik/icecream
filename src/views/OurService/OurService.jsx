import BodyContainer from './../../components/BodyContainer/BodyContainer';
import Footer from './../../components/Footer/Footer';
import Navbar from './../../components/Navbar/Navbar';
import './OurService.css';

function OurService() {
  return (
    <div>
    <Navbar active="ourservice"/>
    <BodyContainer>
        <h1>Our Service</h1>
      </BodyContainer>
      <Footer />
    </div>
  )
}

export default OurService;