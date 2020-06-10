import React, {Component} from 'react'

class Table extends Component {
    render(){
        return (
            <table>
                <thead>
                    <th>Name</th>
                    <th>Job</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Charlie</td>
                        <td>Janitor</td>
                    </tr>
                    <tr>
                        <td>Mac</td>
                        <td>Bouncer</td>
                    </tr>
                    <tr>
                        <td>Dennis</td>
                        <td>Bartender</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table