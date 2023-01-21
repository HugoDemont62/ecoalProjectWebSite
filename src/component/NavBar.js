import * as React from 'react';
import {AppBar, Toolbar, Button} from "@mui/material";
import Logo from "../elements/logo.png"
import {Box, Stack} from "@mui/system";
import {ThemeProvider, createTheme} from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: '#111511',
            light: "#3BDF01",
        }
    }
});
function NavBar() {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{flexGrow:1}}>
                        <Button>
                            <Box
                                component="img"
                                sx={{
                                    maxHeight: 50,
                                    maxWidth: 1000,
                                    flexGrow:1
                                }}
                                alt="Logo"
                                src={Logo}
                            />
                        </Button>
                    </Box>
                    <Stack direction="row" spacing={2}>
                        <Button color="inherit">The project</Button>
                        <Button color="inherit">Archives</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default NavBar