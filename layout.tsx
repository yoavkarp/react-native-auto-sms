import React from "react";
import { AppSyncProvider } from "./components/AppSyncProvider";
import App from "./App";

export default function AppLayout() {
    return (
        <AppSyncProvider>
            <App />
        </AppSyncProvider>
    )
}