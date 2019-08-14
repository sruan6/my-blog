import React, { useCallback } from 'react';
import { Formik } from 'formik';
import Dropzone from 'react-dropzone';
import { useMutation } from '@apollo/react-hooks';
import { uploadFileMutation } from '../../../../schema/schema';
import { filesQuery } from '../Home/Files';
import Thumb from './Thumb';

export const Upload = () => {
  const [uploadFile] = useMutation(uploadFileMutation, {
    refetchQueries: [{ query: filesQuery }],
  });
  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{
          files: [],
          title: '',
        }}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          const data = values.files;
          console.log(data);
          uploadFile({
            variables: {
              file: data[0],
              title: values.title,
            },
          });
          resetForm();
          setSubmitting(false);
        }}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Dropzone
              onDrop={acceptedFiles => {
                // do nothing if no files
                values.files = [];
                if (acceptedFiles.length === 0) {
                  return;
                }

                // on drop we add to the existing files
                setFieldValue('files', values.files.concat(acceptedFiles));
              }}
            >
              {({ getRootProps, getInputProps, isDragActive }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop the files here ...</p>
                    ) : (
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    )}
                  </div>
                  <Thumb file={values.files[0]} />
                </section>
              )}
            </Dropzone>

            <input
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      />
    </div>
  );
};
