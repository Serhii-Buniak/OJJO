import baseStyled, { css as baseCss, ThemedCssFunction, ThemedStyledInterface } from 'styled-components';

const theme = {
    colors: {
        accent: '#333333',
        grey: '#d6d6d6',
        bgc: '#f9f9f9',
        hardGray: '#979797',
        white: 'white',
    },
    fonts: {
        Gilroy: {
            regular: baseCss`
                font-family: Gilroy;
                font-weight: 400;
                font-style: normal; 
            `,
            medium: baseCss`
                font-family: Gilroy;
                font-weight: 500;
                font-style: normal; 
            `,
            semibold: baseCss`
                font-family: Gilroy;
                font-weight: 600;
                font-style: normal; 
            `,
        },
        NotoSerif: {
            bold: baseCss`
                font-family: "Noto Serif";
                font-weight: 700;
                font-style: normal;
            `
        }

    }
}

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>
export const css = baseCss as ThemedCssFunction<Theme>


export default theme