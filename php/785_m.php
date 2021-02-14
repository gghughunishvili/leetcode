class Solution {
  /**
   * @param Integer[][] $graph
   * @return Boolean
   */
  function isBipartite($graph) {
    $len = count($graph);
    $color = array_fill(0, $len, -1);
    for ($g=0; $g<$len; $g++) {
      if ($color[$g] == -1) {
        $stack = new SplStack();
        $stack->push($g);
        $color[$g] = 0;
        
        while (!$stack->isEmpty()) {
          $node = $stack->pop();
          foreach ($graph[$node] as $nei) {
            if ($color[$nei] == -1) {
              $stack->push($nei);
              $color[$nei] = intval(!$color[$node]);
            } elseif ($color[$nei] == $color[$node]) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }
}
