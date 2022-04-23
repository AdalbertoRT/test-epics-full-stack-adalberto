import styled from "styled-components";

export const AsideComponent = styled.aside`
    position: relative;
    padding-right: 5px;
    margin: 0 !important;

    @media (max-width: 550px) {
        font-size: x-small;
    }
    @media (min-width: 551px) and (max-width: 768px) {
        font-size: smaller;
    }
`;
