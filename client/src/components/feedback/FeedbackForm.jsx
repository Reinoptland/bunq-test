import React, { PureComponent } from 'react'
import Radio from 'material-ui/Radio'


export default class FeedbackForm extends PureComponent {
    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <h3> Choose your sauce:</h3>
                        <label>
                            <Radio name="sauce" checked={this.state.value === name} value={name} onChange={this.handleChange} />Question <br />
                        </label>)
            </div>
        )
    }
}