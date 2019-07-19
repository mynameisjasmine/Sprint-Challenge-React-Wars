import React from "react";


function Card(props) {
    return(
 <div className="people-card">

    <p>{props.value.films}</p>
    <p>{props.value.name}</p>
</div>
);

}
export default Card