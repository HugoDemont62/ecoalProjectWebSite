import * as React from 'react';
import {useParams} from "react-router-dom";
import ArchiveData from "../data/archiveData";
import Style from "../styles/pastedition.module.css";

const findEdition = id => ArchiveData.find(edition => edition.incre === id);
function PastEdition() {
    const style = Style;
    const { id } = useParams();
    const edition = findEdition(id)

    return(
        <div className={style.pastEdit}>
            <div className={style.headerTitle}>
                <h1>{edition.date}</h1>
                <div className={style.bulle}></div>
            </div>
            <div>
                <img src={edition.img} alt={id}/>
            </div>
            <div>
                <p>{edition.desc}</p>
            </div>
        </div>
    )
}
export default PastEdition