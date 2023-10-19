import "./_Login.scss";
import "./_Home.scss";
import "./_Var.scss";
import "./_Profile.scss";
import "./_Project.scss";
interface Props {
  children: any;
}

function GlobalStyle({ children }: Props) {
  return children;
}

export default GlobalStyle;
