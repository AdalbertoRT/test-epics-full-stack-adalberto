import styled from "styled-components";

export const AlertComponent = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);

    .modal-content {
        width: 50vw !important;

        @media screen and (max-width: 425px) {
            width: 80vw !important;
        }
    }

    h5,
    p {
        @media screen and (max-width: 425px) {
            font-size: small;
        }
        @media screen and (min-width: 426px) and (max-width: 768px) {
            font-size: large;
        }
    }
`;
