import * as React from 'react'
import styled from 'styled-components'
import GridContainer from '../../components/GridContainer';

const ProjectDetailContainer = styled(GridContainer)`
      background-color: #acac62;
      grid-area: main;
      color: ${props => props.primary ? 'blue' : 'rebeccapurple'};
`

export default class ProjectList extends React.Component<any> {
    render() {
        return (
            <ProjectDetailContainer>
                {this.props.status ?
                    <p>{this.props.status}</p> :
                    `${this.props.project.name}(${this.props.project.id}) - ${this.props.project.description}`
                }
            </ProjectDetailContainer>
        )
    }
}
