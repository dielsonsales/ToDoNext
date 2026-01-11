import Parse from "./lib/parse-server";
import { getCurrentSessionToken } from "./lib/auth";
import HomeClient from "./home-client";
import { CustomTaskList } from "./lib/definitions";

export default async function Home() {
  const sessionToken = await getCurrentSessionToken();
  const query = new Parse.Query("TaskList");
  query.ascending("title");

  // var customTaskListItems: ParseObject[] = [];
  var customTaskList: CustomTaskList[] = [];
  try {
    const customTaskListItems = await query.find({ sessionToken });
    console.log(`Fetched ${customTaskListItems.length} items`);
    customTaskList = customTaskListItems.map((customTask) => ({
      id: customTask.id as string,
      icon: (customTask.get("icon") as string) || "📋",
      title: customTask.get("title") as string,
    }));
  } catch (error) {
    console.error("Failed to fetch lists:", error);
  }

  return <HomeClient taskList={customTaskList} />;
}
