import styled from "styled-components";

export const MenuComponent = styled.ul`
    position: relative;
    width: 100%;
    color: #777;
`;

export const MenuMobileBack = styled.div`
    position: absolute;
    top: 40px;
    left: -20px;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
    transform: translateX(-150vw);
    transition: all 0.3s linear;

    &.show {
        transform: translateX(0vw);
    }
`;

export const MenuMobileComponent = styled.div`
    position: relative;
    background-color: white;
    box-shadow: 3px 0px 5px orangered;
    width: 70%;
    height: 100vh;
    z-index: 100;
`;

export const MenuItem = styled.li`
    font-size: 0.8rem;
    font-weight: 600;
    width: 100%;
    height: 30px;
    padding: 0;
    display: flex;
    align-items: center;

    svg {
        width: 15px;
        height: 15px;
    }

    a {
        text-decoration: none;
        color: #333;
        margin: 0;
        &.active {
            background-color: transparent !important;
            color: tomato !important;
            border-left: 3px solid tomato !important;
        }
    }
`;
