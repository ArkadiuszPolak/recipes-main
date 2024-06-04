import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';

const HeaderContainer = styled(AppBar)`
	background-color: #ff006e !important;
	margin-bottom: 32px;
`;

const Header = () => (
	<HeaderContainer position='static'>
		<Toolbar>
			<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
				RECIPIES
			</Typography>
			<Typography variant='subtitle1' component='div'>
				Find all the recipies that you need!!!
			</Typography>
		</Toolbar>
	</HeaderContainer>
);
export default Header;
