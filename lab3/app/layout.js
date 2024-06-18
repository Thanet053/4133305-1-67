export default function RootLayout({ children }) {
    return (
      <html>
        <body>
            <div>header</div>
            {children}
            <div> Footer</div>
        </body>
      </html>
    );
}