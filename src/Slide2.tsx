import styled from "styled-components";
import { Background, SlideStyled } from "./Slide1";

const imgs = [
	{
		name: "sperm1",
		width: 655,
		x: 1771,
		y: 1028,
	},
	{
		name: "sperm2",
		width: 828,
		x: 1420,
		y: 148,
	},
	{
		name: "sperm3",
		width: 1462,
		x: 1779,
		y: 822,
	},
	{
		name: "sperm4",
		width: 2282,
		x: 733,
		y: 197,
	},
	{
		name: "sperm5",
		width: 1461,
		x: 1169,
		y: 194,
	},
];

const Hello = styled.span`
	font-size: 2.6vw;
	text-transform: uppercase;
	font-family: "DIN Pro";
	margin-bottom: 45px;
`;

const ScrollBox = styled.div`
	/* position: relative; */
	width: 80.22vw;
	height: 57.94vh;

	font-size: 2.14vw;
	overflow: auto;
	direction: rtl;

	&::-webkit-scrollbar {
		width: 20px;
	}

	&::-webkit-scrollbar-track {
		width: 5px;

		height: 100%;
		width: 5px;
		background: black;
		border-left: 7.5px solid transparent;
		border-right: 7.5px solid transparent;
		border-radius: 9px;
		background-clip: padding-box;
	}

	&::-webkit-scrollbar-thumb {
		width: 20px;
		height: 104px;
		background-color: #cf578d;
		border-radius: 19.5px;
	}
`;

const InfoBox = styled.div`
	width: 75.68vw;
	height: 57.94vh;
	background: #ffffff;
	border-radius: 3.9vw;
	/* box-shadow: 5.45px 8.39px 250px #9db9c6; */
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
	margin-left: 7.5vw;
`;

const InfoMessage = styled.div`
	/* overflow-y: scroll; */
	width: 75.68vw;
	direction: ltr;
	padding: 2vw;
	/* margin: 2.78vw; */
	margin-left: 7.5vw;

	/* height: 100%; */
`;

const Slide = () => {
	return (
		<SlideStyled>
			<Background imgs={imgs} prefix={"slide2"} />
			<div style={{ display: "flex", flexDirection: "column" }}>
				<Hello>
					ТЕКСТ <br />
					СООБЩЕНИЯ
				</Hello>
				<div style={{ position: "relative" }}>
					<ScrollBox>
						<InfoBox></InfoBox>
						<InfoMessage>
							<p>
								<strong>Сперматозоид</strong> (от др.-греч. σπέρμα род. п.
								σπέρματος здесь «сперма» + ζωή «жизнь» + εδος «вид, облик», лат.
								spermatozoon, spermium) — мужская половая клетка (гамета)
								размножающихся посредством оогамии организмов.
								<br />
								Сперматозоиды обычно обладают способностью к активному дви-
								жению и служат для оплодотворения женской гаметы — яйцеклетки.
								Обычно они значительно меньше яйцеклеток, поскольку не содержат
								столь значительного количества цитоплазмы и производятся орга-
								низмом одновременно в значительном количестве. Типичное строение
								сперматозоида отражает форму общего предка животных и грибов:
								одноклеточный ядерный организм, передвига- ющийся за счёт
								жгутика в задней части, используя его подобно хвосту. Обширная
								группа происходящих от него организмов вклю- чает в себя
								животных, большинство грибов и некоторые группы протистов и
								называется кланом заднежгутиковых. Большинство других эукариот
								со жгутиками имеют их в передней части. В широком смысле слова
								по традиции сперматозоидами иногда на- зывают мужские половые
								клетки также у растений, к ним применя- ют также термины спермии
								или антерозоиды (их применяют также к традиционно сближавшимся с
								растениями грибам). <br />
								<br />
								https://ru.wikipedia.org/wiki/сперматозоид
							</p>
						</InfoMessage>
					</ScrollBox>
				</div>
			</div>
		</SlideStyled>
	);
};
export default Slide;
