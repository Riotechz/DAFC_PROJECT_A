import { useTheme, Box, IconButton, InputBase } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { tokens } from "../../theme/theme";
import { useThemeContext } from '../../theme/ThemeContextProvider';
type TopbarType = {
  isAuth: boolean
}
const Topbar = ({isAuth}: TopbarType) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { toggleColorMode } = useThemeContext();

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex">
        { isAuth &&
          <Box
            display={"flex"}
            bgcolor={colors.primary[400]}
            p={0.2}
            borderRadius={1}
          >
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
            <IconButton type="button">
              <SearchIcon />
            </IconButton>
          </Box>
        }
      </Box>
      <Box display="flex">
        <IconButton onClick={toggleColorMode}>
          {theme.palette.mode === "light" ? (
           <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        { isAuth && (
          <>     
            <IconButton>
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
              <PersonOutlinedIcon />
            </IconButton>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Topbar;