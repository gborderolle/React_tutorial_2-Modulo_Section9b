export default function ResultTable(props) {
  return (
    <table className={props.class}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(props.userList) &&
          props.userList.map((user) => (
            <tr key={Math.random().toString()}>
              <td>{user.username}</td>
              <td>{user.age}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
