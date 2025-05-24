import { Outlet } from "react-router-dom";
import { BackGroundLayout } from "./Layouts/BackgroudLayout";

export default function RootLayout() {
  return (
    <BackGroundLayout>
      <Outlet />
    </BackGroundLayout>
  );
} 