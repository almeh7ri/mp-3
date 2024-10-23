import { ListFunc } from "../ListFunction.tsx"; // Importing ListFunc for structured content display
import { StyledH3 } from "../StyledComponents.tsx"; // Importing styled heading component

export default function Employment() {
    return (
        <main>
            <StyledH3>Employment</StyledH3> {/* Heading for employment section */}
            <ListFunc title="Cartesian" title2="Strategy and Analytics Intern" date="Summer 2024" object1="Assisted in the preparation of comprehensive reports for our client’s senior management, summarizing key insights and recommendations." object2="Acquired valuable skills in data processing by utilizing software like Alteryx and gaining experience with AWS." />
            <ListFunc title="RSM Australia" title2="Digital Advisory Intern" date="Summer 2023" object1="Assisted in executing digital transformation projects, including technology implementation, resulting in enhanced operational efficiency and customer experience." object2="Engaged with clients to identify their concerns and tailor effective solutions to address their requirements." object3="Mastered PowerQuery, enabling automation of office billings reconciliation processes, effectively reducing quarterly workload by 3 hours and optimizing time utilization." />
        </main>
    )
}
