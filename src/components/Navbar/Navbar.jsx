import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link to='/'>Games</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar