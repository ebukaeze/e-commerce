import { Send } from "@material-ui/icons"
import { Container, Title, Description, InputContainer, Input, Button,  } from "./styles/NewsLetterStyle"

const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely update from your favourite products</Description>
            <InputContainer>
            <Input placeholder="Your email"/>
            <Button><Send color="action"/></Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter
