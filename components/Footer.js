import React from 'react';
import styles from '../styles/Footer.module.css'
import Link from 'next/link'





const Footer = () => {
    return (
      <div className={styles.footer}>      
      <section className={styles.social_media}>
        <div className={styles.social_media_wrap}>
          <div className={styles.footer_logo}>
            <a className={styles.social_logo}>
              <p>Drug Controll Administration</p>  
            </a>
          </div>
          <small className={styles.website_rights}>DCA © 2020</small>
       
          <div className={styles.social_icons}>
           <a className={styles.social_icon_link}><Link
              href='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fa fa-facebook-f' />
            </Link></a>

            <a className={styles.social_icon_link}>
             
            <Link               
              href='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fa fa-instagram' />
            </Link>
            </a> 
            <a className={styles.social_icon_link}>          

            <Link               
              href='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fa fa-youtube' />
            </Link>
            </a>
            <a className={styles.social_icon_link}>
            <Link               
              href='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fa fa-twitter' />
            </Link>
            </a>
            <a  className={styles.social_icon_link}>
            <Link              
              href='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fa fa-linkedin' />
            </Link>
            </a>
        
         
              
          </div>
        </div>
      </section>
    </div>
    )
  }
  
  export default Footer

