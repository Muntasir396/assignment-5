type TechnologyCardProps = {
    technology: {
        id: string
        name: string
        category: string
        description: string
        icon: string
        rating: number
        difficulty: string
        badge: string
    }
    onAddToStack: (technologyId: string) => void
    isAdded: boolean
}

function TechnologyCard({
    technology,
    onAddToStack,
    isAdded,
}: TechnologyCardProps) {
    return (
        <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">

            {/* Icon & Badge */}
            <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50">
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-9 w-9 object-contain"
                    />
                </div>

                <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
                    {technology.badge}
                </span>
            </div>

            {/* Name */}
            <h3 className="mt-5 text-xl font-bold text-gray-900">
                {technology.name}
            </h3>

            {/* Description */}
            <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
                {technology.description}
            </p>

            {/* Info */}
            <div className="mt-5 flex flex-wrap items-center gap-2">

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {technology.category}
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {technology.difficulty}
                </span>

                <span className="text-sm font-medium text-gray-700">
                    ⭐ {technology.rating}
                </span>

            </div>

            {/* Add to Stack Button */}
            <button
                onClick={() => onAddToStack(technology.id)}
                disabled={isAdded}
                className={`mt-6 w-full rounded-lg py-3 text-sm font-medium transition ${isAdded
                        ? "cursor-not-allowed bg-gray-200 text-gray-500"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
            >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>

        </div>
    )
}

export default TechnologyCard