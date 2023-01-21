import * as React from 'react';
import {AppBar, Toolbar, Button} from "@mui/material";
import Logo from "../elements/logo.png"
import {Box, Stack} from "@mui/system";
import {ThemeProvider, createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#EBEBEB',
            dark: '#002884',
            light: "#B300B7",
        }
    },
});
function NavBar() {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" elevation={0}>
                <Toolbar sx={{
                    mx: 20,
                    my: 3
                }}>
                    <Box sx={{flexGrow:1}}>
                        <Button color="inherit" href="/">
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
                        <Button color="inherit" sx={{fontSize: 20, fontWeight: 'bold', }}>The project</Button>
                        <Button color="inherit" sx={{fontSize: 20, fontWeight: 'bold'}}>Archives</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default NavBar