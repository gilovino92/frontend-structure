import { Store } from "@tanstack/react-store";

export interface AppStore {
    count: number;
}

const appStore = new Store<AppStore>({
  count: 0,
})

export { appStore };