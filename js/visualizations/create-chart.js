function createChart(containerId, dataPath, chartType, options = {}) {
    const chartFunctions = {
        mindmap: createMindMap,
    };

    if (!(chartType in chartFunctions)) {
        console.error(`Unsupported chart type: ${chartType}`);
        return;
    }

    d3.json(dataPath)
        .then(function (data) {
            const width = options.width || 400;
            const height = options.height || 300;

            // Create or select the container's SVG
            const svg = d3.select(`#${containerId}`)
                .append("svg")
                .attr("width", width)
                .attr("height", height);

            // Call the appropriate chart creation function
            chartFunctions[chartType](svg, data, options);
        })
        .catch(function (error) {
            console.error(`Error loading data from ${dataPath}:`, error);
        });
}
