interface Props {
  title: string;
  subTitle: string;
}
let None = ({ title, subTitle }: Props) => {
  return (
    <>
      <div id="project">
        <div id="descrip">
          <br />
          <h3>{title}</h3>
          <br />
          <p>{subTitle}</p>
        </div>
      </div>
    </>
  );
};

export default None;
