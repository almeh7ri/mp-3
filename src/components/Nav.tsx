import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation between routes
import styled from "styled-components"; // Importing styled-components for defining styles

// Styling for the main navigation container
const StyledNav = styled.nav`
    display: flex; // Flexbox for layout
    flex-direction: column; // Vertically align items
    max-width: 30%; // Set a maximum width of 30%
    height: 100%; // Occupy full height
    background-color: antiquewhite; // Set background color
    padding: 0 5% 5% 5%; // Padding around the edges

    @media screen and (max-width: 750px){ // Adjust styles for smaller screens
        max-width: 100%; // Set width to full on small screens
        margin: auto;
        padding: 0;
    }
`;

// Styling for the unordered list (ul) within the nav
const StyledUl = styled.ul`
    justify-content: space-evenly; // Evenly distribute space between items
    padding: 0; // Remove default padding
    width: 100%; // Set full width
    height: 100%; // Set full height
    min-height: 100vh; // Minimum height to occupy full viewport height

    @media screen and (max-width: 750px){ // Adjust styles for smaller screens
        padding: 0;
        margin: 0;
        max-width: 100%; // Full width on small screens
        min-height: 0;
        display: flex; // Horizontal flex layout on small screens
    }
`;

// Styling for the list items (li) in the navigation
const StyledLi = styled.li`
    list-style: none; // Remove bullet points
    padding: 0 0 20% 0; // Add padding to the bottom
    margin: 26% 0; // Vertical margin for spacing

    @media screen and (max-width: 750px) { // Adjust styles for smaller screens
        max-width: 100%; // Full width on small screens
        width: 100%;
        margin: auto;
        padding: 0;
        border: 0.2vw solid darkred; // Add border
        border-left: 0; // Remove left border on small screens
    }
`

// Special styling for the Home link to add left border on mobile view
const StyledHomeLi = styled.li`
    list-style: none; // Remove bullet points
    padding: 0 0 20% 0;
    margin: 26% 0;

    @media screen and (max-width: 750px) { // Adjust styles for smaller screens
        max-width: 100%; // Full width on small screens
        width: 100%;
        margin: auto;
        padding: 0;
        border: 0.2vw solid darkred; // Add border
        border-left: 0.2vw solid darkred; // Add left border for Home link
    }
`

// Styling for the links (StyledLink) within the navigation
const StyledLink = styled(Link)`
    border: 0.2vw solid darkred; // Add border
    font-size: calc(2px + 1vw); // Dynamic font size based on viewport width
    display: block; // Set the display to block
    text-decoration: none; // Remove underline from the link
    color: darkred; // Text color
    background-color: orange; // Background color
    text-align: center; // Center-align text
    padding: 2vh 0; // Vertical padding
    white-space: nowrap; // Prevent text from wrapping

    @media screen and (max-width: 750px) { // Adjust styles for smaller screens
        border: none; // Remove borders
        background-color: orange;
        padding: 0;
        font-size: calc(4px + 1vw); // Adjust font size
        margin: 0;
        white-space: nowrap;
    }
`

// Navigation component containing links to different sections of the website
export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                {/* Home link with special styling */}
                <StyledHomeLi><StyledLink to={'/'}>Home</StyledLink></StyledHomeLi>

                {/* Other links with default list item styling */}
                <StyledLi><StyledLink to={'/projects'}>Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to={'/employment'}>Employment</StyledLink></StyledLi>
                <StyledLi><StyledLink to={'/education'}>Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to={'/extracurriculars'}>Extracurriculars</StyledLink></StyledLi>
                <StyledLi><StyledLink to={'/achievements'}>Achievements</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    )
}
