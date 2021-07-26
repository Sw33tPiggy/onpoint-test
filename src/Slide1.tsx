import React from "react";
import styled from "styled-components";

export const SlideStyled = styled.div`
	width: 100vw;
	height: 100vh;
	flex-shrink: 0;
	scroll-snap-align: center;
	flex: none;
	/* background-color: aliceblue; */
	backdrop-filter: blur(10px);
	overflow: hidden;
	display: grid;
	place-items: center;
	position: relative;
`;

const Title = styled.span`
	text-transform: uppercase;
	font-family: Gilroy;
	font-size: 10.6vw;
	display: flex;
	letter-spacing: 0.05em;
`;

export const Button = styled.button`
	background: #ff6a9f;
	border: none;
	font-size: 2.6vw;
	display: flex;
	align-items: center;
	padding: 1.95vw;
	border-radius: 5vw;
	height: min-content;
	align-self: center;
`;

export const Icon = styled.div`
	width: 4.9vw;
	height: 4.9vw;
	margin-right: 1.95vw;
	background: url("/imgs/${(props: { name: string }) => props.name}@2x.png");
	background-size: cover; /* <------ */
	background-repeat: no-repeat;
	background-position: center center;
`;

const Hello = styled.span`
	font-size: 2.6vw;
	text-transform: uppercase;
	font-family: "DIN Pro";
`;

const BackgroundStyled = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -1;
	overflow: hidden;
`;

const imgs = [
	{
		name: "bacteria2",
		width: 428,
		x: -177,
		y: 145,
	},
	{
		name: "bacteria3",
		width: 125,
		x: 1489,
		y: 123,
	},
	{
		name: "bacteria4",
		width: 142,
		x: 1834,
		y: 60,
	},
	{
		name: "bacteria5",
		width: 169,
		x: 695,
		y: 1262,
	},
	{
		name: "bacteria6",
		width: 455,
		x: 1084,
		y: 1283,
	},
	{
		name: "bacteria7",
		width: 146,
		x: 45,
		y: 1007,
	},
	{
		name: "sperm1",
		width: 1183,
		x: 865,
		y: 310,
	},
	{
		name: "sperm2",
		width: 827,
		x: -268,
		y: 1186,
	},
];
interface Img {
	name: any;
	width: number;
	x: number;
	y: number;
	zIndex?: number;
}
export const Background = ({
	imgs,
	prefix,
}: {
	imgs: Img[];
	prefix: string;
}) => {
	return (
		<BackgroundStyled>
			{imgs.map((img) => {
				return (
					<img
						src={`/imgs/${prefix}/${img.name}.png`}
						alt=""
						style={{
							position: "absolute",
							width: img.width / 20.48 + "vw",
							left: img.x / 20.48 + "vw",
							top: img.y / 15.36 + "vh",
							zIndex: img.zIndex,
						}}
					/>
				);
			})}
		</BackgroundStyled>
	);
};

const Slide = React.forwardRef<HTMLElement>((_props, ref) => {
	return (
		<SlideStyled ref={ref as any}>
			<Background imgs={imgs} prefix={"slide1"} />
			<div>
				<Hello>Привет,</Hello>
				<Title>
					ЭТО &nbsp;<strong>НЕ</strong>
				</Title>
				<Title>КОММЕРЧЕСКОЕ</Title>
				<Title>
					ЗАДАНИЕ&nbsp;
					<Button>
						<Icon name="arrow" />
						Что дальше?
					</Button>
				</Title>
			</div>
		</SlideStyled>
	);
});

export default Slide;
