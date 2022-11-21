import React from 'react'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join with us for the growth of your business
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe any time
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                </form>
            </div>
        </section>
      
    </div>
  )
}

export default Footer
