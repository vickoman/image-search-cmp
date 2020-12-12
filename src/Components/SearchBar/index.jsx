import React, { useState } from 'react'

const SearchBar =  () => {
    const [term, setTerm] = useState("");

    const onSearchSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        alert("adasd");
    }
    return (
        <div>
            <form onSubmit={onSearchSubmit}>
            <input
                class="form-input mt-1 block w-full border py-6"
                placeholder="Place the term here"
                id="term"
                value={term}
                onChange={(e) => setTerm(e.target.value.toLowerCase())}
            />
            </form>
        </div>
    )
}

export default SearchBar;
