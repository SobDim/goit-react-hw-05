import { Field, Form, Formik } from 'formik';

const SearchForm = ({ SearchQ }) => {
  const initialValues = {
    query: '',
  };

  const handleSubmit = values => {
    SearchQ({ query: values.query });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field name="query" placeholder="Search movie..." />
        <button className="button" type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
