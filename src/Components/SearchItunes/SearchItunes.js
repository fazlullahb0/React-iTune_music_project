import React from 'react'
import { connect } from 'react-redux'
import * as itunesSearchActions from "../../redux-core/itunesSearch/actions"
import ResultsList from "../List"
import DisplayCard from "../DIsplayCard"
import {
    TextField,
    Typography
} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core'

const styles = () => ({
    divContainer: {
        padding: 25,
        margin: "5px",
        display: "flex",
        flexDirection: "row",
        height: "320px",
        border: "2px solid green"
    }
})

class SearchItunes extends React.Component {
    state={
        searchTerm: "",
        selectedItem: null,
        audioUrl: "",
        play: false,
        pause: true,
        previewAudio: null
    }

    handleSearchTermChange = e => {

        if(e.target.value === "") {
            this.setState({
                searchTerm: ""
            })
        }

        this.setState({
            searchTerm: e.target.value
        })

        this.handleSearch(e.target.value)
    }

    handleSearch = searchTerm => {
        const { searchItunes } = this.props

        searchItunes(searchTerm)
    }

    handleItemSelection = item => {
        this.setState({
            selectedItem: item,
            audioUrl: item.previewUrl,
            play: false,
            pause: true,
        })
    }

    handlePlayButton = () => {
        const { audioUrl, previewAudio } = this.state
        const newPreviewAudio = new Audio(audioUrl)

        if(previewAudio) {
            previewAudio.pause()
            
            this.setState({
                previewAudio: null
            })
        }
        
        this.setState({
            play: true,
            pause: false,
            previewAudio: newPreviewAudio
        }, () => {
            this.playAudio()
        })
    }

    handlePauseButton = () => {
        this.setState({
            play: false,
            pause:true,
        }, () => {
            this.playAudio()
        })
    }

    playAudio = () => {
        const { play, previewAudio } = this.state

        return play ? previewAudio.play() : previewAudio.pause()
    }


    render() {
        const { searchTerm, selectedItem, play } = this.state
        const { results, classes } = this.props

        return(
            <>
                <div className={classes.divContainer}>
                    <div style={{ display: "flex", flexDirection: "column"}}>
                        <Typography 
                            variant="h4" 
                            style={{
                                color: "Green",
                                marginBottom: 50}}
                        >
                            Search iTunes Music
                        </Typography>

                        <TextField 
                            type="text" 
                            value={searchTerm} 
                            placeholder="Search iTunes Music" 
                            onChange={e => this.handleSearchTermChange(e)} 
                        />
                    </div>

                    <ResultsList 
                        results={searchTerm.length ? results : []} 
                        handleItemSelection={this.handleItemSelection}
                    />
                </div>

                {/* card of selectedItem */}
                {selectedItem ? (
                    <DisplayCard 
                        selectedItem={selectedItem}
                        play={play}
                        handlePlayButton={this.handlePlayButton}
                        handlePauseButton={this.handlePauseButton}
                    />
                ) : []}
            </>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        results: state.itunesSearch.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchItunes: searchTerm => dispatch({ 
            type: itunesSearchActions.SEARCH_ITUNES,
            searchTerm
        })
    }
}

const StyledComponent = withStyles(styles)(SearchItunes)

export default connect(mapStateToProps, mapDispatchToProps)(StyledComponent)