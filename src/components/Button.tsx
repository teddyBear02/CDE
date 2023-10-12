interface Props {
  title: string;
  myEvent?: any;
}

let Button = ({ title, myEvent }: Props) => {
  return (
    <button type="button" className="btn btn-primary" onClick={myEvent}>
      {title}
    </button>
  );
};

export default Button;
