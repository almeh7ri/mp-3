import styled from 'styled-components';

// Styling the input fields using styled-components
const StyledInputs = styled.input`
    display: block; // Each input is displayed as a block-level element
    margin: 2vh auto; // Adds vertical margin and centers the input horizontally
    font-family: "Minecraft", sans-serif; // Uses Minecraft font for styling
`;

// Define the type for the props the Inputs component will receive
type InputsProps = {
    firstInput: number | undefined; // First input value
    secondInput: number | undefined; // Second input value
    setFirstInput: (value: number | undefined) => void; // Function to set the first input value
    setSecondInput: (value: number | undefined) => void; // Function to set the second input value
};

// Inputs component definition
// Takes firstInput, secondInput, setFirstInput, setSecondInput as props
export default function Inputs({firstInput, secondInput, setFirstInput, setSecondInput}: InputsProps) {
    return (
        <div>
            {/* Input field for the first number */}
            <StyledInputs
                type="number" // Input type is set to number
                placeholder="First Number" // Placeholder text to indicate this is the first number
                value={firstInput} // Bound to the firstInput value from props
                onChange={(e) => setFirstInput(Number(e.target.value))} // Updates firstInput on change
            />

            {/* Input field for the second number */}
            <StyledInputs
                type="number" // Input type is set to number
                placeholder="Second Number" // Placeholder text to indicate this is the second number
                value={secondInput} // Bound to the secondInput value from props
                onChange={(e) => setSecondInput(Number(e.target.value))} // Updates secondInput on change
            />
        </div>
    )
}
