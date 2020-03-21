import React, { Component } from "react";
import style from "./Works.module.css";
import Title from "../../components/Title/Title";
import works from "../../helpers/works";
import Modal from "../Modal/Modal";
import WorksModal from "../WorksModal/WorksModal";

class Works extends Component {
  state = {
    selectedWorkId: null,
    isOpenModal: false
  };

  openModal = ({ target }) => {
    this.setState({
      selectedWorkId: target.parentNode.id,
      isOpenModal: true
    });
  };

  closeModal = () => {
    this.setState({
      isOpenModal: false
    });
  };

  render() {
    const { isOpenModal, selectedWorkId } = this.state;
    const selectedWork = works.find(el => el.id === selectedWorkId);

    return (
      <div className={style.works}>
        <Title title="Примеры наших работ" />
        <ul className={style.workList}>
          {works.map(el => (
            <li className={style.listItem} key={el.id} id={el.id}>
              <img className={style.image} src={el.images[0]} alt="" />
              <div
                className={style.listItemOverlay}
                onClick={this.openModal}
              ></div>
              <div className={style.text}>
                <p className={style.title}>{el.title}</p>
                <p className={style.category}>{el.category}</p>
                <button className={style.search}>
                  <i className={`material-icons ${style.icon}`}>search</i>
                </button>
              </div>
              {isOpenModal && (
                <Modal closeModal={this.closeModal}>
                  <WorksModal
                    title={selectedWork.title}
                    category={selectedWork.category}
                    images={selectedWork.images}
                    closeModal={this.closeModal}
                  />
                </Modal>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Works;
