export default function Item(props) {
    return (
        <p>
            <label className={props.class}>{props.labelText1}</label>
            <label className={props.class}>{props.labelText2}</label>
        </p>
    );
}
