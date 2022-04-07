import React, { Component } from 'react';
import { FaPlus, FaWindowClose, FaEdit } from 'react-icons/fa';
import './main.css';

class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
  const tarefas = JSON.parse(localStorage.getItem('tarefas'));

  if (!tarefas) return;

  this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;

    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefa = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefa, novaTarefa],
        novaTarefa: '',
      });
    } else {
      novasTarefa[index] = novaTarefa;
      this.setState({
        tarefas: [...novasTarefa],
        index: -1,
      });
    }
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
    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
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
