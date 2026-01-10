import { ChevronLeft, Ellipsis, Pencil } from "lucide-react";
import styles from "./task-detail.module.css";
import Link from "next/link";
import TaskListClient from "./task-list-client";
import { getCurrentSessionToken } from "@/app/lib/auth";
import Parse from "@/app/lib/parse-server";
import { Task } from "@/app/lib/definitions";

export default async function TaskDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const sessionToken = await getCurrentSessionToken();

  const taskListQuery = new Parse.Query("TaskList");
  const taskList = await taskListQuery.get(id, { sessionToken });
  console.log(`List name is ${taskList.get("title")}`);

  const query = new Parse.Query("Task");
  query.ascending("title");
  query.equalTo("list", taskList);

  var tasks: Task[] = [];
  try {
    const tasksResult = await query.find({ sessionToken });
    console.log(`Fetched ${tasksResult.length} items`);
    tasks = tasksResult.map((task) => ({
      id: task.id as string,
      title: task.get("title") as string,
    }));
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
  }

  return (
    <div className={styles.taskDetailcontainer}>
      <header>
        <div className={styles.taskDetailHeaderContainer}>
          <Link href="/" className={styles.taskDetailBackLink}>
            <ChevronLeft size={26} />
            <p style={{ fontSize: 16 }}>Lists</p>
          </Link>
          <div className={styles.taskDetailActionButtonsGroup}>
            {/* <IconButton
              icon={Pencil}
              label="Edit list"
              color="white"
              size={18}
            />
            <IconButton
              icon={Ellipsis}
              label="More options"
              color="white"
              size={18}
            /> */}
          </div>
        </div>
      </header>
      <TaskListClient tasks={tasks} />
    </div>
  );
}
