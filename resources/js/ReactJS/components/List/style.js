import styled from "styled-components";

export const Row = styled.tr`
    height: 30px;
    line-height: 30px;
`;

export const Th = styled.th`
    height: 30px;
    min-height: 30px;
    line-height: 30px;
    font-size: 0.7rem;
    font-weight: bold;
`;

export const Col = styled.td`
    height: 30px;
    min-height: 30px;
    line-height: 30px;
    font-size: 0.7rem;

    img {
        width: 25px !important;
        height: 25px !important;
    }
    button,
    a {
        font-size: 0.7rem;
    }
`;
