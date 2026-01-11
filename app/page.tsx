import Parse from "./lib/parse-server";
import { getCurrentSessionToken } from "./lib/auth";
import HomeClient from "./home-client";
import { CustomTaskList, DefaultList } from "./lib/definitions";

export default async function Home() {
  const sessionToken = await getCurrentSessionToken();

  const defaultListQuery = new Parse.Query("DefaultList");
  defaultListQuery.ascending("order");
  var defaultList: DefaultList[] = [];
  try {
    const defaultListResult = await defaultListQuery.find({ sessionToken });
    console.log(`Fetched ${defaultListResult.length} default items`);
    defaultList = defaultListResult.map((listItem) => ({
      id: listItem.id as string,
      icon: listItem.get("icon") as string,
      title: listItem.get("title") as string,
      color: listItem.get("color") as string,
    }));
  } catch (error) {
    console.error("Failed to fetch default list:", error);
  }

  const taskListQuery = new Parse.Query("TaskList");
  taskListQuery.ascending("title");
  var customTaskList: CustomTaskList[] = [];
  try {
    const customTaskListItems = await taskListQuery.find({ sessionToken });
    console.log(`Fetched ${customTaskListItems.length} items`);
    customTaskList = customTaskListItems.map((customTask) => ({
      id: customTask.id as string,
      icon: (customTask.get("icon") as string) || "📋",
      title: customTask.get("title") as string,
    }));
  } catch (error) {
    console.error("Failed to fetch lists:", error);
  }

  return <HomeClient defaultList={defaultList} taskList={customTaskList} />;
}
