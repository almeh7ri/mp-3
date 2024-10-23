import styled from "styled-components";

// Define a styled button component with custom styles using the Minecraft font.
const StyledButton = styled.button`
    font-family: "Minecraft", sans-serif;
    max-width: 100%;
    margin: auto;
`;

// Define the type for the Button component's props.
// It takes two props:
// 1. 'value' is the label for the button (string).
// 2. 'onClick' is the function to execute when the button is clicked.
type ButtonProps = {
    value: string;
    onClick: () => void;
}

// The Buttons component accepts the props defined in ButtonProps.
// It renders the StyledButton component and attaches the onClick handler to it.
// The button's label will be whatever is passed as the 'value' prop.
export default function Buttons({ value, onClick }: ButtonProps) {
    return <StyledButton onClick={onClick}>{value}</StyledButton>;
}