import {Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom"; // Importing routing components from react-router-dom
import styled from "styled-components"; // Importing styled-components for styling
import Nav from "./components/Nav.tsx"; // Importing the navigation component
import Home from "./components/page-components/Home.tsx"; // Importing the Home component
import Header from "./components/Header.tsx"; // Importing the Header component
import Footer from "./components/Footer.tsx"; // Importing the Footer component
import Achievements from "./components/page-components/Achievements.tsx"; // Importing Achievements page
import Education from "./components/page-components/Education.tsx"; // Importing Education page
import Extracurriculars from "./components/page-components/Extracurriculars.tsx"; // Importing Extracurriculars page
import Employment from "./components/page-components/Employment.tsx"; // Importing Employment page
import Credits from "./components/page-components/Credits.tsx"; // Importing Credits page
import Calculator from "./components/page-components/calculator/Calculator.tsx"; // Importing Calculator component

// Styling for a div that wraps the main content
const StyledDiv = styled.div`
  display: flex;  // Display the content in a flex container
  background-color: lightgoldenrodyellow;  // Set background color
  min-height: 100vh;  // Minimum height to ensure it covers the full viewport
  height: 100%;  // Set height to 100%
  
  @media screen and (max-width: 750px){  // Media query for screens smaller than 750px
      display: block;  // Stack content vertically on smaller screens
  }
`
// Styling for the main body wrapper that holds content
const StyledBody = styled.div`
    max-width: 80%;  // Set maximum width to 80% of the viewport
    margin: auto;  // Center the content
    align-content: center;  // Align content in the center
`

// Root component that acts as the main wrapper for the entire app
function Root() {
    return (
        <StyledBody>
            <Header/>  {/* Display header at the top */}
            <StyledDiv>
                <Nav/>  {/* Display navigation on the side */}
                {/* Routes for different pages */}
                <Routes>
                    <Route path={'/'} element={<Home/>}/>  {/* Home page route */}
                    <Route path={'/achievements'} element={<Achievements/>}/>  {/* Achievements page route */}
                    <Route path={'/employment'} element={<Employment/>}/>  {/* Employment page route */}
                    <Route path={'/education'} element={<Education/>}/>  {/* Education page route */}
                    <Route path={'/extracurriculars'} element={<Extracurriculars/>}/>  {/* Extracurriculars page route */}
                    <Route path={'/projects'} element={<Calculator/>}/>  {/* Calculator page route */}
                    <Route path={'/credits'} element={<Credits/>}/>  {/* Credits page route */}
                </Routes>
            </StyledDiv>
            <Footer/>  {/* Display footer at the bottom */}
        </StyledBody>
    )
}

// Creating the router with Root component as the main component
const router=createBrowserRouter(
    [
        {path:"*", Component: Root},  // Use Root component for all paths
    ]
);

// App component that provides the router to the app
export default function App() {
    return <RouterProvider router={router}/>;  // Wrapping app with RouterProvider to manage routing
}
