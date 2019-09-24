/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import Dropzone from 'react-dropzone';
import { useMutation } from '@apollo/react-hooks';
import { uploadFileMutation, postsQuery } from '../../../../schema/schema';
import Thumb from './Thumb';

const Upload = props => {
  console.log(props.auth.username);
  const { username } = props.auth;
  const [uploadFile] = useMutation(uploadFileMutation, {
    refetchQueries: [{ query: postsQuery }],
  });
  return (
    <div>
      <Formik
        initialValues={{
          files: [],
          title: '',
          genre: '',
          rating: '',
          diffculty: undefined,
          thumb: undefined,
        }}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          const data = values.files;
          console.log(data);
          console.log(values);

          if (values.files === undefined) {
            uploadFile({
              variables: {
                title: values.title,
                genre: values.genre,
                rating: values.rating,
                diffculty: values.diffculty,
              },
            }).then(res => {
              props.onRequestClose();
            });
          } else {
            uploadFile({
              variables: {
                file: data[0],
                title: values.title,
                genre: values.genre,
                rating: values.rating,
                diffculty: values.diffculty,
                created: username,
              },
            }).then(res => {
              props.onRequestClose();
            });
          }
          resetForm();
          setSubmitting(false);
        }}
        render={({
          values,
          // handleChange,
          // handleBlur,
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
              accept="image/png, image/gif, image/jpeg"
            >
              {({ getRootProps, getInputProps, isDragActive }) => (
                <section>
                  <div {...getRootProps()} className="dropzone">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <div className="drag-container">
                        <Thumb file={values.files[0]} />
                        <div className="overlay">
                          <h1 className="drag-text">{/* image */}</h1>
                        </div>
                      </div>
                    ) : (
                      <div className="drop-container">
                        <Thumb
                          file={values.files[0]}
                          text="Click to upload image"
                        />
                        <div className="overlay">
                          <h1 className="drop-text">{/* image */}</h1>
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}
            </Dropzone>
            <label htmlFor="title">Title: </label>
            <Field
              type="text"
              name="title"
              id="movie-title"
              className="movie-input"
              placeholder="Doctor Strange"
            />
            <label htmlFor="genre">Genre: </label>
            <Field
              type="text"
              name="genre"
              id="movie-genre"
              className="movie-input"
              placeholder="action"
            />
            <label htmlFor="rating">Rating:</label>
            <Field type="text" name="rating" placeholder="T" />
            <label htmlFor="diffculty"> Stars:</label>
            <Field
              type="number"
              name="diffculty"
              min={1}
              step={1}
              max={5}
              placeholder="1-5"
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Upload);
