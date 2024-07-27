import { Package2, Flame, Sun, Moon } from "lucide-react";
import { NavItem } from "./NavItem";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export const DesktopNavbar = ({ navItems }) => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
      <NavItem
        to="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Package2 className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </NavItem>
      {navItems.map((item) => (
        <NavItem key={item.to} to={item.to}>
          {item.title}
        </NavItem>
      ))}
      <div className="flex items-center space-x-4">
        <Button variant="outline" className="bg-green-700 text-white hover:bg-green-600 flex items-center gap-2">
          <Flame className="h-4 w-4" />
          Pro
        </Button>
        <Button variant="ghost" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-500">Sign in</Button>
      </div>
    </nav>
  );
};
