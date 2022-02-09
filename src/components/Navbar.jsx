import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
      </ul>
    </div>
  )
}

