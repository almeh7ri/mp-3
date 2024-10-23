import styled from "styled-components"; // Importing styled-components for styling

// TypeScript interface for defining the props of the ListFunc component
type ListProps = {
    title?: string;   // Optional title
    title2?: string;  // Optional secondary title
    date?: string;    // Optional date
    link?: React.ReactNode;  // Optional link (ReactNode to support JSX or string)
    object1?: string; // Optional object (for a list item)
    object2?: string; // Optional object (for a list item)
    object3?: string; // Optional object (for a list item)
    object4?: string; // Optional object (for a list item)
    object5?: string; // Optional object (for a list item)
}

// Styled component for the title
const Title = styled.li`
    list-style: none;  // No bullet points for list items
    margin: 0;  // Remove margin
    font-size: calc(2px + 1.5vw);  // Dynamic font size based on viewport width
`
// Styled component for each list item (details)
const List = styled.li`
    margin-left: 5%;  // Add left margin for indentation
    font-size: calc(1px + 1vw);  // Dynamic font size
    max-width: 80%;  // Set maximum width
`

// Styled component for the container holding the list items
const ListObject = styled.ul`
    margin: 2vh 0 0 3vw;  // Add top and left margin for positioning
    border-left: 0.75vw solid darkred;  // Vertical border on the left side in dark red color
`

// Styled component for the date
const ListDate = styled.li`
    list-style: none;  // No bullet points for date
    margin: 0;  // Remove margin
    font-size: calc(3px + 1.25vw);  // Dynamic font size
    @media screen and (max-width: 750px) {  // For smaller screens, reduce font size
        font-size: 1.7vw;
    }
`

// Functional component to render a list based on the props passed
export function ListFunc(props: ListProps) {
    return (
        <ListObject>
            {/* Render the title if it's provided */}
            {props.title !== undefined && <Title><b>{props.title}</b></Title>}

            {/* Render the secondary title if it's provided */}
            {props.title2 !== undefined && <Title><em>{props.title2}</em></Title>}

            {/* Render the date if it's provided */}
            {props.date !== undefined && <ListDate><em>{props.date}</em></ListDate>}

            {/* Render the link if it's provided */}
            {props.link !== undefined && <List>{props.link}</List>}

            {/* Render additional list items (object1 - object5) if provided */}
            {props.object1 !== undefined && <List>{props.object1}</List>}
            {props.object2 !== undefined && <List>{props.object2}</List>}
            {props.object3 !== undefined && <List>{props.object3}</List>}
            {props.object4 !== undefined && <List>{props.object4}</List>}
            {props.object5 !== undefined && <List>{props.object5}</List>}
        </ListObject>
    )
}
