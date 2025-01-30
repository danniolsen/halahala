import { IconContext } from "react-icons";
import { BiCalendar, BiTask, BiListOl } from "react-icons/bi";

type Props = {
  name: string;
  className: string;
  size?: string;
};

const Icon = ({ name, className }: Props) => {
  const icons: any = {
    upcomming: <BiCalendar />,
    previous: <BiTask />,
    league: <BiListOl />,
  };

  return (
    <IconContext.Provider value={{ className }}>
      {icons[name]}
    </IconContext.Provider>
  );
};

export default Icon;
