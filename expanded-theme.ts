import '@material-ui/core/styles';
import {ButtonPropsColorOverrides} from "@mui/material/Button/Button";

declare module '@mui/material' {
    interface Palette {
        neutral?: Palette['primary'];
    }
    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
    }

    interface Button {
        color?: ButtonPropsColorOverrides
    }
}