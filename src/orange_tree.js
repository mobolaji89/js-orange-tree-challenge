var OrangeTree = function(age, height) {
  this.age = age;
  this.height = height;
  this.oranges = new Array;
};

OrangeTree.prototype.isMature = function() {
  return (this.age >= 6);
  // -OR-
  // if (this.age >= 6) {
  //   return true
  // }
  // return false;
};

OrangeTree.prototype.isDead = function() {
  return (this.age >= 100);
};

OrangeTree.prototype.hasOranges = function() {
  return (this.oranges.length > 0);
};

OrangeTree.prototype.passGrowingSeason = function() {
  if (this.isDead() == false) {
    this.age += 1;
    if (this.height < 25) {
      this.height += 2.5;
      for (i = 0; i < 10; i++) {
        this.oranges.push(new Orange);
      };
    };
    return this.oranges;
  };
};

OrangeTree.prototype.pickAnOrange = function() {
  console.log(this.oranges)
    //use shift to remove oldest orange in array (first)
    //pop will work, but will remove newest orange in array (last)
    return this.oranges.shift();
  };
