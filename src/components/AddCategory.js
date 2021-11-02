import React, { useState } from 'react'

const AddCategory = ({ setCategories }) => {

    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim().length > 2) {
            setCategories(() => [search]);
            setSearch('');
        }
    };

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    placeholder="Add Category"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </div>
    )
}

export default AddCategory
