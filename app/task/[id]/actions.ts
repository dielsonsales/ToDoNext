"use server";

import Parse from "@/app/lib/parse-server";
import { getCurrentSessionToken } from "@/app/lib/auth";
import { revalidatePath } from "next/cache";

export async function createTaskAction(formData: FormData) {
  const title = formData.get("title") as string;
  const listId = formData.get("listId") as string;
  const sessionToken = await getCurrentSessionToken();

  if (!title || !listId) return;

  try {
    const Task = Parse.Object.extend("Task");
    const TaskList = Parse.Object.extend("TaskList");
    const task = new Task();
    const listPointer = new TaskList();
    listPointer.id = listId;

    await task.save(
      {
        title: title,
        done: false,
        list: listPointer,
      },
      { sessionToken },
    );

    revalidatePath(`/task/${listId}`);
  } catch (error) {
    console.error("Parse save error:", error);
  }
}

export async function deleteTaskAction(taskId: string, listId: string) {
  const sessionToken = await getCurrentSessionToken();
  try {
    const Task = Parse.Object.extend("Task");
    const task = new Task();
    task.id = taskId;
    await task.destroy({ sessionToken });
    revalidatePath(`/task/${listId}`);
  } catch (error) {
    console.error("Parse delete error:", error);
  }
}

export async function toggleTask(taskId: string, isDone: boolean) {
  const sessionToken = await getCurrentSessionToken();
  try {
    const Task = Parse.Object.extend("Task");
    const task = new Task();
    task.id = taskId;
    await task.update(
      {
        done: !isDone,
      },
      { sessionToken },
    );
  } catch (error) {
    console.error("Parse update error:", error);
  }
}
