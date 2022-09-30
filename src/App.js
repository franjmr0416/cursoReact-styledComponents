import styled from "styled-components";

const P = styled.p`
  font-size: 24px;
  color: red;
`;

const Content = styled.div`
  padding: 20px 25px;
`;

const Button = styled.button`
  transition: box-shadow 0.2s ease;
  background-color: ${(props) => (props.primary ? "blue" : "white")};
  color: ${(props) => (props.primary ? "white" : "blue")};
  padding: 10px 15px;
  border: solid 2px grey;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
  }
  &.secondary {
    background-color: green;
    border: solid 2px green;
    color: white;
  }
  //& => aplica a todo el componente
  //. => aplica a solo los hijos
  .info {
    font-size: 28px;
  }
`;
//extendiendo estilos
const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
`;
//componente normal
const Link = ({ className, ...props }) => {
  //!importante pasar la prop de className
  return <a className={className} {...props}></a>;
};
//agregando estilos a componente normal
const StyledLink = styled(Link)`
  color: blue;
`;
//agregando propiedades
const Input = styled.input.attrs((props) => ({
  type: "text",
  color: props.color || "red",
}))`
  font-size: 20px;
  border: 1px solid red;
  color: ${(props) => props.color};
`;

const Password = styled(Input).attrs({
  type: "password",
})``;

const App = () => {
  return (
    <Content>
      <P>Hola</P>
      <Button>
        Enviar<p className="info">Info</p>
      </Button>
      <Button primary>Enviar</Button>
      <Button className="secondary">Enviar</Button>
      <BlockButton primary as="a" href="#">
        Enviar
      </BlockButton>
      <Link>Link</Link>
      <StyledLink>Link con estilo</StyledLink>
      <Input color="blue" />
      <Password />
    </Content>
  );
};

export default App;
