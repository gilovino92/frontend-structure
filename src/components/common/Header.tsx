import { appStore } from "@/store/app.store";
import { useStore } from "@tanstack/react-store";
import { useCallback } from "react";
export default function Header() {
   const increaseCount = useCallback(() => {
     appStore.setState((state) => ({ count: state.count + 1 }));
   }, []);

  return (
    <header>
      <h1>My App</h1>
      <button
        onClick={increaseCount}
      >
        Increase Count
      </button>
    </header>
  );
}
