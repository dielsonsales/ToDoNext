import { Circle, Star } from "lucide-react";
import IconButton from "./icon-button";
import { Checkbox, ListItem } from "konsta/react";

interface TaskItemProps {
  title: string;
  checked: boolean;
  favorite: boolean;
}

export default function TaskItem({ title, checked, favorite }: TaskItemProps) {
  return (
    <ListItem
      className="bg-white m-2 rounded-lg shadow-sm"
      innerClassName="border-none"
      title={title}
      media={
        <Checkbox
          className="m-2"
          component="div"
          checked={checked}
          onChange={() => console.log("Toggle")}
        />
      }
      after={<IconButton icon={Star} label="Favorite" color="grey" size={18} />}
    />
  );
}
