const pedidos = [
    {
    nf: "123456789",
    empresa: "Scania",
    valor: "R$ 5.000,00",
    data: "10/05/2026",
    },

    {
    nf: "121212121",
    empresa: "Volvo",
    valor: "R$ 6.000,00",
    data: "19/08/2026",
    },

    {
    nf: "123456789",
    empresa: "Mercedes",
    valor: "R$ 7.000,00",
    data: "20/02/2026",
    },
];

export default function OrdersTable() {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">

            <h2 className="text-x1 font-bold mb-4">
                Ultimos Pedidos
            </h2>

            <table className="w-full">
                <thead>
                    <tr className="text-left border-b">
                        <th className="pb-3">NF</th>
                        <th className="pb-3">Empresa</th>
                        <th className="pb-3">Valor</th>
                        <th className="pb-3">Data</th>
                    </tr>
                </thead>

                <tbody>
                    {pedidos.map((pedido, index) => (
                        <tr key={index} className="border-b">
                            <td className="py-3">{pedido.nf}</td>
                            <td className="">{pedido.empresa}</td>
                            <td className="">{pedido.valor}</td>
                            <td className="">{pedido.data}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}