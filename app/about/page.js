'use client'
import { Container } from "@material-ui/core";
import { Rating } from "@mui/material";


const About =()=>{
    return(
        <Container>
            <ul>
                <li><strong>Розмір (сітка на 12) </strong>
                <ul>
                    <li>item xs=12 sm=6 md=4 lg=2</li>
                    <li><strong>xs</strong> extra small (зазвичай мобільні пристрої). </li>
                    <li><strong>md</strong> medium (зазвичай планшети)</li>
                    <li><strong>lg </strong> large (зазвичай настільні комп`ютери)</li>
                </ul>
                </li>
                <li><strong>Rating</strong> <Rating value={5}></Rating></li>
                <li><strong>sx= bgcolor:  green500  </strong> import green  from @mui/material/colors</li>

            </ul>
        </Container>
    )
}

export default About;