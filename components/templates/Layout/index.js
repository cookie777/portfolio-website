import NavigationBar from "@components/organism/Navbar";
import { Head } from "next/document";

export default function Layout({ children }) {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  )
}

