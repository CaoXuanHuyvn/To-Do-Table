import React, { Component } from "react";
import "./Ticket.scss";
class Ticket extends Component {
  render() {
    const { datas, deleteIcon, onHandleEditIcon } = this.props;
    return (
      <div>
        <div className="wrapped-title">
          <div className="wrapped-title-text">
            <p className="wrapped-title-text-sm">{datas.titles}</p>
            <div className="delete-icon" onClick={() => deleteIcon(datas.id)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className="wrapped-title-space">
            {datas.description}
            <div className="wrapped-title-space-under">
              {datas.deadline}
              <i
                className="fa-solid fa-pencil icon-pencil"
                onClick={() =>
                  onHandleEditIcon(
                    datas.id,
                    datas.titles,
                    datas.deadline,
                    datas.description
                  )
                }
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ticket;
