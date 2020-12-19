import styled from "styled-components";

export const ImageStyled = styled.image`
    position: absolute;
    z-index: -1;
    margin-bottom: -150px;
    width: 100%;
    contain: content;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

`;