import React from "react"
import LoaderGif from "../elements/transition.gif"
import {Box} from "@mui/system"

function Loader() {
    return(
        <Box component="div" sx={{
            maxWidth: 100
        }}>
            <img src={LoaderGif} alt="Loader vague"/>
        </Box>
    )
}

export default Loader