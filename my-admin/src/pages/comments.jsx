import { Create, DataTable, DateField, List, ReferenceField } from 'react-admin';
import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import { Show, SimpleShowLayout, TextField } from 'react-admin';


export const CommentList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="post_id">
                <ReferenceField source="post_id" reference="posts" />
            </DataTable.Col>
            <DataTable.Col source="author" />
            <DataTable.Col source="content" />
            <DataTable.Col source="created_at">
                <DateField source="created_at" />
            </DataTable.Col>
        </DataTable>
    </List>
);


export const CommentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="post_id" reference="posts" />
            <TextInput source="author" />
            <TextInput source="content" />
            <DateInput source="created_at" />
        </SimpleForm>
    </Edit>
);


export const CommentShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="post_id" reference="posts" />
            <TextField source="author" />
            <TextField source="content" />
            <DateField source="created_at" />
        </SimpleShowLayout>
    </Show>
);

export const CommentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="post_id" reference="posts" />
            <TextInput source="author" />
            <TextInput source="content" />
            <DateInput source="created_at" />
        </SimpleForm>
    </Create>
);