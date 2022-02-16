import React from "react";
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ErrorModalContainer from "./ErrorModalContainer";

class Modal extends React.Component {
  render() {
    const { modal, closeModal } = this.props;

    console.log('props', this.props)
    if (!modal) return null;

    let component; 
    switch (modal.type) {
      case 'reviewError':
        component = <ErrorModalContainer title={modal.title}/>
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

const mapStateToProps = (state, ownProps) => {
  console.log('ownprops', ownProps)
  return {
    modal: state.modal,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);