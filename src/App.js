import styled from "styled-components";

const P = styled.p`
  font-size: 24px;
  color: red;
`;

const Content = styled.div`
  padding: 20px 25px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "white")};
  color: ${(props) => (props.primary ? "white" : "blue")};
  padding: 10px 15px;
  border: solid 2px grey;
  border-radius: 4px;
  cursor: pointer;
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

const App = () => {
  return (
    <Content>
      <P>Hola</P>
      <Button>Enviar</Button>
      <Button primary>Enviar</Button>
      <BlockButton primary as="a" href="#">
        Enviar
      </BlockButton>
      <Link>Link</Link>
      <StyledLink>Link con estilo</StyledLink>
    </Content>
  );
};

export default App;
