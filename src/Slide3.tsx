import styled from "styled-components";
import { Background, Button, Icon, SlideStyled } from "./Slide1";

const imgs = [
	{
		name: "bubble1",
		width: 136,
		x: 1382,
		y: 393,
	},
	{
		name: "bubble2",
		width: 285,
		x: 1733,
		y: 1348,
	},
	{
		name: "bubble3",
		width: 66,
		x: 1295,
		y: 858,
	},
	{
		name: "bubble4",
		width: 149,
		x: 1349,
		y: 1008,
	},
	{
		name: "bubble5",
		width: 68,
		x: 1732,
		y: 369,
	},
	{
		name: "bubble6",
		width: 225,
		x: 373,
		y: 634,
	},
	{
		name: "bubble7",
		width: 74,
		x: 1676,
		y: -17,
	},
	{
		name: "bubble8",
		width: 123,
		x: 1826,
		y: 966,
	},
	{
		name: "botle",
		width: 471,
		x: 99,
		y: 159,
		zIndex: 10,
	},
];

const Grid = styled.div`
	position: absolute;
	width: 71.38vw;
	display: grid;
	grid-template-areas: "a b" "a c";
	gap: 5.32vw;
	left: 22.95vw;
`;

const CardStyle = styled.div`
	padding: 3.64vw;
	background: white;
	box-shadow: 0.26vw 0.41vw 12.2vw #9db9c6;
	border-radius: 3.9vw;
	color: #2e2e2e;
	font-size: 2.44vw;
	font-family: "DIN Pro";
`;

const FirstCardStyle = styled(CardStyle)`
	grid-area: a;

	padding-left: 11.32vw;
	&::before {
		content: "";
		position: absolute;
		background-image: url("./imgs/slide3/eat.png");
		background-size: cover;
		background-repeat: no-repeat;
		width: 6.44vw;
		height: 6.15vw;
		top: -3.07vw;
	}
`;

const SecondCardStyle = styled(CardStyle)`
	grid-area: b;

	&::before {
		content: "";
		position: absolute;
		background-image: url("./imgs/slide3/calendar.png");
		background-size: cover;
		background-repeat: no-repeat;
		width: 6.7vw;
		height: 5.46vw;
		top: -2.63vw;
	}
`;

const Slide = () => {
	return (
		<SlideStyled>
			<Background imgs={imgs} prefix={"slide3"} />
			<Grid>
				<FirstCardStyle>
					3 раза в день после еды. После приема препарата рекомен- дуется
					воздержаться от пищи и напитков в течение 1 часа
				</FirstCardStyle>
				<SecondCardStyle>Курс лечения от 7 дней до 1 мес.</SecondCardStyle>
				<Button>
					<Icon name="plus" />
					Подробнее
				</Button>
			</Grid>
			<img
				src="/imgs/slide3/botle.png"
				alt=""
				style={{
					position: "absolute",
					width: "22.998vw",
					left: "4.83398vw",
					top: "10.3516vh",
					zIndex: 10,
				}}
			></img>
		</SlideStyled>
	);
};
export default Slide;
