import { Link, Navigate, useRoutes } from 'react-router-dom';
import {
  Balances,
  ClaimPlanet,
  ClaimResources,
  CreatePlayer,
} from './components/Example';

export function AppRoutes() {
  return useRoutes([
    { index: true, element: <Navigate replace to="/home" /> },
    {
      path: '/home',
      element: (
        <div>
          <p>Home page content</p>
          <Link to="/page-1">Page 1</Link>
          <hr />
          <Balances />
          <ul
            style={{
              textAlign: 'center',
              padding: '2em',
              listStyle: 'none',
            }}
          >
            <li style={{ marginBottom: '.7em' }}>
              <CreatePlayer />
            </li>
            <li style={{ marginBottom: '.7em' }}>
              <ClaimResources />
            </li>
            <li>
              <ClaimPlanet />
            </li>
          </ul>
        </div>
      ),
    },
    {
      path: '/page-1',
      element: (
        <div>
          <p>Page 1 content</p>
          <Link to="/home">Home</Link>
        </div>
      ),
    },
  ]);
}
