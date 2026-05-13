import DashboardCard from "@/components/DashboardCard"; 
import OrdersTable from "@/components/OrdersTable";

export default function Dashboard() {
    return (
        <div>

            <h1 className="text-3xl font-bold mb-6">
                Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <DashboardCard 
                title = "Faturamento Mensal"
                value = "R$ 10.000,00"
                />

                <DashboardCard 
                title = "pedidos"
                value = "R$ 120"
                />

                <DashboardCard 
                title = "Emmpresas Ativas"
                value = "18"
                />

                
            </div>

            <OrdersTable />

        </div>
    );
}