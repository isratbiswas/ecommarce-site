import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        // <div> 
        //     <ul>
        //       <li>
        //         <Link to="/">Home</Link>
        //         </li>
        //         <li>
        //         <Link to="/about">About</Link>

        //         </li>
        //         <li>
        //         <Link to="/notes">Notes</Link>
        //         </li>
        //        <li>
        //        <Link to="/team">Team</Link>

        //        </li>
        //        <li>
        //         <Link to="/posts">Posts</Link>
        //       </li>
        //          </ul>     
        //    </div>
        <div>
            <p>
      You've been logged out.{" "}
      <Link to="/login">Login again</Link>
    </p>
        </div>
    )
}

export default Navbar