import React from 'react';
import MyInput from "./UI/Inputs/MyInput";
import MySelect from "./UI/Selects/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder={'Search'}
            />
            <MySelect
                options={[
                    {name: 'by title', value: 'title'},
                    {name: 'by content', value: 'body'},
                ]}
                def={'sort by'}
                value={filter.sortField}
                onChange={(sf) => setFilter({...filter, sortField: sf})}
            />
        </div>
    );
};

export default PostFilter;