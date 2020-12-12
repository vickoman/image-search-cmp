import { useFormik } from 'formik';
import React from 'react'

const SearchBar =  ({onSubmitSearch}) => {
    const formik = useFormik({
        initialValues: {
            term: ""
        },
        onSubmit: (values) => {
            onSubmitSearch(values.term.toLowerCase());
        }
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input
                    className="form-input mt-1 block w-full border py-6"
                    placeholder="Place the term here"
                    name="term"
                    id="term"
                    value={formik.values.term}
                    onChange={formik.handleChange}
                />
            </form>
        </div>
    )
}

export default SearchBar;
