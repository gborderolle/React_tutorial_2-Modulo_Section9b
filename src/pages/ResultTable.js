export default function ResultTable(props) {
    return (
        <table className={props.class}>
            <thead>
                <tr>
                    <th>Item</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
