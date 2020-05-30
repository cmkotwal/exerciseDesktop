import React from 'react'
import { Tabs, Paper,Tab } from '@material-ui/core'

const Footer=({muscles,onSubmit,category})=>{

    const index=category
    ? muscles.findIndex(group=>group===category)+1
    :0

    const onSelectCategory=(e,index)=>{
           onSubmit(index===0? '':muscles[index-1])
    }
    return(
        <Paper square>
            <Tabs
                value={index}
                onChange={onSelectCategory}
                textColor='primary'
                indicatorColor='primary'
                centered
            >
                <Tab label='All'/>
                {muscles.map((group)=>
                     <Tab label={group}/>
                )}
               
            </Tabs>
        </Paper>
    )
}

export default Footer