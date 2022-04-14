import { FaWater } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand">
            <FaWater className="navicon-color" size={30} />
            <span className='px-3'>MJS Dives</span>
          </a>
          <button 
            className='navbar-toggler' 
            type='button' 
            data-bs-toggle="collapse" 
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <Link to='/' className='nav-link'>Home</Link>
              </li>
              <li className="nav-item">
              <Link to='/about' className='nav-link'>About</Link>
              </li>
              <li className="nav-item">
              <Link to='/divetypeinfo' className='nav-link'>DiveType</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="links">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/divetypeinfo'>DiveType</Link>
        </div> */}
      </nav>
    </div>
  )
}

export default Navbar