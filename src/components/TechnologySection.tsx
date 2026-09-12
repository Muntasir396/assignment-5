import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import technologiesData from "../data/technologies.json"
import TechnologyCard from "./TechnologyCard"
import StackPanel from "./StackPanel"

type Technology = {
    id: string
    name: string
    category: string
    description: string
    icon: string
    rating: number
    difficulty: string
    badge: string
}

function TechnologySection() {
    const [technologies, setTechnologies] = useState<Technology[]>([])
    const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])
    const [loading, setLoading] = useState(true)

    // Load technologies from JSON
    useEffect(() => {
        setTechnologies(technologiesData)
        setLoading(false)
    }, [])

    // Add technology
    const handleAddToStack = (technologyId: string) => {
        if (selectedTechnologies.includes(technologyId)) {
            toast.warning("This technology is already in your stack!")
            return
        }

        setSelectedTechnologies((prev) => [...prev, technologyId])

        const technology = technologies.find(
            (item) => item.id === technologyId
        )

        toast.success(`${technology?.name} added to your stack!`)
    }

    // Remove one technology
    const handleRemoveFromStack = (technologyId: string) => {
        const technology = technologies.find(
            (item) => item.id === technologyId
        )

        setSelectedTechnologies((prev) =>
            prev.filter((id) => id !== technologyId)
        )

        toast.info(`${technology?.name} removed from your stack.`)
    }

    // Remove all technologies
    const handleRemoveAll = () => {
        if (selectedTechnologies.length === 0) {
            toast.warning("Your stack is already empty!")
            return
        }

        setSelectedTechnologies([])

        toast.info("All technologies removed from your stack.")
    }

    return (
        <section id="technologies" className="py-16">
            <div className="mx-auto max-w-7xl px-6">

                {/* Section Heading */}
                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Explore the Technologies
                    </h2>

                    <p className="mt-3 text-gray-600">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                {/* Loading State */}
                {loading ? (
                    <div className="flex min-h-60 items-center justify-center">
                        <div className="text-center">
                            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500" />

                            <p className="mt-4 text-sm text-gray-500">
                                Loading technologies...
                            </p>
                        </div>
                    </div>
                ) : (
                    /* Cards + Your Stack */
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_280px]">

                        {/* Technology Cards */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {technologies.map((technology) => (
                                <TechnologyCard
                                    key={technology.id}
                                    technology={technology}
                                    onAddToStack={handleAddToStack}
                                    isAdded={selectedTechnologies.includes(technology.id)}
                                />
                            ))}
                        </div>

                        {/* Your Stack */}
                        <StackPanel
                            selectedTechnologies={selectedTechnologies}
                            onRemoveFromStack={handleRemoveFromStack}
                            onRemoveAll={handleRemoveAll}
                        />

                    </div>
                )}

            </div>
        </section>
    )
}

export default TechnologySection