import { CellularFrame } from '../CellularFrame';
import { Container, CssBaseline } from '@mui/material';

export const App: React.FC = () => {
  return (
    <Container
      maxWidth={ 'xl' }
      sx={ {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      } }
    >
      <CssBaseline />
      <CellularFrame />
    </Container>
  );
};
