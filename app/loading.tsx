"use client";

import { List, ListItem, Page } from "konsta/react";

export default function Loading() {
  return (
    <Page>
      <div className="p-4 bg-gray-50 animate-pulse">
        <div className="h-8 w-32 bg-gray-200 rounded mb-4" />
      </div>
      <List insetIos className="mt-0">
        {[...Array(8)].map((_, i) => (
          <ListItem
            key={i}
            title={
              <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
            }
            media={
              <div className="h-6 w-6 bg-gray-300 rounded-full animate-pulse" />
            }
          />
        ))}
      </List>
    </Page>
  );
}
