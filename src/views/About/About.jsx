import BodyContainer from './../../components/BodyContainer/BodyContainer';
import Footer from './../../components/Footer/Footer';
import Navbar from './../../components/Navbar/Navbar';
import PageTitle from './../../components/PageTitle/PageTitle';
import './About.css';
function About() {
  return (
    <div>
      <Navbar active="about"/>
      <PageTitle title="Learn More About Us" subtitle="we are a team of passionate ice cream lovers"/>
    <BodyContainer>
        <h1>About</h1>
      </BodyContainer>
      <Footer />
    </div>
  )
}

export default About;