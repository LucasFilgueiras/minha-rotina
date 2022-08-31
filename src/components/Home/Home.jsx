import React, { useState, useEffect } from "react";
import "./Home.css";
import EventsRepository from "../../repositories/EventsRepository";
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { MdAddTask } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { TbAlertTriangle } from 'react-icons/tb';
import Modal from 'react-modal';
import PrimaryButton from "../../shareds/Buttons/PrimaryButton";
import DangerButton from "../../shareds/Buttons/DangerButton";

const Home = () => {
  const eventsRepository = new EventsRepository();

  const [currentDay, setCurrentDay] = useState(new Date());
  const [weekDays, setWeekDays] = useState([]);
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [updateEventModalIsOpen, setUpdateEventModalIsOpen] = useState(false);
  const [eventParams, setEventParams] = useState({});

  useEffect(() => {
    generateWeekDays(currentDay.toDateString());
    getEvents(currentDay);
  }, []);

  const generateWeekDays = (dateString) => {
    let days = [];
    let index = 0;

    while (index <= 7) {
      const date = new Date(dateString);
      date.setDate(date.getDate() + index);

      days.push(date);
      index++;
    }
    setWeekDays(days);
  }

  const updateCurrentPage = (type) => {
    if (type === "previus") {
      const date = new Date(weekDays[0].toDateString());
      date.setDate(date.getDate() - 7);

      generateWeekDays(date.toDateString());
      return;
    }

    const date = new Date(weekDays[weekDays.length - 1].toDateString());
    date.setDate(date.getDate() + 7);

    generateWeekDays(date.toDateString());
  }

  const getEvents = async (date) => {
    const events = await eventsRepository.getEventsByDate(date);
    setEvents(events);
    setCurrentDay(new Date(date));
  }

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const openUpdateEventModal = (eventId) => {
    setEventParams({...eventParams, id: eventId});
    setUpdateEventModalIsOpen(true);
  }

  const closeUpdateEventModal = () => {
    setUpdateEventModalIsOpen(false);
  }

  const handleCreateEventInputsChange = (event) => {
    setEventParams({...eventParams, [event.target.name]: event.target.value })
  }

  const handleCreateEventButtonClick = (event) => {
    event.preventDefault();
    try {
      eventsRepository.create(eventParams);
      getEvents(currentDay);
      setModalIsOpen(false);
    } catch(error) {
      console.log(error);
    }
  }

  const handleUpdateEventButtonClick = (event) => {
    event.preventDefault();
    try {
      eventsRepository.update(eventParams);
      getEvents(currentDay);
      setUpdateEventModalIsOpen(false);
    } catch(error) {
      console.log(error);
    }
  }

  const handleDeleteEventButtonClick = (event) => {
    event.preventDefault();
    try {
      eventsRepository.delete(eventParams.id);
      getEvents(currentDay);
      setUpdateEventModalIsOpen(false);
    } catch(error) {
      console.log(error);
    }
  }


  return (
    <div className="content">
      <div className="tasks">
        <h1 className="titleHome">Minha Rotina</h1>
        <h2>Eventos</h2>
        <button className="btnAddTask" onClick={openModal}>
          <p>Adicionar tarefa</p>
          <MdAddTask />
        </button>
        <div className="tasksDates">
          <RiArrowLeftSLine fontSize={32} cursor="pointer" onClick={() => updateCurrentPage("previus")} />
          {weekDays.map((date) => (
            <span
              className={currentDay.toDateString() === date.toDateString() ? 'currentDay' : ''}
              key={date.toDateString()}
              onClick={() => getEvents(date.toDateString())}
            >
              {date.toLocaleDateString()}
            </span>
          ))}
          <RiArrowRightSLine fontSize={32} cursor="pointer" onClick={() => updateCurrentPage("after")} />
        </div>
        {events.length !== 0 ? events.map(event => <div key={event.id} className="tasksItems1">
          <div className="taskContainer">
            <div>
              <input type="checkbox" className="completeTask" />
              <p className="description">{event.title}</p>
              {event.description ?? <small>
                {event.description}
              </small>}
            </div>
            <BsThreeDots cursor="pointer" fontSize={20} onClick={() => openUpdateEventModal(event.id)}/>
          </div>
          {
          event.priority == "urgent" && <div className="urgent">
            <p>{event.priority}</p>
            <TbAlertTriangle />
          </div>
          }
        </div>
        ) : <span>Sem eventos para o dia {currentDay.toLocaleDateString()}</span>
        }
      </div>
      <div className="divide"></div>
      <div className="spotify"></div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <h1>Criar evento</h1>
        <form>
          <label>
            Título
            <input type="text" name="title" placeholder="título" onChange={handleCreateEventInputsChange}/>
          </label>
          <label>
            Descrição
            <textarea type="text" name="description" placeholder="descrição" onChange={handleCreateEventInputsChange}/>
          </label>
          <label>
            Data de início
            <input type="date" name="start_date" placeholder="título" onChange={handleCreateEventInputsChange}/>
          </label>
          <PrimaryButton onClick={handleCreateEventButtonClick}>criar evento</PrimaryButton>
        </form>
      </Modal>
      <Modal
         isOpen={updateEventModalIsOpen}
         onRequestClose={closeUpdateEventModal}
         ariaHideApp={false}
      >
        <h1>Editar evento</h1>
        <form>
          <label>
            Título
            <input type="text" name="title" placeholder="título" onChange={handleCreateEventInputsChange}/>
          </label>
          <label>
            Descrição
            <textarea type="text" name="description" placeholder="descrição" onChange={handleCreateEventInputsChange}/>
          </label>
          <label>
            Data de início
            <input type="date" name="start_date" placeholder="título" onChange={handleCreateEventInputsChange}/>
          </label>
          <PrimaryButton onClick={handleUpdateEventButtonClick}>editar evento</PrimaryButton>
          <DangerButton onClick={handleDeleteEventButtonClick}>excluir evento</DangerButton>
        </form>
      </Modal>
    </div>
  );
};

export default Home;
