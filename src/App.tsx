import "./App.css";
import styled from "styled-components";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

const Wrapper = styled.div`
	scroll-snap-type: x mandatory;
	overflow: scroll;
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

function App() {
	return (
		<Wrapper>
			<StyledApp>
				<Slide1></Slide1>
				<Slide2></Slide2>
				<Slide3></Slide3>
			</StyledApp>
		</Wrapper>
	);
}

export default App;
