import { Create, CreateButton, DataTable, DateField, List, ReferenceField, TopToolbar } from 'react-admin';
import { DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import { NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';



export const PostList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="user_id">
                <ReferenceField source="user_id" reference="users" />
            </DataTable.Col>
            <DataTable.Col source="title" />
            <DataTable.Col source="content" />
            <DataTable.NumberCol source="published" />
            <DataTable.Col source="created_at">
                <DateField source="created_at" />
            </DataTable.Col>
        </DataTable>
    </List>
);


export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="user_id" reference="users" />
            <TextInput source="title" />
            <TextInput source="content" />
            <NumberInput source="published" />
            <DateInput source="created_at" />
        </SimpleForm>
    </Edit>
);


export const PostShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="user_id" reference="users" />
            <TextField source="title" />
            <TextField source="content" />
            <NumberField source="published" />
            <DateField source="created_at" />
        </SimpleShowLayout>
    </Show>
);

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="user_id" reference="users" />
            <TextInput source="title" />
            <TextInput source="content" />
            <NumberInput source="published" />
            <DateInput source="created_at" />
        </SimpleForm>
    </Create>
);