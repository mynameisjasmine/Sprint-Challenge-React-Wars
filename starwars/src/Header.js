import React  from 'react';
import styled from 'styled-components';



function Header(props) {
    return(
        <div>
        <p>{props.name}</p>
        <p>{props.link}</p>
         </div>
    )
    
}
export default Header