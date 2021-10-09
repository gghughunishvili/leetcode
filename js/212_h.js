var TrieNode = function() {
    this.isWord = false;
    this.children = {};
    
    this.addWord = function(word) {
        let root = this;
        for (let c of word) {
            if (!root.children[c]) {
                root.children[c] = new TrieNode();
            }
            root = root.children[c];
        }
        root.isWord = true;
    }
}


/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const node = new TrieNode();
    for (let word of words) {
        node.addWord(word);
    }
    
    const result = new Set([]), visited = new Set([]);
    
    
    this.dfs = function(i, j, node, word) {
        if (i<0 || j<0 || i>= board.length || j >= board[i].length) {
            return false;
        }
        
        const key = i + '_' + j;

        if (visited.has(key) || node.children[board[i][j]] === undefined ) {
            return false;
        }
        
        visited.add(key);
        node = node.children[board[i][j]];
        word += board[i][j];
        if (node.isWord) {
            result.add(word);
        }
        dfs(i+1, j, node, word);
        dfs(i-1, j, node, word);
        dfs(i, j+1, node, word);
        dfs(i, j-1, node, word);
        visited.delete(key);
    }
    
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[i].length; j++) {
            dfs(i, j, node, '');
        }
    }
    
    return Array.from(result);
};
