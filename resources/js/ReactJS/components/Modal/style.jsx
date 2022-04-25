import styled from "styled-components";

export const ModalBackground = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
`;
export const ModalHeader = styled.div`
    .active {
        background-color: tomato !important;
    }
`;

export const ModalHeaderButton = styled.button`
    @media screen and (max-width: 600px) {
        font-size: x-small;
    }
`;

export const ModalPicture = styled.img`
    max-width: 110px;
    height: 130px;

    @media screen and (max-width: 375px) {
        width: 70px;
        height: 90px;
    }

    @media screen and (min-width: 376px) and (max-width: 425px) {
        width: 90px;
        height: 110px;
    }
    @media screen and (min-width: 426px) and (max-width: 600px) {
        width: 100px;
        height: 120px;
    }
`;

export const ModalBody = styled.div`
    font-size: 1rem;

    @media screen and (max-width: 425px) {
        font-size: x-small;
    }
    @media screen and (min-width: 426px) and (max-width: 600px) {
        font-size: small;
    }
`;
