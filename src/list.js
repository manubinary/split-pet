import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    margin: 4px;
    /* border: 1px solid lightgrey; */
    border-radius: 2px;
    padding: 8px;
    background-color: white;
`;

export default class List extends React.Component {
  render() {
    return (
        <div className="elementContainer">
            <div className="name">
                <Draggable draggableId={this.props.list.id} index={this.props.index}>
                    {provided => (
                        <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                          {this.props.list.name}
                          <div className="image">
                            <img className="img" src={"/images/" + this.props.list.image} />
                          </div>
                        </Container>
                    )}
                </Draggable>
            </div>
        </div>
    );
  }
}
