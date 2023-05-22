import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";




const Statistics = () => {
    // Données de l'exemple
    const data = [
        { category: "Catégorie 1", value: 10 },
        { category: "Catégorie 2", value: 15 },
        { category: "Catégorie 3", value: 8 },
        { category: "Catégorie 4", value: 12 },
        { category: "Catégorie 5", value: 10 },
        { category: "Catégorie 6", value: 15 },
        { category: "Catégorie 7", value: 8 },
        { category: "Catégorie 8", value: 12 },
        { category: "Catégorie 9", value: 10 },
        { category: "Catégorie 10", value: 15 },
        { category: "Catégorie 11", value: 8 },
        { category: "Catégorie 12", value: 12 },
        { category: "Catégorie 13", value: 10 },
        { category: "Catégorie 14", value: 15 },
        { category: "Catégorie 15", value: 8 },
        { category: "Catégorie 16", value: 12 },
    ];
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Statistiques des candidatures</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className=" w-full overflow-x-scroll">
                    <VictoryChart theme={VictoryTheme.material}>
                        <VictoryAxis
                            dependentAxis
                            tickFormat={(tick) => `${tick}points`}
                            style={{ tickLabels: { fontSize: 5 } }}
                        />
                        <VictoryAxis
                            style={{
                                tickLabels: {
                                    fontSize: 8,
                                    angle: -45, // Inclinaison de -45 degrés
                                    verticalAnchor: "middle", // Alignement vertical au milieu
                                    textAnchor: "end" // Alignement horizontal à l'extrémité
                                }
                            }}
                        />
                        <VictoryBar
                            data={data}
                            x="category"
                            y="value"
                            style={{ data: { fill: "#3490dc" } }}
                        />
                    </VictoryChart>
                </div>
            </div>
        </div>
    )
}

export default Statistics;