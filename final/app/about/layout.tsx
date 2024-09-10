import Navbar from "@/componebts/About/Navbar";
import SideMenu from "@/componebts/About/Sidemenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="p-4">
        <Navbar />
      </header>
      <main>
        <div className="flex flex-row">
          <div className="basis-1/4 ms-4">
            <SideMenu />
            <div>{children}</div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
