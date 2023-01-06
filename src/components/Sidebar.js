import styled from "styled-components";

const Sidebar = ({show}) => {
    return (
        <>
        <Container show={show}>
            <h1>Sidebar</h1>
        </Container>
        </>
    )
}

const Container = styled.div`
/* display: flex; */
height: 100vh;
width:250px;
background-color:${({show}) => (show ? "darkslategrey" : "lightblue")};
transition: all 1s;
transform: ${({show}) => (show ? "translateX(0)" : "translateX(-250px)")};
`
export default Sidebar;