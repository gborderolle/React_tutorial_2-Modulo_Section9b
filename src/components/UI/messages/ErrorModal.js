import ReactDOM from 'react-dom';

import Button from '../Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className='modal show d-block' tabindex='-1'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{props.title}</h5>
          </div>
          <div className='modal-body'>
            <p>{props.message}</p>
          </div>
          <div className='modal-footer'>
            <Button class='btn btn-primary' onClick={props.onClick} text='Ok' />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};
