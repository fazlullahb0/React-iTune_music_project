import React from 'react'
import { uuid } from 'uuidv4'
import {
    List,
    ListItem,
    Avatar,
    Typography
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    container:{
        display: "flex",
        flexDirection: "column",
        width: "70%"
    },
    list: { 
        listStyleType: "none", 
        marginLeft: "50px",
        overflow: "auto",
       
    },
    listItem: { cursor: "pointer" },
    avatar: {
        margin: 15
    }
})

const ResultsList = props => {
    const { results, handleItemSelection } = props
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Typography 
                variant="h4" 
                style={{
                    color: "green",
                    margin: "0 10px 20px 0"
                }}
            >
                Results
            </Typography>

            <List 
                className={classes.list}
            >
                {results.map(result => {
                    const id = uuid()

                    return (
                        <ListItem 
                            key={id}
                            className={classes.listItem}
                            onClick={() => handleItemSelection(result)}
                        >
                            <Avatar 
                                alt={`${result.trackName}`} 
                                src={`${result.artworkUrl100}`} 
                                className={classes.avatar} 
                            />
                            
                            {`${result.trackName} - ${result.artistName}`}
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
}

export default ResultsList