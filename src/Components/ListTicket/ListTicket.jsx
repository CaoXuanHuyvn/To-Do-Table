import React, { Component } from "react";
import Ticket from "../Title/Ticket";
import "./ListTicket.scss";
class ListTicket extends Component {
  render() {
    const { huy, deleteIcon, onHandleEditIcon } = this.props;
    const ticketsRender = huy?.map((datas) => (
      <Ticket
        key={datas.id}
        datas={datas}
        deleteIcon={deleteIcon}
        onHandleEditIcon={onHandleEditIcon}
      />
    ));
    return (
      <div className="wrapper-donetable">
        <div className="wrapper-donetable-text">
          <p className="wrapper-donetable-text-sm">{this.props.children}</p>
        </div>
        <div className="wrapper-donetable-space">{ticketsRender}</div>
      </div>
    );
  }
}

export default ListTicket;
