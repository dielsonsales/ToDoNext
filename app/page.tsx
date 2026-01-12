import Parse from "./lib/parse-server";
import { getCurrentSessionToken } from "./lib/auth";
import HomeClient from "./home-client";
import { IconMap, IconName } from "./lib/definitions";
import HomeListItem from "./home-list-item";

export default async function Home() {
  const sessionToken = await getCurrentSessionToken();

  const defaultListQuery = new Parse.Query("DefaultList").ascending("order");
  const taskListQuery = new Parse.Query("TaskList").ascending("title");

  var defaultListResult: Parse.Object[] = [];
  var customTaskListResult: Parse.Object[] = [];

  try {
    [defaultListResult, customTaskListResult] = await Promise.all([
      defaultListQuery.find({ sessionToken }),
      taskListQuery.find({ sessionToken }),
    ]);
  } catch (error) {
    console.error("Failed to fetch items:", error);
  }

  const defaultListElements = defaultListResult.map((parseObj) => {
    const IconComponent =
      IconMap[(parseObj.get("icon") as IconName) || IconMap.star];
    return (
      <HomeListItem
        key={parseObj.id as string}
        id={parseObj.id as string}
        title={parseObj.get("title") as string}
        icon={parseObj.get("icon") as string}
        color={parseObj.get("color") as string}
      />
    );
  });

  const customListElements = customTaskListResult.map((parseObj) => (
    <HomeListItem
      key={parseObj.id as string}
      id={parseObj.id as string}
      title={parseObj.get("title") as string}
      icon={parseObj.get("icon") as string}
      href={`/task/${parseObj.id}`}
    />
  ));

  return (
    <HomeClient>
      {defaultListElements}
      <div className="w-full bg-gray-300 h-[1px]" />
      {customListElements}
    </HomeClient>
  );
}
