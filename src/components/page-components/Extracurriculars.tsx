import { ListFunc } from "../ListFunction.tsx"; // Importing ListFunc for displaying extracurricular activities
import { StyledH3 } from "../StyledComponents.tsx"; // Importing styled heading component

export default function Extracurriculars() {
    return (
        <main>
            <StyledH3>Extracurriculars</StyledH3> {/* Heading for the extracurriculars section */}
            <ListFunc title="Boston University" title2="Research Intern" date="Sept 2024 - Present" object1="Worked under Professor Caldwell-Harris to better understand the capabilities of Large Language Models and how it compares with human abilities." object2="Acquired valuable skills in data processing by utilizing software like Alteryx and gaining experience with AWS." />
            <ListFunc title="BU Arab Student Organization" title2="Treasurer" date="Oct 2023 - Present" object1="Oversaw the club's financial operations, including managing reimbursements, monetary transactions, and financial calculations with a budget of around 12,000 USD per semester for the club." object2="Collaborated with team members to allocate event budgets efficiently, optimizing resource utilization." />
            <ListFunc title="BU Consulting Group" title2="Strategy Lab" date="Feb 2022 - May 2022" object1="Strategized and developed high-level solutions for hypothetical consulting projects with team members." object2="Established effective problem-solving skills by actively applying consulting data and knowledge." />
        </main>
    )
}
