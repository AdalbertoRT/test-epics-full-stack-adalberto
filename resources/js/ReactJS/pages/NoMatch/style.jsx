import styled from "styled-components";
import notFound from "../../assets/img/404.gif";

export const NomatchComponent = styled.div`
    width: 90vw;
    height: calc(100vh - 20px);
    background: url(${notFound}) no-repeat center;
    background-size: 100% 100%;
`;
