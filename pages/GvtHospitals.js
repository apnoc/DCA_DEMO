import content from '../data.content';
import Sidebar from '../components/Sidebar'
import Link from 'next/link';
import styles from '../styles/Styles.module.css'




export default function gvthospital() {
  return (
      <>
      <div >
        {
          content.Medicalgvt.map((information) => 
          <section className="container">
              <div className="row">
                 <section className="col-lg-8 p-4 ">
                 <div className={styles.content}>
                           <h3>{information.heading}</h3>                                    
                           <h5 >{information.p}</h5>  
                          {
                           information.content.map((details) => 
                               <table className="table">
                                     <thead>
                                          {
                                          details.heading.map((tables) =>
                                          <tr>
                                          <th scope="col">{tables.h1}</th>
                                          <th scope="col">{tables.h2}</th>
                                          <th scope="col">{tables.h3}</th>
                                          <th scope="col">{tables.h4}</th>
                                      </tr>)}
                                      </thead>
                                      <tbody>
                                      {
                                         details.Paragraph.map((description) =>
                                         <tr>
                                         <th scope="row">{description.p1}</th>
                                         <td>{description.p2}</td>
                                         <td>{description.p3}</td>
                                         <td>{description.p4}</td>
                                     </tr>
                                         )}
                                      </tbody>                                     
                             </table>
                           )}                                
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