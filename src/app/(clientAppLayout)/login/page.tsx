"use client";
import { appStore } from "@/store/app.store";
import { useStore } from "@tanstack/react-store";

export default function LoginPage() {
     const count = useStore(appStore, (state) => state.count);
  
  return (
    <div>
      <h1>Login Page ({count})</h1>
      {/* Add your login form or components here */}
    </div>
  );
}
