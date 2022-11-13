import {useMemo} from "react";

export const usePosts = (posts, filter) => {

    const sortedPosts = useMemo(() => {
        if (filter.sortField) {
            return [...posts].sort((a, b) =>
                a[filter.sortField].localeCompare(b[filter.sortField]));
        }
        return posts;
    }, [filter.sortField, posts]);


    return useMemo(() => sortedPosts.filter(p => p.title.toLowerCase().includes(filter.query)),
        [filter.query, sortedPosts]);
}