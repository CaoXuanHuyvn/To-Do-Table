import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./FormTask.scss";
class FormTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      titles: "",
      deadline: "",
      description: "",
      status: "",
    };

    this.onHandleChangeTitle = this.onHandleChangeTitle.bind(this);
    this.onHandleChangeDeadline = this.onHandleChangeDeadline.bind(this);
    this.onHandleChangeDescription = this.onHandleChangeDescription.bind(this);
  }

  onHandleChangeTitle(event) {
    this.setState({ titles: event.target.value });
  }

  onHandleChangeDeadline(event) {
    this.setState({ deadline: event.target.value });
  }
  onHandleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  render() {
    const { sendSubmit, editData, onHandleDeleteButton } = this.props;
    const { id, titles, deadline, description } = editData;

    return (
      <div>
        <div className="wrapper-form-task">
          <div className="wrapper-form-task-text">
            <p className="wrapper-form-task-text-sm">Ticket</p>
          </div>
          <div className="wrapper-form-task-form">
            <Form>
              <FormGroup floating>
                <Input
                  placeholder="Title"
                  id="title"
                  name="title"
                  type="Text"
                  onChange={(event) => this.onHandleChangeTitle(event)}
                  value={id ? titles : this.state.titles}
                />
                <Label for="title">Title</Label>
              </FormGroup>
              <FormGroup floating>
                <Input
                  placeholder="Deadline"
                  id="deadline"
                  name="deadline"
                  type="date"
                  onChange={(event) => this.onHandleChangeDeadline(event)}
                  value={id ? deadline : this.state.deadline}
                />
                <Label for="deadline">Deadline</Label>
              </FormGroup>
              <FormGroup floating>
                <Input
                  placeholder="Description"
                  id="description"
                  name="description"
                  type="textarea"
                  onChange={(event) => this.onHandleChangeDescription(event)}
                  value={id ? description : this.state.description}
                />
                <Label for="description">Description</Label>
              </FormGroup>
              <div className="button">
                <Button
                  onClick={() =>
                    sendSubmit(
                      this.state.titles,
                      this.state.deadline,
                      this.state.description
                    )
                  }
                  color="success"
                  className="button-end"
                >
                  Save
                </Button>
                <Button color="info" className="button-end">
                  Edit
                </Button>
                <Button
                  color="danger"
                  className="button-end"
                  onClick={onHandleDeleteButton}
                >
                  Delete
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormTask;
