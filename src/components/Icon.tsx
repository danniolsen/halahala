import { IconContext } from "react-icons";
import { BiCalendar, BiTask, BiListOl } from "react-icons/bi";
import type { IconMapType } from "@/src/types/types";

type Props = {
  name: keyof IconMapType;
  className: string;
  size?: string;
};

const Icon = ({ name, className }: Props) => {
  const icons: IconMapType = {
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
