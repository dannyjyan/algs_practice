
class Queue 
{ 
    // Array is used to implement a Queue 
    constructor() 
    { 
        this.items = []; 
    } 

                  
    // Functions to be implemented 
    enqueue(item){
      this.items.push(item);
    } 
    dequeue() {
      if (this.size() === 0) return false;
      return this.items.shift(item);
    }
    // front() 
    // isEmpty() 
    // printQueue() 
    size(){
      return this.items.length;
    }
} 



function bfs(graph, startNode, endNode){

  const nodesToVisit = new Queue();
  nodesToVisit.enqueue(startNode);
  const visited = new Set([startNode]);
  const path = []
  const howToReachNode = {};
  howToReachNode[startNode] = null;

  while (nodesToVisit.size() > 0){
    const currentNode = nodesToVisit.dequeue();

    if (currentNode === endNode){
      let lastNode = endNode;
      while (lastNode){
        path.shift(lastNode);
        lastNode = howToReachNode(lastNode);
      }
      path.shift(startNode);
      return path;
    }

    graph[currentNode].forEach(neighbor => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        nodesToVisit.enqueue(neighbor);
        howToReachNode[neighbor] = currentNode;
      }
    })
  }
  return null;




}