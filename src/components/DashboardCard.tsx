type DashboardCardProps = {
    title: string;
    value : string;
};

export default function DashboardCard({
    title,
    value
}: DashboardCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-gray-500 text-sm">
                {title}
            </h2>
            <p className="text-2xl font-bold">
                {value}
            </p>
        </div>
    );
}