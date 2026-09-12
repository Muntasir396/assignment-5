import { useState } from "react"
import technologies from "../data/technologies.json"
import TechnologyCard from "./TechnologyCard"
import StackPanel from "./StackPanel"

function TechnologySection() {
    const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])

    const handleAddToStack = (technologyId: string) => {
        if (selectedTechnologies.includes(technologyId)) {
            alert("This technology is already in your stack!")
            return
        }

        setSelectedTechnologies((prev) => [...prev, technologyId])
    }

    const handleRemoveFromStack = (technologyId: string) => {
        setSelectedTechnologies((prev) =>
            prev.filter((id) => id !== technologyId)
        )
    }

    const handleRemoveAll = () => {
        setSelectedTechnologies([])
    }

    return (
        <section className="py-16">
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

                {/* Cards + Your Stack */}
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

            </div>
        </section>
    )
}

export default TechnologySection