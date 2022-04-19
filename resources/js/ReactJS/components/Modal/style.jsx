import styled from "styled-components";

export const ModalBackground = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
`;
export const ModalHeader = styled.div`
    .active {
        background-color: tomato !important;
    }
`;

export const ModalHeaderButton = styled.button``;

export const ModalPicture = styled.img`
    max-width: 100px;
    height: 120px;
`;

export const ModalBody = styled.div`
    font-size: 0.8rem;
`;

export const AlertComponent = styled.div`
    position: absolute;

    background-color: rgba(0, 0, 0, 0.7);
`;
