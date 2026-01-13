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
      className="bg-white my-1 mx-2 rounded-lg"
      title={
        checked ? (
          <del style={{ color: "gray" }}>{title}</del>
        ) : (
          <span>{title}</span>
        )
      }
      media={
        <Checkbox
          className="mx-3"
          component="div"
          checked={checked}
          colors={{
            bgCheckedIos: "bg-red-500",
          }}
          onChange={() => console.log("Toggle")}
        />
      }
      after={
        <div className="mx-2">
          <IconButton icon={Star} label="Favorite" color="grey" size={18} />
        </div>
      }
    />
  );
}
