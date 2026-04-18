import BodyContainer from './../../components/BodyContainer/BodyContainer';
import Footer from './../../components/Footer/Footer';
import Navbar from './../../components/Navbar/Navbar';
import PageTitle from './../../components/PageTitle/PageTitle';
import { OUR_SERVICES } from './../../config';
import './OurService.css';

function OurService() {
  return (
    <div>
    <Navbar active="ourservice"/>
    <PageTitle title="We provide delicious ice cream!" subtitle="Freshly made daily with the finest ingredients." />
    <BodyContainer>
      <div className="services-container">
        
        {OUR_SERVICES.map((serviceDetail,index)=>{
        return (
            <div key={index} className='service-card'>
              {serviceDetail.icon}
              <h2 className='service-card-title'>{serviceDetail.title}</h2>
              <p className='service-card-description'>{serviceDetail.description}</p>
            </div>
        );
    })}
    </div>
      </BodyContainer>
      <Footer />
    </div>
  )
}

export default OurService;