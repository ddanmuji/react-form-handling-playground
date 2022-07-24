import styled from 'styled-components'
import colors from '@styles/colors'

const Spinner = () => (
	<SpinnerStyled>
		<div className="spinner" />
	</SpinnerStyled>
)

const SpinnerStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	.spinner {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border: 5px solid ${colors.primary};
		border-bottom: 5px solid transparent;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`

export default Spinner
