describe("an orange tree", function() {
  var tree;

  beforeEach(function() {
    tree = new OrangeTree(6, 12);
    tree2 = new OrangeTree(2, 25);
    tree3 = new OrangeTree(105, 34);
  });

  it("has an age", function() {
    expect(tree.age).toEqual(6)
  });
  it("has a height", function(){
    expect(tree.height).toEqual(12)
  });
  it("has a collection of oranges", function(){
    tree.passGrowingSeason()
    // console.log(tree.oranges);
    expect(tree.oranges.length).toEqual(10)
  });

  describe("reporting whether it's mature", function() {
    it("is mature if it has reached fruit-bearing age", function(){
      expect(tree.isMature()).toEqual(true)
    });
    it("is not mature if it has not reached fruit-bearing age", function(){
      expect(tree2.isMature()).toEqual(false)
    });
  });
  describe("reporting whether it's dead", function() {
    it("is dead if it's reached the maximum age for an orange tree", function(){
      expect(tree3.isDead()).toEqual(true)
    });
    it("is not dead if it's not reached the maximum age for an orange tree", function(){
      expect(tree.isDead()).toEqual(false)
    });
  });

  describe("reporting whether it has oranges", function() {
    it("has oranges if it's collection of oranges is not empty", function(){
      tree.passGrowingSeason()
      expect(tree.oranges.length).not.toBeLessThan(1)
    });
    it("has no oranges if it's collection of oranges is empty", function(){
      tree2.passGrowingSeason()
      expect(tree2.oranges.length).toEqual(0)
    });
  });

  describe("passing a growing season", function() {
    describe("when it's alive", function() {
      it("gets older", function(){
        tree.passGrowingSeason()
        expect(tree.age).toEqual(7)
      });

      describe("when the tree is shorter than the maximum height for an orange tree", function() {
        it("grows taller", function(){
          tree.passGrowingSeason()
          expect(tree.height).toEqual(14.5)
        });
      });

      describe("when the tree has reached the maximum height for an orange tree", function() {
        it("does not grow", function(){
          tree2.passGrowingSeason()
          expect(tree2.height).toEqual(25)
        });
      });

      describe("when it's mature", function() {
        it("produces oranges", function(){
          tree.passGrowingSeason()
          expect(tree.oranges.length).not.toBeLessThan(1)
        });
      });

      describe("when it's not mature", function() {
        it("does not produce fruit", function(){
          tree2.passGrowingSeason()
          expect(tree2.oranges.length).toEqual(0)
        });
      });
    });

   describe("when it's dead", function() {
      it("does not get older", function(){
        tree.age = 101;
        tree.passGrowingSeason();
        expect(tree.age).toEqual(101);
      });
      it("does not grow", function(){
        tree.age = 101;
        startHeight = tree.height;
        tree.passGrowingSeason();
        expect(tree.height).toEqual(startHeight);
      });
      it("does not produce fruit", function(){
        tree.age = 101;
        tree.passGrowingSeason();
        expect(tree.hasOranges()).toBe(false);
      });
    });
  });

  describe("picking an orange", function() {
    describe("when the tree has oranges", function() {

      beforeEach(function() {
        tree = new OrangeTree(12,10);
        tree.passGrowingSeason()
      });

      it("returns one of its oranges", function(){
        var pickedOrange = tree.pickAnOrange();
        expect(pickedOrange).toEqual(jasmine.any(Orange));
      });
      it("no longer has the returned orange in its collection of oranges", function() {
        var pickedOrange = tree.pickAnOrange();
        var outcome = tree.oranges.indexOf(pickedOrange);
        expect(outcome).toEqual(-1);
      });
    });

      describe("when the tree has no oranges", function() {
        it("returns undefined", function() {
          expect(tree.pickAnOrange()).toBeUndefined();
        });
      });
    });
  });
