import BodyContainer from './../../components/BodyContainer/BodyContainer';
import Footer from './../../components/Footer/Footer';
import Navbar from './../../components/Navbar/Navbar';
import './NotFound.css';

function NotFound() {
  return (
    <div>
      <Navbar />
    <BodyContainer>
        <h1>NotFound</h1>
      </BodyContainer>
      <Footer />
    </div>
  )
}

export default NotFound;