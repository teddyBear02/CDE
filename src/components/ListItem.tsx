import { Link } from "react-router-dom";
let ListItem = () => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Size</th>
            <th scope="col">Last visited</th>
            <th scope="col">Modifile on</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr className="hoverList">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>10/7/2023</td>
            <td>10/3/2023</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ListItem;
