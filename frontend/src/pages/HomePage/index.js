import React from "react";
import Header from "../../components/Header";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { ContentContainer, Form } from "./styles";
import ShortenerService from "../../services/ShortenerService";

class HomePage extends React.Component {
  //class= classe vai estender atá o React Component
  constructor(props) {
    //propriedade que recebe da router
    super(props);

    //O state é importante para persistir valores da nossa aplicação durante a execução daquela tela (página)
    this.state = {
      isLoading: false,
      url: "",
      code: "",
      errorMessage: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { url } = this.state;

    this.setState({ isLoading: true, errorMessage: "" });

    if (!url) {
      this.setState({
        isLoading: false,
        errorMessage: "Informe uma url para encurtar",
      });
    } else {
      try {
        const service = new ShortenerService();
        const result = await service.generate({ url });

        this.setState({ isLoading: false, code: result.code });
      } catch (error) {
        this.setState({
          isLoading: false,
          errorMessage: "Ops, ocorreu um erro ao tentar encurtar a url.",
        });
      }
    }
  };

  copyToClipboard = () => {
    const element = this.inputURL;
    element.select();
    document.execCommand("copy");
  };

  //render é a função base do component, é responsável por renderizar o conteúdo
  render() {
    const { isLoading, errorMessage, code } = this.state;
    return (
      <Container>
        <Header> .:Seu novo encurtador de URL:. </Header>
        <ContentContainer>
          <Form onSubmit={this.handleSubmit}>
            <InputGroup className="nb=3">
              <FormControl
                placeholder="Digite a url para encurtar"
                defaultValue=""
                onChange={e => this.setState({ url: e.target.value })}
              />
              <InputGroup.Append>
                <Button variant="prime" type="submit">Encurtar</Button>
              </InputGroup.Append>
            </InputGroup>

            {isLoading ? (
              <Spinner animation="border" />
            ) : (
              code && (
                <>
                  <InputGroup className="nb=3">
                    <FormControl
                      autoFocus={true}
                      defaultValue={`https://pitu.tk/${code}`}
                      ref={(input) => (this.inputURL = input)}
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary" onClick={() => this.copyToClipboard()}>Copiar</Button>
                    </InputGroup.Append>
                  </InputGroup>
                  <p>Para acompanhar as estatísticas, acesse https://pitu.tk/{code}</p>
                </>
              )
            )}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          </Form>
        </ContentContainer>
      </Container>
    );
  }
}

export default HomePage;
