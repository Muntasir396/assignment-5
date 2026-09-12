import technologies from "../data/technologies.json"

type StackPanelProps = {
    selectedTechnologies: string[]
    onRemoveFromStack: (technologyId: string) => void
    onRemoveAll: () => void
}

function StackPanel({
    selectedTechnologies,
    onRemoveFromStack,
    onRemoveAll,
}: StackPanelProps) {
    const selectedItems = technologies.filter((technology) =>
        selectedTechnologies.includes(technology.id)
    )

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

            {/* Heading */}
            <h3 className="text-lg font-bold text-gray-900">
                Your Stack
            </h3>

            <p className="mt-1 text-sm text-gray-400">
                {selectedTechnologies.length} Technology Selected
            </p>

            {/* Selected Technologies */}
            <div className="mt-5 space-y-3">

                {selectedItems.length === 0 ? (
                    <p className="text-sm text-gray-500">
                        Your stack is empty.
                    </p>
                ) : (
                    selectedItems.map((technology) => (
                        <div
                            key={technology.id}
                            className="flex items-center gap-3 rounded-lg border border-gray-100 p-3"
                        >
                            {/* Icon */}
                            <img
                                src={technology.icon}
                                alt={technology.name}
                                className="h-9 w-9"
                            />

                            {/* Name & Category */}
                            <div className="flex-1">
                                <h4 className="text-sm font-semibold text-gray-900">
                                    {technology.name}
                                </h4>

                                <p className="text-xs text-gray-500">
                                    {technology.category}
                                </p>
                            </div>

                            {/* Remove Button */}
                            <button
                                onClick={() => onRemoveFromStack(technology.id)}
                                className="text-lg text-gray-400 hover:text-red-500"
                                title="Remove"
                            >
                                ×
                            </button>
                        </div>
                    ))
                )}

            </div>

            {/* Remove All */}
            <button
                onClick={onRemoveAll}
                className="mt-5 w-full rounded-lg border border-red-200 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
            >
                Remove All
            </button>

        </div>
    )
}

export default StackPanel