import styled from "styled-components";
import {StyledP, StyledH3} from "../StyledComponents.tsx"; // Importing pre-styled components for paragraph and header

// Styled component for the image
const StyledImg = styled.img`
    width: 30%;  // Image takes up 30% of the width
    margin: 2%;  // Adds margin around the image
    max-width: 40%;  // Limits the maximum width to 40%
    max-height: 30%; // Limits the maximum height to 30%
    
    // Media query for smaller screens (750px or below)
    @media screen and (max-width: 750px){
        margin: 5% 26%;  // Adjusts margins on smaller screens
        width: 40%;  // Increases the width to 40% on smaller screens
    }
`

// Styled component for the container holding the image and text
const StyledDiv = styled.div`
    display: flex;  // Displays content in a flex container (side-by-side layout for image and text)
    
    // Media query for smaller screens (750px or below)
    @media screen and (max-width: 750px){
        display: block;  // Stacks content vertically on smaller screens
    }
`

// Home component for rendering the bio section
export default function Home() {
    return (
        <main>
            {/* Header for the bio section */}
            <StyledH3>My Bio</StyledH3>

            {/* Container for the image and bio text */}
            <StyledDiv>
                {/* Image of myself */}
                <StyledImg alt="picture of myself" src="../../src/images-and-fonts/picture.png"/>

                {/* Paragraph describing me */}
                <StyledP>
                    My name is Ahmed AlMehri, and I was born and raised in Kuwait City, Kuwait, where I lived for 18 years.
                    After graduating high school, I decided to study at Boston University, where I study
                    Computer Science and Economics, with a minor in Data Science.
                </StyledP>
            </StyledDiv>

            {/* Additional paragraph with more details about me */}
            <StyledP>
                In my free time, I enjoy watching movies and exploring the vibrant city of Boston. I love to play squash, travel, and explore new hobbies.
            </StyledP>
        </main>
    )
}
