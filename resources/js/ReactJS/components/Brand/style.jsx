import styled from "styled-components";

export const Dropdown = styled.div`
    margin-left: -10px;
    display: grid;
    grid-template-columns: 50px 2fr;
    grid-template-rows: 1fr 1fr;
    margin-bottom: 30px;

    .pipes {
        grid-area: 1/1/1/2;

        @media (max-width: 500px) {
            font-size: small;
        }
    }

    button {
        grid-area: 1/2/1/3;
        width: auto;
        background-color: transparent;
        border: 0;
        outline: none;
        padding: 0;
        text-decoration: none;
        h1 {
            font-size: 1rem;
            font-weight: 700;
            color: tomato;
            margin: 0;

            @media (max-width: 500px) {
                font-size: small;
            }
        }

        &::after {
            color: tomato;
        }

        &:hover,
        &:target,
        &:active,
        &:focus {
            background-color: transparent;
        }
    }

    span {
        grid-area: 2/2/3/3;
        font-size: 0.6rem;
        color: #777;

        @media (max-width: 500px) {
            font-size: smaller;
        }
    }
`;

export const Pipe = styled.div`
    display: inline-block;
    width: 5px;
    height: 15px;
    transform: skew(-15deg);
    margin: 0 2px;
    background-color: tomato;
    opacity: ${(props) => props.opacity || "1"};
`;
