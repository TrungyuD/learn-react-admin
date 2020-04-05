import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import { ReferenceInput, SelectInput } from 'react-admin';

import PostQuickCreateButton from './PostQuickCreateButton';
import PostQuickPreviewButton from './PostQuickPreviewButton';

const PostReferenceInput = props => (
    <Fragment>
        <ReferenceInput {...props}>
            <SelectInput optionText="title" />
        </ReferenceInput>
        <PostQuickCreateButton />
        <Field
            name="post_id"
            component={({ input }) =>
                input.value && <PostQuickPreviewButton id={input.value} />
            }
        />
    </Fragment>
);

export default PostReferenceInput;
