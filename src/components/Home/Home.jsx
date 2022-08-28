import React from "react";
import "./Home.css";
import add_task from "../../assets/add_task.svg";
import left_arrow from "../../assets/left_arrow.svg";
import right_arrow from "../../assets/right_arrow.svg";
import urgent from "../../assets/urgent.svg";
import options from "../../assets/options.svg";
import options2 from "../../assets/options2.svg";

const Home = () => {
  return (
    <div className="content">
      <div className="tasks">
        <h1 className="titleHome">Minha Rotina</h1>
        <h2>Eventos</h2>
        <button className="btnAddTask">
          <p>Adicionar tarefa</p>
          <img src={add_task} alt="Adicionar tarefa" />
        </button>
        <div className="tasksDates">
          <img src={left_arrow} alt="" />
          <img src={right_arrow} alt="" />
        </div>
        <div className="tasksItems1">
          <div className="taskContainer">
            <input type="checkbox" className="completeTask" />
            <p className="description">Ir no mercado para minha mulher</p>
            <img src={options} alt="Opções de edição" />
          </div>
          <div className="urgent">
            <p>urgente</p>
            <img src={urgent} alt="Imagem de urgência" />
          </div>
        </div>
        <div className="tasksItems2">
          <div className="taskContainer">
            <input type="checkbox" className="completeTask" />
            <p className="description">Visitar imóvel do meu interesse</p>
            <img src={options2} alt="Opções de edição" />
          </div>
        </div>
      </div>
      <div className="divide"></div>
      <div className="spotify"></div>
    </div>
  )
}

export default Home;