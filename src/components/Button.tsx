interface Props {
  title: string;
  myEvent?: any;
  subClass?: any;
  idBtn?: any;
}

let Button = ({ title, myEvent, subClass, idBtn }: Props) => {
  return (
    <button
      type="button"
      className={`btn btn-primary ${subClass}`}
      onClick={myEvent}
      id={idBtn}
    >
      {title}
    </button>
  );
};

export default Button;
