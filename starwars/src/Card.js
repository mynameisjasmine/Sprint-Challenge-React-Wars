import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
color: red;
font-size: 1.5rem;
background-color: black;
margin: 0px 20px 0px 20px;
`

const StyledFilms = styled.div`
background-color: white;
margin: 0px 20px 0px 20px;
width: 75%;
display: flex;

`

function Card(props) {
    return(
 <div className="people-card">

    <StyledFilms>{props.value.films}</StyledFilms>
    <StyledCard>{props.value.name}</StyledCard>
</div>
);

}
export default Card