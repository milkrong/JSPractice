class Node {
  constructor(k, v) {
    this.prev = null;
    this.next = null;
    this.value = v;
    this.key = k;
  }
}
class DoubleLinkedList {
  constructor () {
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  _addFront (node) {
    node.next = this.head;
    node.prev = this.head.prev;
    this.head.prev = node;
    this.head = node;
  }

  _remove (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _removeLast () {
    this.tail.prev.next = this.tail.next;
    this.tail = this.tail.prev;
  }

  get size() {
    let length = 0;
    while (head !== null) {
      length += 1;
      head = head.next;
    }
    return length;
  }
}

class LRUCache {
  constructor (capacity) {
    this.cap = capacity;
    this.map = {};
    this.cache = new DoubleLinkedList();
  }

  getNode (key) {
    if (!this.map.hasOwnProperty(key)) {
      return -1;
    }
    let val = this.map[key].val;
    setNode(key, val);
    return val;
  }

  setNode (key, val) {
    let newNode = new Node(key, val);
    if(this.map.hasOwnProperty(key)) {
      this.cache._remove(newNode)
      this.cache._addFront(newNode)
      this.map = {...this.map, key : NewNode};
    } else {
      if (this.cap === cache.size) {
        this.cache._removeLast();
        this.map.delete(key);
      }
      this.cache._addFront(newNode);
      this.map = {...this.map, key: newNode}
    }

  }
}

let cache = new LRUCache(2);
// 你可以把 cache 理解成一个队列
// 假设左边是队头，右边是队尾
// 最近使用的排在队头，久未使用的排在队尾
// 圆括号表示键值对 (key, val)

cache.setNode(1, 1);
// cache = [(1, 1)]
cache.setNode(2, 2);
// cache = [(2, 2), (1, 1)]
console.log(cache.getNode(1));       // 返回 1
// cache = [(1, 1), (2, 2)]
// 解释：因为最近访问了键 1，所以提前至队头
// 返回键 1 对应的值 1
cache.setNode(3, 3);
// cache = [(3, 3), (1, 1)]
// 解释：缓存容量已满，需要删除内容空出位置
// 优先删除久未使用的数据，也就是队尾的数据
// 然后把新的数据插入队头
console.log(cache.getNode(2));       // 返回 -1 (未找到)
// cache = [(3, 3), (1, 1)]
// 解释：cache 中不存在键为 2 的数据
cache.setNode(1, 4);   