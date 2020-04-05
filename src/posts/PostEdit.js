import RichTextInput from "ra-input-rich-text";
import React from "react";
import {
  ArrayInput,
  BooleanInput,
  CheckboxGroupInput,
  Datagrid,
  DateField,
  DateInput,
  DisabledInput,
  EditButton,
  FormTab,
  ImageField,
  ImageInput,
  LongTextInput,
  NumberInput,
  ReferenceArrayInput,
  ReferenceManyField,
  SelectArrayInput,
  SelectInput,
  SimpleFormIterator,
  TabbedForm,
  TextField,
  TextInput,
  minValue,
  number,
  required
} from "react-admin"; // eslint-disable-line import/no-unresolved
import PostTitle from "./PostTitle";
import Edit from "../Edit";

const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <TabbedForm defaultValue={{ average_note: 0 }}>
      <FormTab label="post.form.summary">
        <TextInput disable source="id" />
        <TextInput source="title" validate={required()} />
        <TextInput multiple source="teaser" validate={required()} />
        <CheckboxGroupInput
          source="notifications"
          choices={[
            { id: 12, name: "Ray Hakt" },
            { id: 31, name: "Ann Gullar" },
            { id: 42, name: "Sean Phonee" }
          ]}
        />
        <ImageInput multiple source="pictures" accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
      </FormTab>
      <FormTab label="post.form.body">
        <RichTextInput
          source="body"
          label=""
          validate={required()}
          addLabel={false}
        />
      </FormTab>
      <FormTab label="post.form.miscellaneous">
        <ReferenceArrayInput reference="tags" source="tags">
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <ArrayInput source="backlinks">
          <SimpleFormIterator>
            <DateInput source="date" />
            <TextInput source="url" />
          </SimpleFormIterator>
        </ArrayInput>
        <DateInput source="published_at" options={{ locale: "pt" }} />
        <SelectInput
          source="category"
          choices={[
            { name: "Tech", id: "tech" },
            { name: "Lifestyle", id: "lifestyle" }
          ]}
        />
        <NumberInput
          source="average_note"
          validate={[required(), number(), minValue(0)]}
        />
        <BooleanInput source="commentable" defaultValue />
        <TextInput source="views" />
      </FormTab>
      <FormTab label="post.form.comments">
        <ReferenceManyField
          reference="comments"
          target="post_id"
          addLabel={false}
        >
          <Datagrid>
            <DateField source="created_at" />
            <TextField source="author.name" />
            <TextField source="body" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default PostEdit;
