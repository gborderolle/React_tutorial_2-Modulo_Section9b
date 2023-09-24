import Button from '../Button';

export const ErrorModal = (props) => {
  return (
    <div>
      <div className={backdrop} onClick={props.onConfirm} />
      <div className={modal}>
        <header className={modal}>
          <h2>{props.title}</h2>
        </header>
        <div className={content}>
          <p>{props.message}</p>
        </div>
        <footer className={actions}>
          <Button onClick={props.onConfirm}>Ok</Button>
        </footer>
      </div>
    </div>
  );
};
