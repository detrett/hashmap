import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(key, value) {
    const newNode = new Node(key, value);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  prepend(key, value) {
    const newNode = new Node(key, value);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  size() {
    if (this.head === null && this.tail === null) {
      return 0;
    } else {
      let count = 1;
      let currentNode = this.head;
      while (currentNode.nextNode) {
        count++;
        currentNode = currentNode.nextNode;
      }
      return count;
    }
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      if (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      } else {
        return "Index out of bounds";
      }
    }
    return currentNode;
  }

  pop() {
    const lastIndex = this.size() - 2;
    const lastNode = this.at(lastIndex);
    this.tail = lastNode;
    lastNode.nextNode = null;
  }

  containsValue(value) {
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  findValue(value) {
    let currentNode = this.head;
    let index = 0;
    while(currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  updateValue(index, value) {
    const currentNode = this.at(index);
    currentNode.value = value;
  }

  containsKey(key) {
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.key === key) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  findKey(key) {
    let currentNode = this.head;
    let index = 0;
    while(currentNode) {
      if (currentNode.key === key) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    if (this.head === null && this.tail === null) {
      console.log("List is empty");
    } else {
      let currentNode = this.head;
      let output = ``;
      while(currentNode) {
        output += `(  key: ${currentNode.key}, value: ${currentNode.value} ) -> `;
        currentNode = currentNode.nextNode;
      }
      output += `null`;
      return output;
    }
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.size()) {
      this.append(value);
    } else {
      const newNode = new Node(value);
      const previousNode = this.at(index - 1);
      newNode.nextNode = previousNode.nextNode;
      previousNode.nextNode = newNode;
    }
  }

  removeAt(index) {
    if (index === 0) {
      const deletedNode = this.head;
      this.head = deletedNode.nextNode;
      deletedNode.nextNode = null;
    } else if (index === (this.size() - 1)) {
      this.pop();
    } else {
      const previousNode = this.at(index - 1);
      const deletedNode = previousNode.nextNode;
      previousNode.nextNode = deletedNode.nextNode;
      deletedNode.nextNode = null;
    }
  }
}
