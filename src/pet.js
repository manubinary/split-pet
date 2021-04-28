import React from 'react';
import styled from 'styled-components';
import List from './list';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
    margin: 8px;
    border-radius: 2px;
    height: auto;
`;

const Title = styled.h3`
    padding: 8px;
`;

const NameList = styled.div`
    padding: 8px;
    width: 350px;
    height: 200px;
`;

const Day = styled.div`
    margin: 8px;
    border: 1px solid #000;
}
`;

const DayInner = styled.div`
    height: 300px;
`;

export default class Pet extends React.Component {
  render() {
    return (
        <Container>
            <div className="main">
                <div className="left">
                    <Title>Pets</Title>
                    <Droppable droppableId="initiallists">
                        {(provided) => (
                            <div className="initial">
                                <NameList
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {this.props.lists.map((list, index) => (
                                        <List key={list.id} list={list} index={index} />
                                    ))}
                                    {provided.placeholder}
                                </NameList>
                            </div>
                        )}
                    </Droppable>
                </div>
                <div className="right">
                  <Title>Assigned</Title>
                  <Day>
                        <Title>Monday</Title>
                        <Droppable droppableId="monday">
                        {(provided) => (
                            <NameList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                <DayInner>
                                    {this.props.monday.map((list, index) => (
                                        <List key={list.id} list={list} index={index} />
                                    ))}
                                    {provided.placeholder}
                                </DayInner>
                            </NameList>
                        )}
                        </Droppable>
                    </Day>
                    <Day>
                        <Title>Tuesday</Title>
                        <Droppable droppableId="tuesday">
                        {(provided) => (
                            <NameList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                <DayInner>
                                    {this.props.tuesday.map((list, index) => (
                                        <List key={list.id} list={list} index={index} />
                                    ))}
                                    {provided.placeholder}
                                </DayInner>
                            </NameList>
                        )}
                        </Droppable>
                    </Day>
                    <Day>
                        <Title>Wednesday</Title>
                        <Droppable droppableId="wednesday">
                        {(provided) => (
                            <NameList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                <DayInner>
                                    {this.props.wednesday.map((list, index) => (
                                        <List key={list.id} list={list} index={index} />
                                    ))}
                                    {provided.placeholder}
                                </DayInner>

                            </NameList>
                        )}
                        </Droppable>
                    </Day>
                    <Day>
                        <Title>Thursday</Title>
                        <Droppable droppableId="thursday">
                        {(provided) => (
                            <NameList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                <DayInner>
                                    {this.props.thursday.map((list, index) => (
                                        <List key={list.id} list={list} index={index} />
                                    ))}
                                    {provided.placeholder}
                                </DayInner>

                            </NameList>
                        )}
                        </Droppable>
                    </Day>
                    <Day>
                        <Title>Friday</Title>
                        <Droppable droppableId="friday">
                        {(provided) => (
                            <NameList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                <DayInner>
                                    {this.props.friday.map((list, index) => (
                                        <List key={list.id} list={list} index={index} />
                                    ))}
                                    {provided.placeholder}
                                </DayInner>

                            </NameList>
                        )}
                        </Droppable>
                    </Day>
                </div>
            </div>
        </Container>
    );
  }
}
