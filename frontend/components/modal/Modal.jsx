import React from "react";
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ErrorModal from "../review/ErrorModal";

class Modal extends React.Component {
  render() {
    const { modal, closeModal } = this.props;
    debugger
    if (!modal) return null;

    let component; 
    debugger
    switch (modal) {
      case 'reviewError':
        debugger
        component = <ErrorModal />
        break;
      default:
        return null;
    }

    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={(e) => e.stopPropagation()}>
          {component}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);