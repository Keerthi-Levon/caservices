import our_clients_icon_one from '../../Assets/client.png'
import our_clients_icon_two from '../../Assets/client1.png'
import our_clients_icon_three from '../../Assets/client2.svg'
import our_clients_icon_four from '../../Assets/image-2.png'
import our_clients_icon_five from '../../Assets/client3.svg'
import our_clients_icon_six from '../../Assets/client5.png'

const OurClients = () => {
  return (
    <section className='mt-5'>
      <div className='container'>
        <div className='our-clients'>
          <h3>
            <span style={{ color: "#266f96" }}>Our</span>
            <span style={{ color: '#65c2f8' }}> Clients</span>
          </h3>
          <p>We Have Been Working With Some Fortune 500+ Clients</p>

          <div className="logo-slider">
            <div className="logo-slide-track">
              <img src={our_clients_icon_one} className="our-client-icon" alt="" />
              <img src={our_clients_icon_two} className="our-client-icon" alt="" />
              <img src={our_clients_icon_three} className="our-client-icon" alt="" />
              <img src={our_clients_icon_four} className="our-client-icon" alt="" />
              <img src={our_clients_icon_five} className="our-client-icon" alt="" />
              <img src={our_clients_icon_six} className="our-client-icon" alt="" />

              <img src={our_clients_icon_one} className="our-client-icon" alt="" />
              <img src={our_clients_icon_two} className="our-client-icon" alt="" />
              <img src={our_clients_icon_three} className="our-client-icon" alt="" />
              <img src={our_clients_icon_four} className="our-client-icon" alt="" />
              <img src={our_clients_icon_five} className="our-client-icon" alt="" />
              <img src={our_clients_icon_six} className="our-client-icon" alt="" />
            </div>
          </div>

          <div className='our-clients-detail'>
            <h1>100+ <br /><span>Happy Customers</span></h1>
            <h1>50+ <br /><span>Successful Projects</span></h1>
            <h1>98% <br /><span>Client Satisfaction Rate</span></h1>
            <h1>50+ <br /><span>Skilled Experts</span></h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurClients;
