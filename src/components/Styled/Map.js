import styled, {css, keyframes} from 'styled-components';

const status = ({ status ,  image }) => {
    if(status) {
        console.log(1);
        
        const rotate = keyframes`
            from {
                transform: rotateY(0deg);
            }
            50% {
                transform: rotateY(90deg);
                background-image: url(/images/logo.png);
            }
            60% {
                transform: rotateY(90deg);
                background-image: url(/images/${image});
            }
            to {
                background-image: url(/images/${image});
                transform: rotateY(180deg);
            }
        `;
        return css`
            animation: ${rotate} .5s;
        `
    }else {
        const rotate = keyframes`background-image: url(/images/logo.png);`;
        return css`
            animation: ${rotate} .5s;
        `
    }
}

const Map = styled.div`
    transition: .5s ease all;
    width: 70px;
    height: 120px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0,0,0, 0.1);
    background-image: url('/images/logo.png');
    background-size: 65px 70px;
    background-repeat: space;
    background-position: center;
    &:hover {
        box-shadow: 0 0 10px rgba(0,0,0, 1);
    }
    ${status}
    webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    -ms-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
`;

export default Map;



