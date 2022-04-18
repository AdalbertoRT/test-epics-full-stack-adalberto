import styled from "styled-components";

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
`;

export const Col = styled.td`
    height: 30px;
    min-height: 30px;
    line-height: 30px;
    font-size: 0.7rem;
    color: #333;

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
`;

export const LoaderComponent = styled.div`
    width: 100%;
    height: 30px;
    animation: loading 1s infinite;

    @keyframes loading {
        0% {
            background-image: linear-gradient(to right, #000, #777, #aaa, #ddd);
        }
        25% {
            background-image: linear-gradient(to right, #777, #000, #aaa, #ddd);
        }
        25% {
            background-image: linear-gradient(to right, #777, #aaa, #000, #ddd);
        }
        25% {
            background-image: linear-gradient(to right, #777, #aaa, #ddd, #000);
        }
    }
`;
