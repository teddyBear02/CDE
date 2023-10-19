interface Props {
  projects: [];
  showRightBar: any;
}

let ListItem = ({ projects, showRightBar }: Props) => {
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
          {projects.map((project: any, index: any) => (
            <tr className="hoverList" key={index} onClick={showRightBar}>
              <th scope="row">1</th>
              <td>{project}</td>
              <td>0 Kb</td>
              <td>mm/dd/yyyy</td>
              <td>mm/dd/yyyy</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListItem;
