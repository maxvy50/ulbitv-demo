import {getPagesArray, getPagesCount} from "../utils/pages";
import {useState} from "react";

export function usePagination(postsCount, postsPerPage, callback) {

    const [page, setPage] = useState(1);

    const changePage = p => {
        setPage(p);
        callback(postsPerPage, p);
    }

    const pagesArray = getPagesArray(getPagesCount(postsCount, postsPerPage));

    return [changePage, page, pagesArray];
}