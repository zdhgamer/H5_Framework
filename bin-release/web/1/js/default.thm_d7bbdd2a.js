
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/Test.exml'] = window.Test = (function (_super) {
	__extends(Test, _super);
	var Test$Skin1 = 	(function (_super) {
		__extends(Test$Skin1, _super);
		function Test$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Test$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "01_jpg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Test$Skin1;
	})(eui.Skin);

	function Test() {
		_super.call(this);
		this.skinParts = ["Button"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = Test.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this._Image1_i(),this.Button_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.bottom = 0;
		t.fillMode = "scale";
		t.includeInLayout = true;
		t.left = 0;
		t.pixelHitTest = true;
		t.right = 0;
		t.source = "01_jpg";
		t.top = 0;
		return t;
	};
	_proto.Button_i = function () {
		var t = new eui.Button();
		this.Button = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 34;
		t.height = 94.4;
		t.label = "";
		t.right = 29;
		t.width = 106.4;
		t.x = 1149.14;
		t.skinName = Test$Skin1;
		return t;
	};
	return Test;
})(eui.Skin);