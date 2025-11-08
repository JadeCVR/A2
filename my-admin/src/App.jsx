import { 
  Admin, Resource, ListGuesser, EditGuesser, ShowGuesser, CustomRoutes 
} from 'react-admin';
import { createTrailbaseProvider } from '/workspaces/A2/my-admin/src/ra-trailbase';
import { PostCreate, PostEdit, PostList, PostShow } from './pages/posts';
import { UserEdit, UserList, UserShow } from './pages/users';
import { CommentCreate, CommentEdit, CommentList, CommentShow } from './pages/comments';

const TRAILBASE_URL = "https://upgraded-parakeet-x59qj7pj95wx365vx-4000.app.github.dev/";
const { dataProvider, authProvider } = await createTrailbaseProvider(TRAILBASE_URL);

export default function App () {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="comments" list={CommentList} edit={CommentEdit} show={CommentShow} create={CommentCreate}/>
      <Resource name="posts" list={PostList} edit={PostEdit} show={PostShow} create={PostCreate}/>
      <Resource name="users" list={UserList} edit={UserEdit} show={UserShow} />
    </Admin>
)
};