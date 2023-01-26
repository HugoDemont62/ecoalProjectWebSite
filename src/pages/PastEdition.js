import * as React from 'react';
import {useParams} from "react-router-dom";
import ArchiveData from "../data/archiveData";


const findEdition = id => ArchiveData.find(edition => edition.incre === id);
function PastEdition() {
    const { id } = useParams();
    const edition = findEdition(id)
    console.log(edition)

    return(
        <>
            {edition.date}
        </>
    )
}
export default PastEdition