import styled from "styled-components";

export const Tittle = styled.h1`
    color: blue;

     .menu {
        color: #1c1c1c;
        background-color: aquamarine;
        padding: 10px;
        transition: 0.5s;

        &:hover{
            border-radius: 50%;
            background-color: red;
            color: #fff;

            cursor: pointer;

            animation: entrada 5s;
        }

        @keyframes entrada{
            from {
                transform: scaleY(1);
                // opacity: 0;
            }
            to {
                transform: scaleY(1);
                // opacity: 0;
            }
        }
        
    }
`;