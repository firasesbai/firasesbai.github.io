function createMindMap(svg, data, options = {}) {
    const width = svg.attr("width");
    const height = svg.attr("height");
  
    // Customizable options
    const nodeRadius = options.nodeRadius || 10;
    const linkColor = options.linkColor || "#999";
    const linkWidth = options.linkWidth || 2;
    const textFontSize = options.textFontSize || "12px";
  
    // Color scale for different layers
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
  
    // Create a group for zooming
    const g = svg.append("g");
  
    // Set up zoom behavior
    const zoom = d3.zoom()
        .scaleExtent([0.1, 4])
        .on("zoom", (event) => {
            g.attr("transform", event.transform);
        });
  
    svg.call(zoom);
  
    // Set up force simulation
    const simulation = d3.forceSimulation(data.nodes)
        .force("link", d3.forceLink(data.links).id(d => d.id).distance(100))
        .force("charge", d3.forceManyBody().strength(-500))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collide", d3.forceCollide(nodeRadius + 5));
  
    // Create links
    const link = g.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(data.links)
        .enter().append("line")
        .attr("stroke", linkColor)
        .attr("stroke-width", linkWidth);
  
    // Create nodes
    const node = g.append("g")
        .attr("class", "nodes")
        .selectAll("g")
        .data(data.nodes)
        .enter().append("g")
        .attr("class", "node");
  
    // Assign layer to each node
    assignLayers(data.nodes[0], 0);
  
    node.append("circle")
        .attr("r", nodeRadius)
        .attr("fill", d => colorScale(d.layer))
        .attr("stroke", "#000")
        .attr("stroke-width", 1.5);
  
    node.append("text")
        .text(d => d.name)
        .attr("x", nodeRadius + 4)
        .attr("y", 3)
        .style("font-size", textFontSize)
        .style("fill", "#333");
  
    // Add drag functionality
    const drag = d3.drag()
        .on("start", function (event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        })
        .on("drag", function (event, d) {
            d.fx = event.x;
            d.fy = event.y;
        })
        .on("end", function (event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        });
  
    node.call(drag);
  
    // Update positions on each tick
    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
  
        node
            .attr("transform", d => `translate(${d.x},${d.y})`);
    });

    // Add zoom controls
    const zoomControls = svg.append("g")
        .attr("class", "zoom-controls")
        .attr("transform", `translate(${width - 70}, 20)`);

    zoomControls.append("rect")
        .attr("width", 60)
        .attr("height", 30)
        .attr("fill", "#f0f0f0")
        .attr("rx", 5);

    const zoomIn = zoomControls.append("g")
        .attr("class", "zoom-in")
        .attr("transform", "translate(5, 5)")
        .style("cursor", "pointer")
        .on("click", () => zoom.scaleBy(svg.transition().duration(300), 1.3));

    zoomIn.append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .attr("fill", "#fff")
        .attr("stroke", "#999");

    zoomIn.append("text")
        .attr("x", 10)
        .attr("y", 15)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .text("+");

    const zoomOut = zoomControls.append("g")
        .attr("class", "zoom-out")
        .attr("transform", "translate(35, 5)")
        .style("cursor", "pointer")
        .on("click", () => zoom.scaleBy(svg.transition().duration(300), 0.7));

    zoomOut.append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .attr("fill", "#fff")
        .attr("stroke", "#999");

    zoomOut.append("text")
        .attr("x", 10)
        .attr("y", 15)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .text("-");
}

// Helper function to assign layers to nodes
function assignLayers(node, layer) {
    node.layer = layer;
    if (node.children) {
        node.children.forEach(child => assignLayers(child, layer + 1));
    }
}
