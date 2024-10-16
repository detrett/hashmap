import { LinkedList } from "./linkedList.js";

export class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    // Load factor between 0.75 and 1 (e.g., resize at 12 for a load factor of 0.75)
    this.loadFactor = loadFactor >= 0.75 && loadFactor <= 1 ? loadFactor : 0.75;
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null);
  }

  hash(key, tableSize) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      const char = key.charCodeAt(i);
      total = (total + char * 17) % tableSize;
    }
    return total;
  }

  set(key, value) {
    const hashCode = this.hash(key, this.capacity);
    // If a list already exists at that location
    if (this.buckets[hashCode] !== null) {
      const linkedList = this.buckets[hashCode];
      const index = linkedList.findKey(key);
      // Check if the key already exists in the list to update its value
      if (index !== null) {
        linkedList.updateValue(index, value);
      }
      // If not, append the new node to the list
      else {
        linkedList.append(key, value);
        this.size++;
        // Check if we have exceeded the load factor and we need to resize
        if (this.size / this.capacity > this.loadFactor) {
          resize();
        }
      }
    }
    // Create a list and append the node
    else {
      const linkedList = new LinkedList();
      this.buckets[hashCode] = linkedList;
      linkedList.append(key, value);
      this.size++;
      // Check if we have exceeded the load factor and we need to resize
      if (this.size / this.capacity > this.loadFactor) {
        resize();
      }
    }
  }

  get(key) {
    const hashCode = this.hash(key, this.capacity);
    const linkedList = this.buckets[hashCode];
    // If a list exists at that location
    if (linkedList) {
      const index = linkedList.findKey(key);
      // If an item with that key is found return its value, else return null
      return index !== null ? linkedList.at(index).value : null;
    } else return null;
  }

  has(key) {
    const hashCode = this.hash(key, this.capacity);
    const linkedList = this.buckets[hashCode];
    // If a list exists at that location
    if (linkedList) {
      const index = linkedList.findKey(key);
      // If an item with that key is found return true, else return false
      return index !== null ? true : false;
    }
  }

  remove(key) {
    const hashCode = this.hash(key, this.capacity);
    const linkedList = this.buckets[hashCode];
    // If a list exists at that location
    if (linkedList) {
      const index = linkedList.findKey(key);
      if (index !== null) {
        linkedList.removeAt(index);
        this.size--;
        return true;
      } else return false;
      // If an item with that key is found return true, else return false
    } else return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.capacity = 16;
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null);
  }

  keys() {
    const keysArray = [];
    this.buckets.forEach((element) => {
      if(element) {
        let node = element.head;
        while(node) {
          keysArray.push(node.key);
          node = node.nextNode;
        }
      }
    })
    return keysArray;
  }

  values() {
    const valuesArray = [];
    this.buckets.forEach((element) => {
      if(element) {
        let node = element.head;
        while(node) {
          valuesArray.push(node.value);
          node = node.nextNode;
        }
      }
    })
    return valuesArray;
  }

  entries() {
    const entriesArray = [];
    this.buckets.forEach((element) => {
      if(element) {
        let node = element.head;
        while(node) {
          entriesArray.push(`[${node.key}, ${node.value}]`);
          node = node.nextNode;
        }
      }
    })
    return entriesArray;
  }

  list() {
    const listArray = [];
    this.buckets.forEach((element) => {
      if(element) {
        let node = element.head;
        listArray.push(node.toString());
      }
    })
    return listArray;
  }

  resize() {
    const newCapacity = this.capacity * 2;
    const newBuckets = new Array(newCapacity).fill(null);
  }
}
