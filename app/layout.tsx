import './globals.css'
import '@mantine/core/styles.layer.css'

import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
import Layout from "../components/AppShellLayout"

export const metadata = {
  title: 'ZeeK',
  description: 'Sweet Geek',
};

const theme = createTheme({

  primaryColor: 'orange',
  colors: {
    orange: [
      "#fff0e3",
      "#ffdfcd",
      "#ffbe9b",
      "#ff9b64",
      "#fe7c37",
      "#fe6a1a",
      "#ff5f09",
      "#e44f00",
      "#cb4500",
      "#b13900"
    ],
    brown: [
      "#fff2eb",
      "#fae1d4",
      "#f9c1a3",
      "#fa9e6c",
      "#fa8140",
      "#fa6d25",
      "#fb6418",
      "#df540e",
      "#c74908",
      "#ad3d00"
    ]
  },
  fontFamily: 'Cutive',
  headings: {
    fontWeight: '100',
    fontFamily: 'Urbanist',
  }
})

export default function RootLayout({
  children,
}: {
  children: any;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cutive&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <MantineProvider 
          theme={theme}
        >
          <Layout>
            {children}
          </Layout>
        </MantineProvider>
      </body>
    </html>
  );
}