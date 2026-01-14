import { Trash2 } from "lucide-react";
import IconButton from "./icon-button";
import { Checkbox, ListItem } from "konsta/react";

interface TaskItemProps {
  title: string;
  checked: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TaskItem({
  title,
  checked,
  onToggle,
  onDelete,
}: TaskItemProps) {
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
          onChange={onToggle}
        />
      }
      after={
        <div className="mx-2">
          <IconButton
            icon={Trash2}
            label="Favorite"
            color="darkRed"
            size={18}
            onClick={onDelete}
          />
        </div>
      }
    />
  );
}
