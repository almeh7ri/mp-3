import { ListFunc } from "../ListFunction.tsx"; // Importing ListFunc to display structured information
import { StyledH3 } from "../StyledComponents.tsx"; // Importing styled H3 heading component

export default function Education() {
    return (
        <main>
            <StyledH3>Education</StyledH3> {/* Heading for the education section */}
            <ListFunc title="Boston University" title2="Bachelor of Arts in Computer Science and Economics" date="Sept 2021 - May 2025" />
            <ListFunc title="Relevant Coursework" object1="Empirical Economics II" object2="Computer Systems" object3="Intro to the Analysis of Algorithms" object4="Software Engineering" object5="Intro to Machine Learning and AI" />
            <ListFunc title="The American School of Kuwait" title2="High School Diploma" date="Sept 2017 - May 2021" />
        </main>
    )
}
