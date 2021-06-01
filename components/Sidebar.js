import content from '../data.content';
import Link from 'next/link';
import styles from '../styles/Header.module.css'




export default function Sidebar() {
  return (
      <>
       <section className="container">                               
          <div className="row">
              <section className={styles.menu}>     
      {
        content.sidebar.map((details) =>
          <>
          <h4>{details.header}</h4>
        
          <ul className={styles.details}>
          {details.paragraph.map(page =>
                <li key={page.id}>
                  <span>
                  <strong>
                    <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                  </strong>
                  </span>
                  <Link href={page.link} as={page.link}>
                    <a>{page.p}</a>
                    
                  </Link>
                </li>,
            )}
          </ul>
        
          </>
         
        )
      }  

       </section>
                </div>
            </section>    
      </>
  );
}
