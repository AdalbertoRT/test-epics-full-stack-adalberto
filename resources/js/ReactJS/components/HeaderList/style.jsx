import styled from "styled-components";

export const HeaderListContainer = styled.div`
    height: 40px;

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
    }

    button {
        height: 25px;
        font-size: 0.6rem;
        color: #333;

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
`;
