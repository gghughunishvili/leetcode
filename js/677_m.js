/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.hashTable = {};
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.hashTable[key] = val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let sum = 0;
    for (let key of Object.keys(this.hashTable)) {
        if (key.startsWith(prefix)) {
            sum += this.hashTable[key];
        }
    }
    
    return sum;
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
