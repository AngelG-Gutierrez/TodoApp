/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(home)` | `/(home)/` | `/(home)/tasks` | `/..\components\features\tasks\entities\task` | `/..\components\features\tasks\services\taskService` | `/_sitemap` | `/controls/components/button` | `/controls/components/input` | `/controls/components/projectContainer` | `/controls/components/projectContainerRecent` | `/controls/components/projectHeader` | `/controls/components/taskContainerRecent` | `/screenProject` | `/screenTab` | `/screenTasks` | `/tasks`;
      DynamicRoutes: `/project/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/project/[id]`;
    }
  }
}
