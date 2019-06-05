class GraphNode {
  constructor(val) {
      this.val = val;
      this.neighbors = [];
  }
}

let a = new GraphNode('a');
let b = new GraphNode('b');
let c = new GraphNode('c');
let d = new GraphNode('d');
let e = new GraphNode('e');
let f = new GraphNode('f');
a.neighbors = [e, c, b];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];

function depthFirstRecur(node, visited = new Set){
  if (visited.has(node.val)) return;
  console.log(node.val);
  visited.add(node.val);
  node.neighbors.forEach((neighbor) => {
    depthFirstRecur(neighbor, visited);
  });
}
function depthFirstIter(node){
  let visited = new Set();
  let stack = [node];
  while (stack.length){
    let curr = stack.pop();
    console.log(curr.val);
    visited.add(curr);
    curr.neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor)){
        stack.push(neighbor);
      }
    })
  }
}
//allows you to dfs no matter the starting point w/ adjacency list
function depthFirst(graph){
  let visited = new Set();
  for (node in graph){
    _depthFirstRecur(node, graph, visited)
  }
}
function _depthFirstRecur(node, graph, visited= new Set){
  if (visited.has(node)) return;
  console.log(node);
  visited.add(node);
  graph[node].forEach((neighbor) => {
    _depthFirstRecur(neighbor,graph, visited);
  });

}
let graph = {
  'a': ['b', 'c', 'e'],
  'b': [],
  'c': ['b', 'd'],
  'd': [],
  'e': ['a'],
  'f': ['e']
};

// depthFirstRecur(f);
// depthFirstIter(f);
depthFirst(graph);
