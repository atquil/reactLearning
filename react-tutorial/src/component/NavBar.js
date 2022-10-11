import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function NavBar(props) {

  const [style, setStyle] = useState({
      color: "blak",
  });

  const [mode, setMode] = useState({
      currentMode: "light",
      currentModeText: "Light Mode",
  });

  const switchMode = ()=>{
      if(mode.currentMode === "light") {
          setMode({
              currentMode:"dark",
              currentModeText:"Dark Mode",     
          });

          setStyle({
              color: "white",
          });
      } else{
          setMode({
              currentMode: "light",
              currentModeText: "Light Mode",
          });
          setStyle({
              color: "black",
          })
      }    
  }

  return (
    <nav className= {`navbar navbar-expand-lg bg-${mode.currentMode} navbar-${mode.currentMode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                    </li> 
                </ul>
                <div className="modeContainer">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" onClick={switchMode} role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={style}>{mode.currentModeText}</label>
                        </div>     
                </div>
            </div>
        </div>
    </nav>
  )
}

//Making the title Required
NavBar.propTypes = {
    navBarTitle : PropTypes.string.isRequired,
}
NavBar.defaultProps = {
    navBarTitle: "Atquil"
}