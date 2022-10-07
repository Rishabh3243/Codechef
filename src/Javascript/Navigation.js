import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Main css/nav_bar.css';
<script src="https://kit.fontawesome.com/a076d05399.js"></script>
function Nav() {
    return (
        <nav>
        <input type="checkbox" id="check"></input>
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <label class="logox"><img src="../Images/CodeChef_BVM_Chapter-logo.png"></img></label>
        <ul>
          <li><a class="activex" href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Feedback</a></li>
        </ul>
      </nav>
    );
  }
  
export default Nav;