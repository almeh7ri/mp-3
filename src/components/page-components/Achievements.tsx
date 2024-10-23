// Importing ListFunc component to display list items
import { ListFunc } from "../ListFunction.tsx";

// Importing StyledH3 for heading styling
import { StyledH3 } from "../StyledComponents.tsx";

// Achievements component definition
// This component renders a list of achievements with titles and corresponding details
export default function Achievements() {
    return (
        <main>
            {/* Heading for the section */}
            <StyledH3>Achievements</StyledH3>

            {/* ListFunc for Technical Languages with a list of programming languages */}
            <ListFunc title= "Technical Languages" object1="Python" object2="Java" object3="C" object4="Assembly" object5="HTML"/>

            {/* ListFunc for Publications with an external link to a publication */}
            <ListFunc title="Publications" link={<a target="_blank" href="https://www.nytimes.com/2021/03/17/us/covid-college-admissions.html">College essay posted on the New York Times</a>}/>

            {/* ListFunc for Languages with two languages listed */}
            <ListFunc title="Languages" object1="Arabic" object2="English"/>

            {/* ListFunc for Software Proficiencies with a list of software tools */}
            <ListFunc title="Software Proficiencies" object1="Alteryx" object2="Stata" object3="MS Office Suite" object4="G Suite"/>
        </main>
    )
}
