import { CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
    return (
        <div style={{height:'40vh'}}>
            <CircularProgress sx={{textAlign:'center'}}/>
        </div>
    )
}

export default Loading
