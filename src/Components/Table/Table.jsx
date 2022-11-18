import React, { Component } from "react";
import ListTicket from "../ListTicket/ListTicket";
import FormTask from "../FormTask/FormTask";
import "./Table.scss";
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
      editTicket: [],
    };
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onHandleEditIcon = this.onHandleEditIcon.bind(this);
    this.onHandleDeleteIcon = this.onHandleDeleteIcon.bind(this);
    this.onHandleDeleteButton = this.onHandleDeleteButton.bind(this);
  }

  onHandleDeleteIcon(id) {
    let currenttickets = this.state.tickets;

    let newticketsarr = currenttickets.filter((ticketid) => ticketid.id !== id);
    this.setState({ tickets: newticketsarr });
    // console.log("u", currenttickets);
    // console.log("n", newticketsarr);
    // console.log(id);
  }
  onHandleSubmit(titles, deadline, description) {
    let currenttickets = this.state.tickets;
    let i;
    if (currenttickets[currenttickets.length - 1]?.id) {
      i = currenttickets[currenttickets.length - 1].id + 1;
    } else {
      i = 1;
    }
    if (titles && deadline && description) {
      let newtickets = {
        id: i,
        titles: titles,
        deadline: deadline,
        description: description,
        status: ticketStatus.TODO,
      };
      currenttickets.push(newtickets);
      this.setState({ tickets: currenttickets });
    }
  }
  onHandleEditIcon(id, titles, deadline, description) {
    console.log(id);
    console.log(titles);
    console.log(deadline);
    console.log(description);
    let editData = {
      id: id,
      titles: titles,
      deadline: deadline,
      description: description,
      status: ticketStatus.TODO,
    };
    this.setState({ editTicket: editData });
  }
  onHandleDeleteButton() {
    let currenttickets = this.state.tickets;
    let currentticket = this.state.editTicket;
    let newticketsarr = currenttickets.filter(
      (ticketid) => ticketid.id !== currentticket.id
    );
    this.setState({ tickets: newticketsarr });
  }
  render() {
    let { editTicket, tickets } = this.state;
    // console.log(editTicket);
    console.log(tickets);
    return (
      <div className="board">
        <p className="board-text"> To Do Task Board</p>
        <div className="huge-table">
          <FormTask
            sendSubmit={this.onHandleSubmit}
            editData={editTicket}
            onHandleDeleteButton={this.onHandleDeleteButton}
          />
          <ListTicket
            huy={this.state.tickets}
            deleteIcon={this.onHandleDeleteIcon}
            onHandleEditIcon={this.onHandleEditIcon}
            divideListTicket={this.todoTasks}
          >
            To Do
          </ListTicket>
          <ListTicket divideListTicket={this.progressTasks}>
            Progress
          </ListTicket>
          <ListTicket divideListTicket={this.doneTasks}>Done</ListTicket>
        </div>
      </div>
    );
  }
}
const taskDivisor = (tasks) => {
  let todoTasks = [];
  let progressTasks = [];
  let doneTasks = [];

  for (const tickets of tasks) {
    // eslint-disable-next-line default-case
    switch (tickets.status) {
      case ticketStatus.TODO:
        todoTasks.push(tickets);
        break;
      case ticketStatus.PROGRESS:
        progressTasks.push(tickets);
        break;
      case ticketStatus.DONE:
        doneTasks.push(tickets);
        break;
    }
  }

  return { todoTasks, progressTasks, doneTasks };
};
const ticketStatus = {
  TODO: 1,
  PROGRESS: 2,
  DONE: 3,
};
export { Table, ticketStatus, taskDivisor };
