import '@app/ui/global.css';
import { inter } from '@app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      ></meta> */}

      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
