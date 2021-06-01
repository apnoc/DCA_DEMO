import content from '../data.content';
import Sidebar from '../components/Sidebar'
import styles from '../styles/About.module.css'




export default function Aboutus() {
  return (
      <>
      <div className="about">
        {
        content.about.map((information) =>  
        <>
           <section className="container ">
                <div className="row">
                     <section className="col-lg-8 " id={styles.content}>
                         <h3 >{information.heading}</h3>
                          <h4 >{information.sub_header}</h4>
                          {
                            information.paragraph.map((content) => 
                                <>   
                                <section className="text-justify">
                                <p className={styles.subheader2}> 
                                     {content.p}</p>  
                                  
                                  </section>                                               
                                                                                
                                 </>                                            
                             )                                          
                           }      
                      </section>
                      <secton className="col-lg-4">
                            <Sidebar />
                      </secton>
                </div>
            </section>
        </>
        )
}
      </div>
        
      </>
  ); 
}