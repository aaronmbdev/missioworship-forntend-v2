import React, {Component} from "react";
import AllSongsTable from "../components/songs/allSongsTable";
import SongProposalForm from "../components/songs/songProposalForm";

export default class SongsLibrarySection extends Component {
    render() {
        return(
            <div>
                <AllSongsTable />
                <p></p>
                <SongProposalForm />
            </div>
        );
    }
}