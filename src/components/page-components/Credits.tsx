import { ListFunc } from "../ListFunction.tsx"; // Importing ListFunc to display links
import { StyledH3 } from "../StyledComponents.tsx"; // Importing styled H3 heading component

// Credits component for listing resource credits
export default function Credits() {
    return (
        <main>
            <StyledH3>Credits</StyledH3> {/* Heading for the credits section */}
            <ListFunc link={<a href="https://fonts.google.com/specimen/Space+Grotesk"><b>Google Font</b></a>}/> {/* Credit for Google Font */}
            <ListFunc link={<a href="https://www.fontspace.com/minecraft-ten-font-f40317"><b>Minecraft Font</b></a>}/> {/* Credit for Minecraft Font */}
            <ListFunc link={<a href="https://t4.ftcdn.net/jpg/03/36/65/37/360_F_336653735_KN869stZACACCyBEP7MuYmvwkjz499HJ.jpg"><b>Minecraft Background</b></a>}/> {/* Credit for Minecraft Background */}
        </main>
    )
}
