import React from 'react'
import './css/Footer.css'

export default function Footer () {
  return (
    <>
        <footer className='w-100 bg-light text-center'>
        <p>
              &copy; {new Date().getFullYear()} Prama Technology Pvt. Ltd. | All Rights Reserved | Terms and Conditions
            </p>
        </footer>
    </>
  )
}

