webpackJsonp([1],{

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	(function () {
	    __webpack_require__(28);
	    __webpack_require__(5);

	    var dialogModule = function dialogModule() {
	        //配置
	        this.config = {
	            speed: 'fast'
	        };
	        this.dom = {};
	        //加载dialog模板
	        var tpl = __webpack_require__(30);
	        $('body').append(tpl);
	        this.init();
	    };
	    dialogModule.prototype = {
	        init: function init() {
	            //初始化Dom并绑定事件
	            this.dom.dlg = $('.dialogWrapper');
	            this.dom.title = $('[node-type="dialogTitle"]');
	            this.dom.summary = $('[node-type="dialogSummary"]');
	            this.dom.pic = $('[node-type="dialogSrc"]');
	            this.dom.text = $('[node-type="dialogText"]');
	            this.dom.close = $('[action-type="closeDlg"]');
	            this.bindDialogEvent();
	        },
	        openDialog: function openDialog() {
	            //打开对话框
	            this.dom.dlg.fadeIn(this.config.speed);
	        },
	        closeDialog: function closeDialog() {
	            //关闭对话框
	            this.dom.dlg.fadeOut(this.config.speed);
	        },
	        bindDialogEvent: function bindDialogEvent() {
	            //绑定对话框事件
	            var that = this;
	            this.dom.close.bind('click', function () {
	                that.closeDialog();
	            });
	        },
	        /**
	         * @param {Object} dlg
	         * @param title 标题
	         * @param summary 简介/副标题
	         * @param src 图片src
	         * @param text 正文详细介绍
	         */
	        openDialogWith: function openDialogWith(dlg) {
	            //更新dialog文字内容并打开对话框
	            this.dom.title.text(dlg.title);
	            this.dom.summary.text(dlg.summary);
	            this.dom.pic.attr('src', dlg.src);
	            this.dom.text.text(dlg.text);
	            this.openDialog();
	        }
	    };
	    module.exports = dialogModule;
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(29, function() {
				var newContent = __webpack_require__(29);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports


	// module
	exports.push([module.id, ".dialogWrapper {\r\n    height: 100%;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n}\r\n.dialogWrapper .dialogMask{\r\n    background: rgba(0, 0, 0, 0.6) none repeat scroll 0 0;\r\n    height: 100%;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n}\r\n.dialogWrapper .dialog{\r\n    background: #ffffff none repeat scroll 0 0;\r\n    border-radius: 4px;\r\n    margin: 100px auto;\r\n    padding: 25px 55px 35px;\r\n    position: relative;\r\n    width: 991px;\r\n}\r\n.dialog .dialogHeader h2{\r\n    color: #1699cd;\r\n    font-size: 36px;\r\n    text-align: center;\r\n}\r\n.dialog .dialogSummary{\r\n    margin: 45px 0 85px;\r\n}\r\n.dialog .dialogSummary p{\r\n    color: #30353f;\r\n    font-size: 24px;\r\n    text-align: center;\r\n}\r\n.dialog .dialogContent .dialogPic{\r\n    float: left;\r\n    background-color: #eaeaea;\r\n    border-radius: 4px;\r\n    padding: 6px;\r\n    width: 420px;\r\n}\r\n.dialog .dialogContent .dialogPic img{\r\n    max-width: 420px;\r\n}\r\n.dialog .dialogContent .dialogText{\r\n    float: right;\r\n    height: 296px;\r\n    line-height: 296px;\r\n    margin-left: 50px;\r\n    width: 509px;\r\n}\r\n.dialog .dialogContent .dialogText span{\r\n    display: inline-block;\r\n    color: #666666;\r\n    font-size: 14px;\r\n    line-height: 1.6em;\r\n}\r\n\r\n.dialog .dialogClose{\r\n    position: absolute;\r\n    right: -125px;\r\n    top: 0;\r\n}\r\n.dialog .dialogClose em{\r\n    height: 75px;\r\n    width: 76px;\r\n    background-position: 0 -75px;\r\n    transition: background-position 0.2s ease-in-out;\r\n    display: inline-block;\r\n}\r\n.dialog .dialogClose a:hover em{\r\n    background-position: 0 0;\r\n}", ""]);

	// exports


/***/ },

/***/ 30:
/***/ function(module, exports) {

	module.exports = "<div class=\"dialogWrapper\" id=\"dialog\">\r\n    <div class=\"dialogMask\" action-type=\"closeDlg\">\r\n\r\n    </div>\r\n    <div class=\"dialog\">\r\n        <div class=\"dialogHeader\">\r\n            <h2 node-type=\"dialogTitle\"></h2>\r\n        </div>\r\n        <div class=\"dialogSummary\">\r\n            <p node-type=\"dialogSummary\"></p>\r\n        </div>\r\n        <div class=\"dialogContent clearfix\">\r\n            <div class=\"dialogPic\">\r\n                <img node-type=\"dialogSrc\"/>\r\n            </div>\r\n            <div class=\"dialogText\">\r\n                <span node-type=\"dialogText\"></span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"dialogClose\">\r\n            <a href=\"javascript:void(0)\" title=\"关闭对话框\" action-type=\"closeDlg\">\r\n                <em></em>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }

});