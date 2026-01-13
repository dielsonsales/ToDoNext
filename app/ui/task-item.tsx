import { Trash2 } from "lucide-react";
import IconButton from "./icon-button";
import { Checkbox, ListItem } from "konsta/react";
import { deleteTaskAction } from "../task/[id]/actions";

interface TaskItemProps {
  id: string;
  listId: string;
  title: string;
  checked: boolean;
}

export default function TaskItem({
  id,
  listId,
  title,
  checked,
}: TaskItemProps) {
  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${title}"`,
    );
    if (!confirmed) return;
    await deleteTaskAction(id, listId);
  };

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
          <IconButton
            icon={Trash2}
            label="Favorite"
            color="darkRed"
            size={18}
            onClick={handleDelete}
          />
        </div>
      }
    />
  );
}
