import * as React from "react";
import { useMediaQuery } from '@material-ui/core';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    EditButton,
    TextInput,
    SimpleForm,
    Create,
    Edit,
    ReferenceInput,
    SelectInput,
    SimpleList,
    ReferenceField,
} from 'react-admin';

const brigadeMedicalPersonnelFilters = [
    <TextInput source="nickName" label="Search" alwaysOn />,
]

export const StaffList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (<List {...props} filters={brigadeMedicalPersonnelFilters}>
        {isSmall ? (
            <SimpleList
            primaryText={record => record.firstName}
            secondaryText={record => `${record.lastName}`}
            tertiaryText={record => record.position}
        />) : (
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="nickName" />
            <EditButton />
        </Datagrid>
        )}
    </List>
)};

export const StaffEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="nickName" />
        </SimpleForm>
    </Edit>
)

export const StaffCreate = props => (
    <Create {...props}>
        <SimpleForm>             
            <TextInput source="nickName" />
        </SimpleForm>
    </Create>
)