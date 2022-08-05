import theme from 'assets/styles/theme';

//Basicamente estou dizendo qu eo Theme se trata do tipo theme que estou importando da ./assets/...
type Theme = typeof theme;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}