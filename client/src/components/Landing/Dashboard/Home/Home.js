import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Upload from '../AddGame/AddGame';
import { Posts } from './Posts';

Modal.setAppElement('#root');

export class Home extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="App">
        <div className="Home">
          <h1>
            <Link>My-Movie-Blog</Link>
          </h1>
          <button onClick={this.openModal}>Add Post</button>
          <a href="/auth/logout">LOGOUT</a>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
            className="Modal"
            overlayClassName="Overlay"
          >
            <button onClick={this.closeModal}>x</button>
            <h1 className="subtitle">Add Post</h1>
            <Upload onRequestClose={this.closeModal} />
          </Modal>
          <Posts />
        </div>
      </div>
    );
  }
}
