import "./_Login.scss";
import "./_Home.scss";
import "./_Var.scss";
import "./_Profile.scss";
import "./_Project.scss";
import "./_TodoComponent.scss";
import "./_TeamComponent.scss";
interface Props {
  children: any;
}

function GlobalStyle({ children }: Props) {
  return children;
}

export default GlobalStyle;
