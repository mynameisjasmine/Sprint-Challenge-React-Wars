import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
color: blue;
font-size: 1.5rem;
background-color: black;
margin: 0px 20px 0px 20px;
`

const StyledFilms = styled.div`
background-color: white;
margin: 0 1.3rem 1rem 1.3rem;
width: 94.3%;


`

function Card(props) {
    console.log(props.value);
    return(
 <div className="people-card">

    <StyledCard>{props.value.name}</StyledCard>
    <StyledFilms>Height: {props.value.height}</StyledFilms>
    <StyledFilms>Mass: {props.value.mass}</StyledFilms>
    <StyledFilms>Birth year: {props.value.birth_year}</StyledFilms>
    <StyledFilms>Eye color: {props.value.eye_color}</StyledFilms>
    <StyledFilms>Skin color: {props.value.skin_color}</StyledFilms>
    <StyledFilms>Hair color: {props.value.hair_color}</StyledFilms>
    <StyledFilms>Gender: {props.value.gender}</StyledFilms>
</div>
);

}
export default Card