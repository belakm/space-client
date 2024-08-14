import { Link, Navigate, useRoutes } from 'react-router-dom';
import {
  Balances,
  ClaimPlanet,
  RegisterResourceAccounts,
  ClaimPlayerCache,
  CreatePlayer,
} from './components/Example';

export function AppRoutes() {
  return useRoutes([
    { index: true, element: <Navigate replace to="/home" /> },
    {
      path: '/home',
      element: (
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
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
            <li style={{ marginBottom: '2em' }}>
              <p>1. This register a player</p>
              <CreatePlayer />
            </li>
            <li style={{ marginBottom: '2em' }}>
              <p>
                2. This creates resource accounts on blockchain, it is its own 4
                transaction because reasons*
              </p>
              <RegisterResourceAccounts />
            </li>
            <li style={{ marginBottom: '2em' }}>
              <p>
                3. This claims a planet at [X, Y], it will fail if the planet is
                already taken or player already took its first free planet. (I
                added a bunch of valid coordinates at the bottom of the example
                code)
              </p>
              <ClaimPlanet />
            </li>
            <li>
              <p>
                4. After free planet claim, user gets some resources to the
                player cache object (because reasons*) which can be claimed into
                token accounts
              </p>
              <ClaimPlayerCache />
            </li>
          </ul>
          <p>
            <small>
              *Reasons = too many accounts for one transaction makes it hit its
              upper size limit on Solana so some things are moved into their own
              transaction or by using player resource cache object instead of
              including 4 resource accounts which would hit the aforementioned
              limit
            </small>
          </p>
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
