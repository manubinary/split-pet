import React from 'react';
import './App.css';
import initialData from './initial-data';
import Pet from './pet.js';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends React.Component {
  state = {
    initiallists: initialData.initiallists,
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: []
  };


  onDragEnd = result => {
    if (result.destination !== null) {
      let initial = this.state[result.source.droppableId];
      const currentIndex = initial.findIndex(item => item.id === result.draggableId);
      if (currentIndex >= 0 && (this.state[result.destination.droppableId].length === 0 || result.destination.droppableId === 'initiallists')) {
        const destination = this.state[result.destination.droppableId];
        destination.push(initial[currentIndex]);
        this.setState({
          [result.destination.droppableId]: destination
        });
        initial.splice(currentIndex, 1);
        this.setState({
          [result.source.droppableId]: initial
        })
      }
    }
  }

  render() {
    return (
      <div>
        <h1 className="header">Simple Drag and Drop App</h1>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Pet key="columnid"
            lists={this.state.initiallists}
            monday={this.state.monday}
            tuesday={this.state.tuesday}
            wednesday={this.state.wednesday}
            thursday={this.state.thursday}
            friday={this.state.friday}
            />;
        </DragDropContext>
      </div>
    );
  }
}

export default App;
