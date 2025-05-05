import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar">
			<ul className="navbar-list">
				<NavLink to="/" className="navbar-item">
					<button className="navbar-link  active" data-nav-link>
						Home
					</button>
				</NavLink>
				<NavLink to="/about" className="navbar-item">
					<button className="navbar-link  " data-nav-link>
						About
					</button>
				</NavLink>

				<NavLink to="/portfolio" className="navbar-item">
					<button className="navbar-link" data-nav-link>
						Portfolio
					</button>
				</NavLink>

				<NavLink to="/contact" className="navbar-item">
					<button className="navbar-link" data-nav-link>
						Contact
					</button>
				</NavLink>
			</ul>
		</nav>
	);
}
