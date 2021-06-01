import content from '../data.content';
import Sidebar from '../components/Sidebar'
import styles from '../styles/Rti.module.css'




export default function rtiact() {
  return (
      <>
      <div>
        {
          content.rti.map((information) => 
          <section className="container">
              <div className="row">
                 <section className="col-lg-8 p-4 ">
                   <section className={styles.content}> 
                  
                            <h3>{information.heading}</h3>
                            <h4>{information.header}</h4>
                            <p className="p-2">{information.paragraph}</p>   
                            </section>                                                                                          
                  </section> 
                  
                 <secton className="col-lg-4 p-4">
                    <Sidebar />
                  </secton>                                               
               </div>
          </section>
           )}                       
                 
      </div>
      </>
  ); 
}