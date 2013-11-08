//View
/* Base View Class */
var View = function (name) {
    this.name = name;

    this.show = function () {
        $("#" + this.name).removeClass("hidden");
    };
    this.hide = function () {
        $("#" + this.name).addClass("hidden");
    };
};

(function () {
    ArtistInfoView = function (artistId) {
        View.call(this, "artistInfoView");
        this.prototype = new View();
        this.prototype.constructor = ArtistInfoView;
        var _this = this;

        this.dataInit = function () {
            //TODO
        };

        this.addEvent = function () {
            //TODO
        };

        this.show = function () {
            _this.prototype.show.call(_this);   //调用父类中的show()方法
            //TODO
        };

        this.hide = function () {
            _this.prototype.hide.call(_this);   //调用父类中德hide()方法
        };
    }
})()
