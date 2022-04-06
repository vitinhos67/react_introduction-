import React, { Component } from 'react';
import { FaPlus, FaWindowClose, FaEdit } from 'react-icons/fa';
import './main.css';

class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;

    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefa = [...tarefas];

    this.setState({
      tarefas: [...novasTarefa, novaTarefa],
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefa = [...tarefas];

    novasTarefa.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefa],
    });
  };

  handleEdit = (e, index) => {
    console.log(index);
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>
          Lista de tarefas
        </h1>

        <form action="#" className="form" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>

          <ul className="tarefas">

            {tarefas.map((tarefa, index) => (
              <li key={tarefa}>
                {tarefa}
                {' '}
                <span>
                  <FaEdit onClick={(e) => this.handleEdit(e, index)} className="edit" />
                  <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className="delete" />
                </span>

              </li>
            ))}
          </ul>

        </form>
      </div>
    );
  }
}

export default Main;
