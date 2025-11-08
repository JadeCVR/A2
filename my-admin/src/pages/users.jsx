import { DataTable, DateField, EmailField, List } from 'react-admin';
import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';
import { Show, SimpleShowLayout, TextField } from 'react-admin';


export const UserList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="name" />
            <DataTable.Col source="email">
                <EmailField source="email" />
            </DataTable.Col>
            <DataTable.Col source="role" />
            <DataTable.Col source="created_at">
                <DateField source="created_at" />
            </DataTable.Col>
        </DataTable>
    </List>
);


export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="role" />
            <DateInput source="created_at" />
        </SimpleForm>
    </Edit>
);


export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="role" />
            <DateField source="created_at" />
        </SimpleShowLayout>
    </Show>
);