import "./globals.css";

export const metadata = {
  title: "Movies and Series",
  description:
    "This app has all the Movies and Series that I have watched soo far.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
