import styled from 'styled-components'; // Importing styled-components for styling
import {Link} from "react-router-dom"; // Importing Link from react-router-dom to create internal links
import {StyledP} from "./StyledComponents.tsx"; // Importing pre-styled paragraph component

// Styled component for the footer
const StyledFooter = styled.footer`
    padding: 1%;  // Adds padding around the footer content
    background-color: darkred;  // Sets the background color of the footer to dark red
    margin: auto;  // Centers the footer content
    color: white;  // Sets the text color to white
`

// Footer component for rendering the footer section
export default function Footer() {
    return (
        <StyledFooter>
            {/* Footer text, with a link to the credits page */}
            <StyledP>
                Rights Reserved by Ahmed AlMehri <Link to={'/credits'}>Credits</Link> &#169;
            </StyledP>
        </StyledFooter>
    )
}
