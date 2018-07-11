import * as React from "react";

export default class ProjectListItem extends React.Component<any, any> {
    public render() {
        return (
            <li key={this.props.id} onClick={() => this.props.setActiveProject(this.props.id)}>
                {this.props.name}
            </li>
        );
    }
}
