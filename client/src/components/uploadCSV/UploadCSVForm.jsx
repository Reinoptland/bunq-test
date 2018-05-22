import React, { PureComponent } from 'react'
import ReactFileReader from 'react-file-reader';
import Papa from 'papaparse'
import { addTransactions } from '../../actions/transactions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

const config = {
	delimiter: "",	// auto-detect
	newline: "",	// auto-detect
	quoteChar: '"',
	escapeChar: '"',
	header: true,
	trimHeader: false,
	dynamicTyping: false,
	preview: 0,
	encoding: "",
	worker: false,
	comments: false,
	step: undefined,
	complete: undefined,
	error: undefined,
	download: false,
	skipEmptyLines: false,
	chunk: undefined,
	fastMode: undefined,
	beforeFirstChunk: undefined,
	withCredentials: undefined
}

class UploadCSVForm extends PureComponent {

  handleFiles = files => {
    const addTransactions = this.props.addTransactions
    const id = this.props.user.id
    
    var reader = new FileReader();
    reader.onload = function(e) {
    // // Use reader.result
    console.log(Papa.parse(reader.result, config).data)
    addTransactions(Papa.parse(reader.result, config).data, id)
    }

   return reader.readAsText(files[0])
   
}

  render() {
		if(!this.props.user) return(<Redirect to='/logout' />)
    return (
          <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
            <button className='btn'>Upload</button>
          </ReactFileReader>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser.user ? state.currentUser.user : null
})

export default connect(mapStateToProps, {addTransactions})(UploadCSVForm)