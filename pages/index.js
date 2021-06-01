import content from '../data.content';
import Sidebar from '../components/Sidebar';
import {Carousel} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import styles from '../styles/Header.module.css'



export default function Homepage() {
  return (
      <>
           <section className="hero_section">
            <section className="container  ">                               
                  <div className="row">
                      <section className="col-lg-8 px-1">   
                              <div className={styles.banner}>
                                 
                                 <div>
                                  <img  width="100px" src="/assets/CM.png" alt="logo1"  /> 
                                  <h6>Sri Y.S.Jaganmohan</h6>
                                    <p>Hon'ble Cheif Minister</p>                                 
                                  </div>
                                  <div>
                                  <img width="110px" src="/assets/HM.png" alt="logo1"  />
                                  <h6>Sri Alla Kali Krishna Srinivas </h6>
                                    <p>Hon'ble Minister of Health</p>
                                  </div>
                                  <div>
                                  <img  width="110px" src="/assets/DC.png" alt="logo1"  />
                                    <h6>Sri Ravi Shankar Narayan </h6>
                                    <p>DG Drugs and Copyright</p>
                                  </div>
                                 </div>
                              
                              
                              <section className="testimonials"> 
                             <div className="fixed-bnr">
                        <Carousel className="container" >
                          <Carousel.Item interval={1000}>
                            <img
                              className="d-block w-100"
                              src="/assets/Banner-1.jpg"
                              alt="First slide"
                            />

                          </Carousel.Item>
                          <Carousel.Item interval={1000}>
                            <img
                              className="d-block w-100"
                              src="/assets/Banner-2.jpg"
                              alt="Second slide"
                            />

                          </Carousel.Item>
                          <Carousel.Item interval={1000}>
                            <img
                              className="d-block w-100"
                              src="/assets/Banner-1.jpg"
                              alt="Third slide"
                            />

                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                             className="d-block w-100"
                              src="/assets/Banner-2.jpg"
                              alt="Fourth slide"
                              />
                            </Carousel.Item>
                           <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src="/assets/Banner-1.jpg"
                              alt="Fifth slide"
                              />
                             </Carousel.Item>
                        </Carousel>
                        </div> 
                        </section>
                        <section className="m-5">
                        {
                          content.details.map((e) => 
                            <p ><span><h4  className="main__heading">{e.header} </h4></span>
                               <p  className="sub__heading" >{e.p}</p></p>
                           
                          )}

                        
                        </section>
                        </section>

                     <secton className="col-lg-4 p-4x">
                     {
                       content.Notifications.map((details) =>
                       
                     <div className={styles.notifications} >  
                           <div className="text">
                           <h4  >Notifications</h4>
                           <a  href={details.link}>
                             <marquee direction="up" onmouseover="this.stop();" onmouseout="this.start();">{details.content}</marquee>
                               </a>
                              
                             </div>                             
                              
                           </div>
                        ) }
                       <Sidebar />
                     </secton>  

                  </div>
              </section>
            </section>
      </>
  ); 
}
