import * as React from 'react';
import ArchiveData from "../data/archiveData";
import Style from "../styles/pastedition.module.css"

function PastEditions() {
    const style = Style;
    return (
        <div className={style.pastEdit}>
            {ArchiveData.map((data, index) => (
                        <a href={"/pe/"+index} className={style.link}>
                            <img src={data.img} alt={index}/>
                        </a>
            ))}
        </div>
    );

}

export default PastEditions