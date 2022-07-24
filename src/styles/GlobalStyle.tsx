import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'
import colors from '@styles/colors'

const globalStyle = css`
	${reset};

	* {
		box-sizing: border-box;
	}

	body {
		background-color: ${colors.bgColor};
		color: ${colors.textColor};
		font-family: Noto Sans, Noto Sans KR;
		line-height: 1.2;
	}

	a {
		text-decoration: none;
		color: ${colors.textColor};
	}
`

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`

export default GlobalStyle
