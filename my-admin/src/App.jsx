import { 
  Admin, Resource, ListGuesser, EditGuesser, ShowGuesser, CustomRoutes 
} from 'react-admin';
import { createTrailbaseProvider } from '/workspaces/A2/my-admin/src/ra-trailbase';

const TRAILBASE_URL = "https://upgraded-parakeet-x59qj7pj95wx365vx-4000.app.github.dev/";
const { dataProvider, authProvider } = await createTrailbaseProvider(TRAILBASE_URL);

export default function App () {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="comments" list={ListGuesser} />
      <Resource name="posts" list={ListGuesser} />
      <Resource name="users" list={ListGuesser} />
    </Admin>
)
};