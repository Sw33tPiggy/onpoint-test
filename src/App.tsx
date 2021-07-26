import "./App.css";
import styled from "styled-components";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import { useRef } from "react";

const Wrapper = styled.div`
	position: relative;
	scroll-snap-type: x mandatory;
	overflow: scroll;
	scroll-behavior: smooth;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const StyledApp = styled.div`
	display: flex;
	flex-direction: row;
	width: min-content;
	background: url("/imgs/bg.png");
	background-size: cover; /* <------ */
	background-repeat: no-repeat;
	background-position: center center;
`;

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 100;
	padding: 2.6vw 6.49vw;
	pointer-events: none;
`;

const HomeIcon = styled.img`
	width: 2vw;
	min-width: 21px;
	height: min-content;
	pointer-events: fill;
	object-fit: contain;
`;
const Divider = styled.img`
	height: 2.39vw;
	min-height: 25px;
	margin-left: 2.5vw;
	margin-right: 2.5vw;
	width: min-content;
`;

const Project = styled.div`
	display: flex;
	align-items: center;
	font-size: 34;
	font-family: "Circe";
`;

function App() {
	const slide1 = useRef<HTMLElement | null>(null);
	return (
		<Wrapper>
			<Overlay>
				<Project>
					<HomeIcon
						src="imgs/home.png"
						alt=""
						onClick={() => {
							slide1.current?.scrollIntoView({ behavior: "smooth" });
						}}
					/>
					<Divider src="imgs/Divider.png" alt="" />
					<span>PROJECT</span>
				</Project>
			</Overlay>
			<StyledApp>
				<Slide1 ref={slide1}></Slide1>
				<Slide2></Slide2>
				<Slide3></Slide3>
			</StyledApp>
		</Wrapper>
	);
}

export default App;
