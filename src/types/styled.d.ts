import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      family: string;
      size: string;
    };

    color: {
      red: string;
      black: string;
      fontGray: string;
      backGray: string;
    };

    border: {
      radius: string;
    };
  }
}
