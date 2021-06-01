import content from '../data.content';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';
import styles from '../styles/Styles.module.css';




export default function Bloodbanks() {
  return (
      <>      
        {
          content.BloodBanks.map((information) =>
          <section className="container">
              <div className="row">
                 <section className="col-lg-8 p-4 ">
                 <div className={styles.content}>
                     <h3>{information.heading}</h3>                                    
                     <h5 >{information.p}</h5>  
                       {
                         information.content.map((details) =>
                         <ul >         
                          <li key={details.id}>
                            <strong>
                                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                            </strong>
                            <Link href={details.link} as={details.link}><a className={styles.subheader}>{details.description}</a></Link>
                          </li>
                     </ul>
                        )}
                  </div>                                                                                           
                  </section> 
                  
                 <secton className="col-lg-4">
                    <Sidebar />
                  </secton>                                               
               </div>
          </section>
           )}                       
                 
     
      </>
  ); 
}