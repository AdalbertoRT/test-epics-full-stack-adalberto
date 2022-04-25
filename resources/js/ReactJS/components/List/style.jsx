import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    height: 100%;
`;

export const Row = styled.tr`
    height: 30px;
    line-height: 30px;
    color: #333;
`;

export const Th = styled.th`
    height: 30px;
    min-height: 30px;
    line-height: 30px;
    font-size: 0.7rem;
    font-weight: bold;
    color: #333;

    @media screen and (max-width: 425px) {
        font-size: xx-small;
        padding: 4px !important;
    }
    @media screen and (min-width: 426px) and (max-width: 768px) {
        font-size: x-small;
        padding: 4px !important;
    }
`;

export const Col = styled.td`
    height: 30px;
    min-height: 30px;
    line-height: 30px;
    font-size: 0.7rem;
    color: #333;

    .name {
        max-width: 150px;
    }
    img {
        width: 25px !important;
        height: 25px !important;
    }
    button,
    a {
        font-size: 0.7rem;
        color: #333 !important;

        &.call {
            :hover {
                background-color: green !important;
                color: white !important;
            }
        }
        &.watch {
            :hover {
                background-color: blueviolet !important;
                color: white !important;
            }
        }
        &.ellipsis {
            :hover {
                background-color: blue !important;
                color: white !important;
            }
        }
    }

    @media screen and (max-width: 425px) {
        font-size: xx-small;
        padding: 4px !important;
    }
    @media screen and (min-width: 426px) and (max-width: 768px) {
        font-size: x-small;
        padding: 4px !important;
    }
`;
