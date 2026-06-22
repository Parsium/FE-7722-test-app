// Demo of styling race-condition with MenuItem

/**
  Observations
  
  1. WHEN demo preview is manually refreshed AND the Carbon v159.3.1 assets are imported first, THEN the left padding of the menu items in secondary nav bar is missing.
  
  2. WHEN demo preview is manually refreshed AND the Carbon v159.3.0 assets are imported first, THEN the left padding of menu items in the global nav bar is missing.
*/

// Carbon v159.3.1 imports
import GlobalHeader from "carbon-react/lib/components/global-header";
import { Menu, MenuItem } from "carbon-react/lib/components/menu";

// Carbon v159.3.0 imports
import {
  Menu as MenuB,
  MenuItem as MenuItemB,
} from "carbon-react-older/lib/components/menu";
import Box from "carbon-react-older/lib/components/box";

const GlobalNavBar = () => (
  <GlobalHeader>
    <Menu menuType="black">
      <MenuItem submenu="Menu Item Three">
        <MenuItem href="#">Item Submenu One</MenuItem>
        <MenuItem href="#">Item Submenu Two</MenuItem>
      </MenuItem>
      <MenuItem onClick={() => {}}>Item 2</MenuItem>
      <MenuItem href="#">Item 3</MenuItem>
    </Menu>
  </GlobalHeader>
);

const NavBar = () => (
  <MenuB menuType="white">
    <MenuItemB submenu="Menu Item Three">
      <MenuItemB href="#">Item Submenu One</MenuItemB>
      <MenuItemB href="#">Item Submenu Two</MenuItemB>
    </MenuItemB>
    <MenuItemB onClick={() => {}}>Item 2</MenuItemB>
    <MenuItemB href="#">Item 3</MenuItemB>
  </MenuB>
);

const App = () => (
  <>
    <GlobalNavBar />
    <Box mt="40px">
      <NavBar />
    </Box>
  </>
);

export default App;
