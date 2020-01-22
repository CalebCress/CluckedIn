import React, {Component} from 'react';
import './app.css';

let idJson = '{"Dale Yocum": "U0ALQGF9V", "Andrew Merrill": "U0AP34FL3", "Shaan Hurley": "U0GBK3BT9", "Duncan Soiffer": "U2DCR76RL", "Zachary Robinson": "U2DD9RSCR", "Dylan Smith": "U2DDJCR6Z", "Tristan Peng": "U2DEMJB7V", "Avery Pritchard": "U2DQFH9G8", "Liam Wang": "U2DUVJZDZ", "Kristin Cohrs": "U73DU4C6M", "Mick L.": "U74077C66", "Adrian DeLaczay": "U741PCYCB", "Audrey Daniels": "U744J75FX", "Annika Holliday": "U74CN5482", "Eric Wang": "U74SN4JS2", "Nate Sales": "U755JP4LX", "Tiffany Toh": "U756BTMLP", "Amy Wang": "U7664LK5Y", "Jeffrey Burt": "UCUU5GHTK", "Hannah Ma": "UCUUT8U81", "Caleb Cress": "UCWQB0ZQC", "Josh Negreanu": "UCX5YLY77", "Lexi Overstreet": "UD18A69FZ", "Micah Powch": "UMWEQAGV8", "Nathan": "UMZRZT941", "Seth Knights": "UN0FQ4VJ7", "Chloe Jahncke": "UNE0YJH6K", "Alyssa Sanchez": "UNE5RML0G", "Lucas Holliday": "UNK571NGP", "Cynthia Yang": "UNN50C8JG", "Keola Edelen Hare": "UQ0UR7ZNY", "Barbara Ostos": "UQKSFFB6J", "Kendrick Dahlin": "UQZ7AE9SN", "Julia Kiaer": "UR42PB0NM"}'
idJson = JSON.parse(idJson);

//Member class stores name and time in
class Member {
    constructor(name, time) {
        this.name = name;
        this.date = new Date(time);
        this.time = ((this.date.getHours() - 1) % 12) + 1 + ':' + (this.date.getMinutes() < 10 ? '0' : '') + this.date.getMinutes();
    }
}

function MemberListItem(props) {
    let id = idJson[props.name];
    return (
        <a href={"https://team1540.slack.com/team/" + id}>
            <div className="member"><p className="name membersElement">{props.name}</p>
                <p className="timeIn membersElement">{props.time}</p></div>
        </a>
    )
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: []
        };
        fetch('/api/getIn')
            .then(res => res.json())
            .then(json => {
                let keys = Object.keys(json);
                this.setState({
                    members: keys.map(key => new Member(key, parseInt(json[key])))
                })
            })
    }
    render() {
        return (
            <div className="members">
                {this.state.members.map(member => <MemberListItem name={member.name} time={member.time} />)}
            </div>
        )
    }
}
