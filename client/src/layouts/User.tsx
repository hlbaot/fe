import Head from '../components/Head';
import Contact from '../pages/Contact';
import Explore from '../pages/Explore';
import Home from '../pages/Home';
import Review from '../pages/Review';
import Service from '../pages/Service';
import '../assets/styles/User.scss';

function User() {
   return (
      <div className='user'>
         <Head/>
         <section id="home">
         <Home/>
         </section>
         <section id="explore">
         <Explore/>
         </section>
         <section id="service">
         <Service/>
         </section>
         <section id="reviews">
         <Review/>
         </section>
         <section id="contact">
         <Contact/>
         </section>
      </div>
   )
}

export default User;
