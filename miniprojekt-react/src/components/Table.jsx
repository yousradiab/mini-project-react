import "../main.css";
import "../index.css";

export default function Table({ data }) {
  console.log(data);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>MAIL</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
