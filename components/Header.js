import { Button } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import MenuIcon from "@mui/icons-material/Menu";
import DescriptionIcon from "@mui/icons-material/Description";
import Icon from "@mui/material/Icon";
import SearchIcon from "@mui/icons-material/Search";

<Icon>star</Icon>;

function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        color="blue"
        variant="text"
        ripple="dark"
        className="h-20 w-20 border-0 rounded-full"
      >
        {" "}
        <MenuIcon fontSize="medium" />
      </Button>

      <DescriptionIcon fontSize="large" sx={{ color: "#0073cf" }} />
      <h1 className="ml-2  text-gray-700 text-2xl">Docs</h1>

      <div className="flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg mx-5 md:mx-10">
        <SearchIcon fontSize="medium" sx={{ color: "darkgray" }} />
        <input
          type="text"
          placeholder="search"
          className="flex-grow px-5 text-base bg-transparent outline-none"
        />
      </div>
    </div>
  );
}

export default Header;
