import { Outlet } from 'react-router-dom';
import {Stack} from '../common/components';
import { AppBar } from '../components';

export const Layout = () => {
  return (
    <Stack spacing={4}>
      <AppBar />
      <Outlet />
    </Stack>
  );
};
