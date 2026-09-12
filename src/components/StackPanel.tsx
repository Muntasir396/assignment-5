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
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

      {/* Heading */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            Your Stack
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            {selectedTechnologies.length} Technology Selected
          </p>
        </div>
      </div>

      {/* Selected Technologies */}
      <div className="mt-5 space-y-3">
        {selectedItems.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-200 px-4 py-8 text-center">
            <p className="text-sm font-medium text-gray-500">
              Your stack is empty.
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Add technologies to build your stack.
            </p>
          </div>
        ) : (
          selectedItems.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-7 w-7 object-contain"
                />
              </div>

              {/* Name & Category */}
              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-semibold text-gray-900">
                  {technology.name}
                </h4>

                <p className="mt-0.5 text-xs text-gray-500">
                  {technology.category}
                </p>
              </div>

              {/* Remove */}
              <button
                onClick={() => onRemoveFromStack(technology.id)}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                title={`Remove ${technology.name}`}
                aria-label={`Remove ${technology.name}`}
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
        disabled={selectedTechnologies.length === 0}
        className={`mt-5 w-full rounded-lg border py-2.5 text-sm font-medium transition ${
          selectedTechnologies.length === 0
            ? "cursor-not-allowed border-gray-100 text-gray-300"
            : "border-red-200 text-red-500 hover:bg-red-50"
        }`}
      >
        Remove All
      </button>

    </aside>
  )
}

export default StackPanel