import BodyContainer from './../../components/BodyContainer/BodyContainer';
import Footer from './../../components/Footer/Footer';
import Navbar from './../../components/Navbar/Navbar';
import PageTitle from './../../components/PageTitle/PageTitle';
import './Contact.css';

function Contact() {
  return (
    <div>
    <Navbar active="contact"/>
    <PageTitle title="You can reach out to us!" subtitle="We'd love to hear from you!" />
    <BodyContainer>
        <h1>Contact</h1>
      </BodyContainer>
      <Footer />
    </div>
  )
}

export default Contact;