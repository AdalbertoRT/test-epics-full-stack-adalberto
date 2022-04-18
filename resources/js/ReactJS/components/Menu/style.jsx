import styled from "styled-components";

export const Aside = styled.div`
    position: relative;
    height: 100%;
`;

export const MenuComponent = styled.ul`
    position: relative;
    width: 100%;
    margin-left: 5px;
    color: #777;
`;

export const MenuItem = styled.li`
    font-size: 0.8rem;
    font-weight: 600;
    height: 30px;
    padding: 0;
    display: flex;
    align-items: center;

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
