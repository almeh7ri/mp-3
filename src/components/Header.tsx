import styled from 'styled-components'; // Importing styled-components for styling

// Styled component for the header section
const StyledHeader = styled.header`
    padding: 1%;  // Adds padding around the header content
    background-color: darkred;  // Sets the background color of the header to dark red
    margin: auto;  // Centers the header content
    color: white;  // Sets the text color to white
    @media screen and (max-width: 750px){  // Media query for smaller screens (max-width 750px)
        text-align: center;  // Centers the text on small screens
    }
`

// Styled component for the paragraph inside the header
const StyledP = styled.p`
    font-size: calc(3px + 1vw);  // Dynamically sets the font size based on the viewport width
    padding: 0 0 0 0.3%;  // Adds slight left padding
    @media screen and (max-width: 750px){  // Media query for smaller screens (max-width 750px)
        text-align: center;  // Centers the text on small screens
    }
`

// Styled component for the H1 heading inside the header
const StyledH1 = styled.h1`
    font-size: calc(10px + 3vw);  // Dynamically sets the font size based on the viewport width
`

// Header component to render the website's header section
export default function Header(){
    return (
        <StyledHeader>
            {/* Main header text */}
            <StyledH1>Ahmed AlMehri</StyledH1>

            {/* Subtitle or description under the main header */}
            <StyledP>My Online Resume</StyledP>
        </StyledHeader>
    )
}
