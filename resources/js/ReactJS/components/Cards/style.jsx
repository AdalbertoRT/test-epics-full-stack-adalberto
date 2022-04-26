import styled from "styled-components";

export const Card = styled.div`
    box-sizing: border-box;
    small {
        font-size: 0.7rem;

        @media screen and (max-width: 768px) {
            font-size: xx-small;
        }
    }
    div {
        font-weight: bold;
        padding: 5px 0;

        @media screen and (max-width: 768px) {
            font-size: x-small;
        }
    }
`;
