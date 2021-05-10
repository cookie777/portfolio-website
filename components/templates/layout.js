import { BottomMenu } from "@components/organism/bottom-menu";
import NavigationBar from "@components/organism/navigation-bar";

export default function Layout({ children }) {
  return (
    <div>
      <NavigationBar />
      {children}
      {/* <BottomMenu /> */}
    </div>
  )
}

