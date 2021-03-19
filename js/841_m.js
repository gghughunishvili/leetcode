var Queue = function() {
  this.first = null;
  this.size = 0;
};

var Node = function(data) {
  this.data = data;
  this.next = null;
};

Queue.prototype.enqueue = function(data) {
  var node = new Node(data);

  if (!this.first){
    this.first = node;
  } else {
    n = this.first;
    while (n.next) {
      n = n.next;
    }
    n.next = node;
  }

  this.size += 1;
  return node;
};

Queue.prototype.dequeue = function() {
  temp = this.first;
  this.first = this.first.next;
  this.size -= 1;
  return temp;
};

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Set([0]);
    let currentRoom;
    const q = new Queue();
    q.enqueue(0);
    while (q.size !== 0) {
        currentRoom = q.dequeue().data;
        for (let key of rooms[currentRoom]) {
            if (key !== currentRoom && !visited.has(key)) {
                q.enqueue(key);
            }
        }
        visited.add(currentRoom);
    }
    
    return visited.size === rooms.length;
};
