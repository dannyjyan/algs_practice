// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function canFinish(numCourses, prerequisites) {
    // make adjacency list
    let adj = new Array(numCourses);
    let visited = new Array(numCourses).fill(0); //unvisited: 0, visited: 1, currently: -1
    for (let i = 0; i < numCourses; i++){
        adj[i] = new Array();
    } 
    prerequisites.forEach(pair => {
        adj[pair[1]].push(pair[0]); // point prereq at "post" 
    });
    //find cycle, if cycle then false
    for(node in adj){
        let isCycle = findCycle(adj, node, visited);
        if (isCycle) return true;
    }
    return false;
};
var findCycle = function(adj, node, visited){
    if (visited[node] == 1) return;
    if (visited[node] === -1) return true;
    visited[node] = -1; // set node to currently visiting
    adj[node].forEach((neighbor) => {
        findCycle(adj, neighbor, visited);
    })
    visited[node] = 1;
}

