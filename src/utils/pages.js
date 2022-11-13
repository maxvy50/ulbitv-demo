export const getPagesCount = (totalPosts, limit) => {
    return Math.ceil(totalPosts/limit);
}

export const getPagesArray = (totalPages) => {
    return [...Array(totalPages).keys()].map(i => i+1);
}