import React, { Component } from 'react';

import { FaPlus, FaWindowClose, FaEdit } from 'react-icons/fa';
import './main.css';

class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: ['Fazer café', 'Estudar', 'Correr'],
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>
          Lista de tarefas
        </h1>

        <form action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>

          <ul className="tarefas">

            {tarefas.map((tarefa) => (
              <li key={tarefa}>
                {tarefa}
                {' '}
                <div>
                  <FaEdit className="edit" />
                  <FaWindowClose className="delete" />

                </div>

              </li>
            ))}
          </ul>

        </form>
      </div>
    );
  }
}

export default Main;
