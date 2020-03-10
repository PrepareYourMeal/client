import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <nav id="navigation" className="menu nav-collapse">
        <ul>
        <li><a href="#">Home</a></li>
			<li>
				<a href="#">Home</a>
			  </li>
			  <li>
				<a href="#">About</a>
			  </li>
			  <li>
				<a href="#">Recipes</a>
			  </li>
			  <li>
				<a href="#">Login</a>
			  </li>
         
          <li>
            <a href="#" className="btn btn-primary">Submit Recipe</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
