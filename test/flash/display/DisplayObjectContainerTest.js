

describe("DisplayObjectContainer.js property test", function()
{
    // mouseChildren
    it("mouseChildren test success", function()
    {
        var doc = new DisplayObjectContainer();
        doc.mouseChildren = false;
        expect(doc.mouseChildren).toBe(false);
    });

    it("mouseChildren test valid case1", function()
    {
        var doc = new DisplayObjectContainer();
        doc.mouseChildren = 0;
        expect(doc.mouseChildren).toBe(true);
    });

    it("mouseChildren test valid case2", function()
    {
        var doc = new DisplayObjectContainer();
        doc.mouseChildren = "abc";
        expect(doc.mouseChildren).toBe(true);
    });


    // numChildren
    it("numChildren test success", function()
    {
        var doc = new DisplayObjectContainer();
        expect(doc.numChildren).toBe(0);
    });

    it("numChildren test valid", function()
    {
        var doc = new DisplayObjectContainer();
        doc.numChildren = 10;
        expect(doc.numChildren).toBe(0);
    });


    // tabChildren
    it("tabChildren test success", function()
    {
        var doc = new DisplayObjectContainer();
        doc.tabChildren = false;
        expect(doc.tabChildren).toBe(false);
    });

    it("tabChildren test valid case1", function()
    {
        var doc = new DisplayObjectContainer();
        doc.tabChildren = 0;
        expect(doc.tabChildren).toBe(true);
    });

    it("tabChildren test valid case2", function()
    {
        var doc = new DisplayObjectContainer();
        doc.tabChildren = "abc";
        expect(doc.tabChildren).toBe(true);
    });


    // textSnapshot
    it("textSnapshot test success", function()
    {
        var doc = new DisplayObjectContainer();
        expect(doc.textSnapshot instanceof TextSnapshot).toBe(true);
    });

    it("textSnapshot test valid", function()
    {
        var doc = new DisplayObjectContainer();
        doc.textSnapshot = 10;
        expect(doc.textSnapshot instanceof TextSnapshot).toBe(true);
    });

});


describe("DisplayObjectContainer.js addChild test", function()
{
    it("addChild error case", function()
    {
        var doc = new DisplayObjectContainer();
        try {
            doc.addChild({});
        } catch (e) {
            expect(e.message).toBe("this child is not DisplayObject.");
        }
    });

    it("addChild success case", function()
    {
        var player = new Player();
        var a = player.stage.addChild(new DisplayObject());
        var b = player.stage.addChild(new Loader());

        expect(player.stage.numChildren).toBe(2);
        expect(a.id).toBe(1);
        expect(b.id).toBe(2);
    });

});


describe("DisplayObjectContainer.js addChildAt test", function()
{
    it("addChildAt error case", function()
    {
        try {
            var player = new Player();
            player.stage.addChildAt(new DisplayObject(), 0);
            player.stage.addChildAt(new DisplayObject(), 0);
        } catch (e) {
            expect(e.message).toBe("index is out of range.");
        }
    });

    it("addChildAt success case", function()
    {
        var player = new Player();
        var a = player.stage.addChildAt(new DisplayObject(), 0);
        var b = player.stage.addChildAt(new Loader(), 1);

        expect(player.stage.numChildren).toBe(2);
        expect(a.id).toBe(1);
        expect(b.id).toBe(2);
    });

});


describe("DisplayObjectContainer.js contains test", function()
{
    it("contains success case", function()
    {
        var player = new Player();
        var a = player.stage.addChild(new DisplayObject());
        var b = new DisplayObject();
        var c = player.stage.addChild(new DisplayObject());
        var d = new DisplayObject();

        expect(player.stage.contains(a)).toBe(true);
        expect(player.stage.contains(b)).toBe(false);
        expect(player.stage.contains(c)).toBe(true);
        expect(player.stage.contains(d)).toBe(false);
    });

    it("contains error case", function()
    {
        var doc = new DisplayObjectContainer();
        try {
            doc.contains({});
        } catch (e) {
            expect(e.message).toBe("this child is not DisplayObject.");
        }
    });

});


describe("DisplayObjectContainer.js getChildAt test", function()
{
    it("getChildAt success case", function()
    {
        var player = new Player();
        var a      = player.stage.addChild(new DisplayObject());
        var child  = player.stage.getChildAt(0);
        expect(child.id === a.id).toBe(true);
    });

    it("getChildAt error case", function()
    {
        var doc = new DisplayObjectContainer();
        try {
            doc.getChildAt(10);
        } catch (e) {
            expect(e.message).toBe("index is out of range.");
        }
    });

});


describe("DisplayObjectContainer.js getChildByName test", function()
{
    it("getChildByName success case", function()
    {
        var player = new Player();
        var child  = new DisplayObject();
        child.name = "child1";

        player.stage.addChild(child);
        player.stage.addChild(new DisplayObject());

        var instance1 = player.stage.getChildByName("child1");
        var instance2 = player.stage.getChildByName("child2");

        expect(instance1.name).toBe("child1");
        expect(instance2).toBe(null);
    });

    it("getChildByName error case", function()
    {
        var player = new Player();
        var child  = new DisplayObject();
        child.name = 1;

        player.stage.addChild(child);
        player.stage.addChild(new DisplayObject());

        var instance1 = player.stage.getChildByName(1);
        var instance2 = player.stage.getChildByName(2);

        expect(instance1.name).toBe("1");
        expect(instance2).toBe(null);
    });
});