import { render } from '@testing-library/react';
import React,{Component} from 'react';
import './Header.css'

class Header extends Component {
    render(){
        return(
              <div>
                <nav class="navbar navbar-expand-lg " style={{backgroundColor:'#00092C'}} data-bs-theme='dark'>
                <div class='container-fluid'>
                      <a class="navbar-brand Brand" href="/">Zomato</a>
                      <button class="navbar-toggler toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                     </button>
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul class="navbar-nav ms-auto mb-2 mb-lg-0">        
                      <button class="btn btn-light me-3 " type="login" >Login</button>
                        <button class="btn btn-danger me-3  " type="sign up">Sign Up</button>
                        </ul>
                        </div>
                        </div>
                         </nav>
            </div>
        )
    }
}

export default Header;