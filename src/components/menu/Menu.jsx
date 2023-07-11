import { ContainerMenu, StyledLink, StyledUl } from './styles';

const Menu = ({ showMenu, setShowMenu }) => {
	return (
		<ContainerMenu showMenu={showMenu}>
			<nav>
				<StyledUl>
					<li onClick={() => setShowMenu(false)}>
						<StyledLink to='/'>INICIO</StyledLink>
					</li>
					<li>
						<StyledLink to='/galeria'>GALERIA</StyledLink>
					</li>
					<li>
						<StyledLink to='/retrato'>RETRATO</StyledLink>
					</li>
					<li>
						<StyledLink to='/prensa'>PRENSA Y TEXTOS</StyledLink>
					</li>
					<li>
						<StyledLink to='/taller'>MI TALLER</StyledLink>
					</li>
					<li>
						<StyledLink to='/contact'>CONTACTO</StyledLink>
					</li>
				</StyledUl>
			</nav>
		</ContainerMenu>
	);
};
export default Menu;
