import '@/app/ui/global.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { inter } from '@/app/ui/fonts';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; 
import Home from './ui/mui/Home';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider theme={theme}>
            {/* <Home/>    mui theme configuration paractice  */}
            {children}
            </ThemeProvider>
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
