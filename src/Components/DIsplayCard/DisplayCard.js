import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause'
import {
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Typography
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core'
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles({
    cardRoot: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        margin: "auto"
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 101,
        height: 101,
        margin: "auto"
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        margin: "auto"
    },
    playIcon: {
        color:"green",
        height: 38,
        width: 38   
    }
})

const DisplayCard = ({ selectedItem, play, handlePlayButton, handlePauseButton }) => {
    const classes = useStyles()

    return(
        <Card className={classes.cardRoot}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {selectedItem.trackName}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {selectedItem.artistName || "no artist"}
                    </Typography>
                </CardContent>

                <CardMedia
                    className={classes.cover}
                    image={`${selectedItem.artworkUrl100}`}
                    title={`${selectedItem.trackname || "no name"}`}
                />

                <div className={classes.controls}>
                    {play 
                        ? (
                            <IconButton aria-label="play/pause" onClick={() => handlePauseButton()}>
                                <PauseIcon className={classes.playIcon} />
                            </IconButton>
                        )
                        : (
                            <IconButton aria-label="play/pause" onClick={() => handlePlayButton()}>
                                <PlayArrowIcon className={classes.playIcon} />
                            </IconButton>
                        )
                   }
                </div>
            </div>
        </Card>
    )
}

export default DisplayCard