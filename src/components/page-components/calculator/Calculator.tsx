import styled from "styled-components";
import Inputs from "./Inputs.tsx"; // Importing Inputs component for input fields.
import Buttons from "./Buttons.tsx"; // Importing Buttons component for calculation buttons.
import { useState } from "react"; // Importing useState hook for managing state.


// Styling for the main container using styled-components
const StyledMain = styled.main`
    /* Background image of Minecraft theme */
    background-image: url(../../../../src/images-and-fonts/minecraft-background.jpg);
    background-size: 100% 100%;
    font-size: calc(5px + 2vw);
    width: 100%;
    min-height: 100vh;
    text-align: center;
    padding-bottom: min(10%, 10vh);
    margin-top: 0;
`;

// Styling for the title (H2)
const StyledH2 = styled.h2`
    padding-top: max(30%, 40vh);
    font-size: calc(10px + 2vw);
    font-family: "Minecraft", sans-serif;
`;

// Styling for the paragraph showing results (for positive/zero results)
const StyledP = styled.p`
    font-family: "Minecraft", sans-serif;
    font-size: calc(3px + 2vw);
    max-width: 70%;
    margin: 3% auto;
    height: min(2.2vw, 20%);
`;

// Styling for the paragraph showing results (for negative results, styled in red)
const StyledRedP = styled.p`
    font-family: "Minecraft", sans-serif;
    color: darkred;
    font-size: calc(3px + 2vw);
    max-width: 70%;
    margin: 3% auto;
    height: min(2.2vw, 20%);
`;

// Calculator component logic
export default function Calculator() {
    // State to store first input value
    const [firstInput, setFirstInput] = useState<number | undefined>(undefined);

    // State to store second input value
    const [secondInput, setSecondInput] = useState<number | undefined>(undefined);

    // State to store the result of the calculation
    const [result, setResult] = useState<number | undefined>(undefined);

    // Function to perform calculations based on button clicked
    const calculate = (value: string) => {
        if (firstInput !== undefined && secondInput !== undefined) {
            let calcResult: number | undefined = undefined;

            // Perform addition, subtraction, multiplication, division based on the button clicked
            if (value == "+") {
                calcResult = firstInput + secondInput;
            }
            else if (value == "-") {
                calcResult = firstInput - secondInput;
            }
            else if (value == "x") {
                calcResult = firstInput * secondInput;
            }
            else if (value == "/") {
                calcResult = firstInput / secondInput;
            }

            // Clear the inputs if "Clear" button is pressed
            else if (value == "Clear") {
                calcResult = undefined;
                setFirstInput(0);  // Reset first input to 0
                setSecondInput(0); // Reset second input to 0
            }
            setResult(calcResult); // Set the result
        }
    };

    // JSX for rendering the Calculator UI
    return (
        <StyledMain>
            {/* Title of the calculator */}
            <StyledH2>Minecraft Calculator</StyledH2>

            {/* Inputs component for entering numbers */}
            <Inputs
                firstInput={firstInput}
                secondInput={secondInput}
                setFirstInput={setFirstInput}
                setSecondInput={setSecondInput}
            />

            {/* Buttons for each operation */}
            <Buttons onClick={() => calculate("+")} value="+"></Buttons>
            <Buttons onClick={() => calculate("-")} value="-"></Buttons>
            <Buttons onClick={() => calculate("x")} value="x"></Buttons>
            <Buttons onClick={() => calculate("/")} value="/"></Buttons>
            <Buttons onClick={() => calculate("Clear")} value="Clear"></Buttons>

            {/* Display result: If result is positive/zero use StyledP, otherwise use StyledRedP */}
            {result !== undefined && result >= 0 && <StyledP>Result: {result}</StyledP>}
            {result !== undefined && result < 0 && <StyledRedP>Result: {result}</StyledRedP>}
        </StyledMain>
    )
}
