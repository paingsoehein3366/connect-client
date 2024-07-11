import { AppShell } from '@mantine/core'
import { CiMenuFries } from "react-icons/ci";

interface Prop {
  toggleSidebar: () => void
}
const NavBar = ({ toggleSidebar }: Prop) => {
  return (
    <AppShell className="flex items-center justify-between bg-[#5c9cb7] p-2 shadow-lg py-8">
      <div className="flex items-center ml-2">

        <CiMenuFries
          onClick={() => toggleSidebar()}
          className="cursor-pointer text-[#fff]"
        />
        <div className="flex items-center ml-4">
          <h2 className="ml-2 text-white">MyanCare</h2>
        </div>
      </div>

    </AppShell >
  )
}

export default NavBar
