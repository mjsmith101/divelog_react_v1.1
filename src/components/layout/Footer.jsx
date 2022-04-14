import React from 'react'

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <div>
      <footer id='footer' className='text-center py-2 bg-dark text-white'>
        <div className="container">
          <p className='lead'>Copyright &copy; MJS Dive Log - {footerYear}</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer