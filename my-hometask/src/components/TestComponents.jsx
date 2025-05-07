import styled from "styled-components"

export const TestComponent = () => {
    return (
        <Container>
            <Title>Title</Title>
            <Subtitle>Subtitle</Subtitle>
            <Button>Click</Button>

        </Container>
    )
}

const Container = styled.div`
    display:flex;
    gap: 8px;
    `;

const Title = styled.h2`
color: blue;
`
const Button = styled.button`
padding: 16px;
color: white-space;
`