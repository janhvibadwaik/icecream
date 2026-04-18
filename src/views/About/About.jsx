import BodyContainer from './../../components/BodyContainer/BodyContainer';
import Footer from './../../components/Footer/Footer';
import Navbar from './../../components/Navbar/Navbar';
import './About.css';
function About() {
  return (
    <div>
      <Navbar active="about"/>
    <BodyContainer>
        <h1>About</h1>
      </BodyContainer>
      <Footer />
    </div>
  )
}

export default About;