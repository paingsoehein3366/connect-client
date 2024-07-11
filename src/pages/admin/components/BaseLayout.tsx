import { AppShell, AppShellNavbar, NavLink } from '@mantine/core';
import NavBar from './nav-bar';
import { NavLinks } from '../constants/NavLink';
import { useNavigate, Qutlet } from 'react-router-dom';
import { Icon } from '../../../components/common/icon';

const BaseLayout = () => {
  const navigate = useNavigate();
  const toggleSidebar = () => {

  }
  return (
    <AppShell
      header={{ height: { base: 55, sm: 60, lg: 86 } }}
      navbar={{ width: 200, breakpoint: "sm" }}
    >
      <NavBar toggleSidebar={toggleSidebar} />
      <AppShellNavbar className=''>
        {NavLinks.map((nav) => (
          <NavLink
            label={nav.label || ""}
            key={nav.path}
            onClick={() => navigate(nav.path)}
            leftSection={<Icon name={nav.icon} />}
            style={{ borderBottom: '1px solid #ededed' }}
          />
        ))}
      </AppShellNavbar>
      {/* <AppShell.Main>
        <Qutlet />
      </AppShell.Main> */}
    </AppShell>
  )
}

export default BaseLayout;
