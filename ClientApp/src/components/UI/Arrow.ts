import { css, styled } from "../../themes"
import { Property } from "csstype"

interface ArrowStyles {
    direction?: number | 'up' | 'right' | 'down' | 'left'
    padding?: Property.Padding
    width?: Property.Width
    color?: Property.Color
}

const createArrow = ({ direction, padding, width, color }: ArrowStyles) => {

    let degrees: number

    switch (direction) {
        case 'up':
            degrees = -135
            break;
        case 'right':
            degrees = -45
            break;
        case 'down':
            degrees = 45
            break;
        case 'left':
            degrees = 135
            break;
        default:
            degrees = direction as number
            break;
    }

    return css`
        transition: transform 0.3s ease 0s;
        ${color && `border: solid ${color}`};
        ${width && `border-width: 0 ${width} ${width} 0`};
        display: inline-block;
        ${padding && `padding: ${padding}`};
        ${degrees && `transform: rotate(${degrees + 'deg'})`};
        ${degrees && ` -webkit-transform: rotate(${degrees + 'deg'})`};
    `
}

export default createArrow

