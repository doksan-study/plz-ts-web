import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {RecoilRoot} from "recoil";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {ThemeProvider} from "@mui/system";
import {CssBaseline} from "@mui/material";
import theme from "@/theme";
import {HelmetProvider} from 'react-helmet-async';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
        },
    }
})

root.render(
    <React.StrictMode>
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <BrowserRouter>
                        <HelmetProvider>
                            <App/>
                        </HelmetProvider>
                    </BrowserRouter>
                </ThemeProvider>

                {process.env.NODE_ENV === "development" && (
                    <ReactQueryDevtools
                        initialIsOpen={false}
                        position={"bottom-right"}
                    />
                )}
            </QueryClientProvider>
        </RecoilRoot>
    </React.StrictMode>
);

reportWebVitals();
