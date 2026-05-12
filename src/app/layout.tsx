import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Navbar />
                    <main className="p-6">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}