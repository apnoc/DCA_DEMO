import content from '../data.content';
import Sidebar from '../components/Sidebar'
import styles from '../styles/Services.module.css'




export default function dca() {
  return (
      <>
      <div >
        {
          content.Objectives.map((information) => 
          <section className="container">
              <div className="row">
                 <section className="col-lg-8 p-4 ">
                 <h3 className={styles.content}>{information.heading}</h3>
                     {
                        information.detailservices.map((content) =>  
                         <div>
                           <h4 className={styles.subheader1}>{content.header}</h4>
                           <section>
                              {
                                content.paragraph.map((detail) =>   
                                <ul>
                                  <li className={styles.subheader2}>{detail.p}</li>                                                        
                                </ul>              
                              )}
                              </section>
                              </div>                                         
                        )}                                                                         
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