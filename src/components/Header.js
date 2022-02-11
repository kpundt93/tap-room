import React from 'react';

function Header(){
  const headerStyles = {
    fontFamily: 'Roboto',
    fontSize: '2em',
    textAlign: 'center'
  }
  return(
    <React.Fragment>
      <div style={headerStyles}>
        <h1>Tap Room</h1>
      </div>
    </React.Fragment>
  );
}

export default Header;