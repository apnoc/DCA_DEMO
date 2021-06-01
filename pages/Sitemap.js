import content from '../data.content';
import Sidebar from '../components/Sidebar'
import Link from 'next/link';
import styles from '../styles/Styles.module.css';




export default function sitemap() {
  return (
      <>
      <div className="Content__Background">
        {
          content.Sitemap.map((information) => 
          <section className="container">
              <div className="row">
                 <section className="col-lg-8 p-4 ">
                 <div className={styles.content}>
                            <h3>{information.heading}</h3>                                    
                             <h5 >{information.p}</h5>  
                             <h5>{information.header}</h5>  
                             <ul className={styles.details}>         
                          <li key={information.id}>
                            <strong>
                                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                            </strong>
                            <Link href={information.link} as={information.link}><a className={styles.subheader}>{information.description}</a></Link>
                          </li>
                     </ul> 
                     </div>                                                                                           
                  </section> 
                  
                 <secton className="col-lg-4">
                    <Sidebar />
                  </secton>                                               
               </div>
          </section>
           )}                       
                 
      </div>
      </>
  ); 
}