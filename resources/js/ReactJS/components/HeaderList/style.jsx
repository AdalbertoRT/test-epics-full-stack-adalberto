import styled from "styled-components";

export const HeaderListContainer = styled.div`
    .search {
        height: 30px;
        overflow: hidden;

        svg {
            width: 10px;
        }
    }

    input,
    select {
        max-width: 120px;
        height: 30px;
        font-size: 0.7rem;
        color: #333;

        @media screen and (max-width: 425px) {
            font-size: xx-small;
        }
        @media screen and (min-width: 426px) and (max-width: 768px) {
            font-size: x-small;
        }
    }

    button,
    a {
        font-size: 0.7rem;
        max-height: 30px;
        color: #333;
        background-color: #aaa;

        svg {
            width: 10px;
            height: 10px;
        }

        &.export {
            :hover {
                background-color: yellow;
            }
        }
        &.new {
            :hover {
                background-color: orangered;
                color: white;
            }
        }
    }

    @media screen and (max-width: 425px) {
        font-size: x-small;
    }
`;
