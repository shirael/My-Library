import { Container, Toolbar, AppBar, Typography } from '@mui/material';
import UserMenu from '../sections/nav-bar/NavBar';
import NavMenue from '../sections/nav-bar/userMenu';


export default function Home() {
  return (<>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavMenue />
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
      <Container maxWidth="lg">
        <Typography variant="body1" color="textSecondary">Welcome to our site!</Typography>
      </Container>
  </>
  );
}
