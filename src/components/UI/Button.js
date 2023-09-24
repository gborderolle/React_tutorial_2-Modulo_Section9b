export default function Button(props) {
  return (
    <button
      type={props.type || 'button'}
      className={props.class}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
