`use client`
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Head from './head'
// import { useRouter } from 'next/navigation'

import { title } from 'process'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  
  // const router = useRouter();
  return (
    
      
 
      <main className={`${styles.main} ${inter.className}`}>
      
        <div className={styles.description}>
          
          <div>
            
          </div>
        </div>

        <div className={styles.center}>
          Hello World jani

          
        </div>
      <Link href="/posts/page">go to post 1</Link>
      {/* <button type='button' onClick={()=>router.push('./posts/page')}>
        Back to Home
         
      </button> */}

        
      </main>
    
  )
}
