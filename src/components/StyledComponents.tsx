import styled from "styled-components"; // Importing styled-components for defining styles

// Styled component for paragraph (StyledP)
const StyledP = styled.p`
    width: 100%;  // Set the width to 100% of the parent container
    max-width: 100%;  // Maximum width also set to 100%
    padding: 2% 2% 0 2%;  // Padding on top and sides
    font-size: calc(3px + 1.5vw);  // Dynamic font size based on viewport width
`

// Styled component for heading (StyledH3)
const StyledH3 = styled.h3`
    font-size: calc(5px + 3vw);  // Dynamic font size based on viewport width
    margin-left: 2vw;  // Add left margin for spacing
    margin-top: 2%;  // Add top margin for spacing
    @media screen and (max-width: 750px) {  // Media query for smaller screens
        text-align: center;  // Center-align text on small screens
    }
`

// Export the styled components so they can be used in other files
export {StyledP, StyledH3};
