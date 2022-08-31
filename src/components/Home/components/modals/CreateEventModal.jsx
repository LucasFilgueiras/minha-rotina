import Modal from "react-modal/lib/components/Modal";
import PrimaryButton from "../../../../shareds/Buttons/PrimaryButton";

export default function CreateEventModal(modalIsOpen, closeModal, handleCreateEventInputsChange, handleCreateEventButtonClick) {
  return (
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
  )
}