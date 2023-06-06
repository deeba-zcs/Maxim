import './globals.css'


import { Inter } from 'next/font/google'

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
const inter = Inter({ subsets: ['latin'] })

import Link from 'next/link';
import Header from './header/header';
import Footer from './footer/page';
import Maxim from './Home-banner/page';
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
  
    <html lang="en">
      <head>
   <link  href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css"/>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
   </head>
      <body className={inter.className}>

      <Menubar />
      {children}
      <Footer />
      </body>
    </html>
  )
}
