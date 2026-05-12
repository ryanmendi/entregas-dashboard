import Link from "next/link"; 

export default function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-gray-900 text-white p-5">
            <h1 className="text-2xl font-bold mb-10">
                Entregas 
            </h1>

            <nav className="flex flex-col gap-4">
                <Link href="/dashboard">
                    Dashboard
                </Link>

                <Link href="/pedidos">
                    Pedidos
                </Link>

                <Link href="/nova-entrega">
                    Nova Entrega
                </Link>
            </nav>
        </aside>
    );
}