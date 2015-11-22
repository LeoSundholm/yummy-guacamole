var moveLeftHalfScreen = slate.operation("move", {
	"x" : "screenOriginX",
	"y" : "screenOriginY",
	"width" : "screenSizeX/2",
	"height" : "screenSizeY"
});

var moveRightHalfScreen = slate.operation("move", {
	"x" : "screenOriginX+screenSizeX/2",
	"y" : "screenOriginY",
	"width" : "screenSizeX/2",
	"height" : "screenSizeY"
});

var moveTopLeftCorner = slate.operation("move", {
	"x" : "screenOriginX",
	"y" : "screenOriginY",
	"width" : "screenSizeX/2",
	"height" : "screenSizeY/2"
});

var moveBottomRightCorner = slate.operation("move", {
	"x" : "screenOriginX+screenSizeX/2",
	"y" : "screenOriginY+screenSizeY/2",
	"width" : "screenSizeX/2",
	"height" : "screenSizeY/2"
});

slate.bind("down:ctrl;alt", function(win){
	if (win == null) {return;};
	var visibleRect = win.screen().visibleRect();
	var width = visibleRect.width * 0.65;
	var height = visibleRect.height * 0.65;
	
	var middleX = visibleRect.x + visibleRect.width/2 - width/2;
	var middleY = visibleRect.y + visibleRect.height/2 - height/2;
	
	win.doOperation(slate.operation("move", {
		"x" : middleX,
		"y" : middleY,
		"width" : width,
		"height" : height
	}));
});

slate.bind("left:ctrl;alt", function(win){
	if (win == null) {return;};
	visibleRect = win.screen().visibleRect();
	if(win.size().width > (visibleRect.width/2 - 10)
		&& win.size().width < (visibleRect.width/2 + 10)
		&& win.topLeft().x == visibleRect.x
		&& win.size().height == (visibleRect.height)){
		win.doOperation(slate.operation("throw", {
			"x" : "screenOriginX+screenSizeX/2",
			"y" : "screenOriginY",
			"width" : "screenSizeX/2",
			"height" : "screenSizeY",
			"screen" : "left"
		}));
} else {
	win.doOperation(moveLeftHalfScreen);
}
});

slate.bind("right:ctrl;alt", function(win){
	if (win == null) {return;};
	visibleRect = win.screen().visibleRect();
	if(win.size().width > visibleRect.width/2 - 10
		&& win.size().width < visibleRect.width/2 + 10
		&& win.topLeft().x == (visibleRect.x + visibleRect.width/2)
		&& win.size().height == (visibleRect.height)){
		win.doOperation(slate.operation("throw", {
			"x" : "screenOriginX",
			"y" : "screenOriginY",
			"width" : "screenSizeX/2",
			"height" : "screenSizeY",
			"screen" : "right"
		}));
}else{
	win.doOperation(moveRightHalfScreen);
}
});

slate.bind("left:ctrl;alt;cmd", function(win){
	if (win == null) {return;};
	visibleRect = win.screen().visibleRect();
	if(win.size().width > (visibleRect.width/2 - 10)
		&& win.size().width < (visibleRect.width/2 + 10)
		&& win.topLeft().x == visibleRect.x
		&& win.topLeft().y == visibleRect.y
		&& win.size().height > (visibleRect.height/2 - 10)
		&& win.size().height < (visibleRect.height/2 + 10)){
		win.doOperation(slate.operation("throw", {
			"x" : "screenOriginX+screenSizeX/2",
			"y" : "screenOriginY",
			"width" : "screenSizeX/2",
			"height" : "screenSizeY/2",
			"screen" : "left"
		}));
}else if(win.size().width > (visibleRect.width/2 - 10)
		&& win.size().width < (visibleRect.width/2 + 10)
		&& win.topLeft().x == visibleRect.x
		&& win.topLeft().y > (visibleRect.y + visibleRect.height/2 - 10)
		&& win.topLeft().y < (visibleRect.y + visibleRect.height/2 + 10)
		&& win.size().height > (visibleRect.height/2 - 10)
		&& win.size().height < (visibleRect.height/2 + 10)){
		win.doOperation(slate.operation("throw", {
			"x" : "screenOriginX+screenSizeX/2",
			"y" : "screenOriginY+screenSizeY/2",
			"width" : "screenSizeX/2",
			"height" : "screenSizeY/2",
			"screen" : "left"
		}));
} else {
	win.doOperation(moveTopLeftCorner);
}
});

slate.bind("right:ctrl;alt;cmd", function(win){
	if (win == null) {return;};
	visibleRect = win.screen().visibleRect();
	if(win.size().width > (visibleRect.width/2 - 10)
		&& win.size().width < (visibleRect.width/2 + 10)
		&& win.topLeft().x == (visibleRect.x + visibleRect.width/2)
		&& win.topLeft().y == visibleRect.y
		&& win.size().height > (visibleRect.height/2 - 10)
		&& win.size().height < (visibleRect.height/2 + 10)){
		win.doOperation(slate.operation("throw", {
			"x" : "screenOriginX",
			"y" : "screenOriginY",
			"width" : "screenSizeX/2",
			"height" : "screenSizeY/2",
			"screen" : "right"
		}));
}else if(win.size().width > (visibleRect.width/2 - 10)
		&& win.size().width < (visibleRect.width/2 + 10)
		&& win.topLeft().x == (visibleRect.x + visibleRect.width/2)
		&& win.topLeft().y > (visibleRect.y + visibleRect.height/2 - 10)
		&& win.topLeft().y < (visibleRect.y + visibleRect.height/2 + 10)
		&& win.size().height > (visibleRect.height/2 - 10)
		&& win.size().height < (visibleRect.height/2 + 10)){
		slate.log("throw right");
		win.doOperation(slate.operation("throw", {
			"x" : "screenOriginX",
			"y" : "screenOriginY+screenSizeY/2",
			"width" : "screenSizeX/2",
			"height" : "screenSizeY/2",
			"screen" : "right"
		}));
} else {
	slate.log(win.topLeft().x == (visibleRect.x + visibleRect.width/2));
	slate.log(win.topLeft().y == (visibleRect.y + visibleRect.height/2));
	win.doOperation(moveBottomRightCorner);
}
});

slate.bind("]:ctrl;alt", function(win){
	if (win == null) {return;};
	var pixelWidth = 0.05 * win.screen().visibleRect().width;
	var pixelHeight = 0.05 * win.screen().visibleRect().height;

	win.doOperation(slate.operation("resize", {
		"width" : "+"+pixelWidth,
		"height" : "+"+pixelHeight
	}));
	win.doOperation(slate.operation("nudge", {
		"x" : "-"+pixelWidth/2,
		"y" : "-"+pixelHeight/2
	}));
});

slate.bind("[:ctrl;alt", function(win){
	if (win == null) {return;};
	var pixelWidth = 0.05 * win.screen().visibleRect().width;
	var pixelHeight = 0.05 * win.screen().visibleRect().height;

	win.doOperation(slate.operation("resize", {
		"width" : "-"+pixelWidth,
		"height" : "-"+pixelHeight
	}));
	win.doOperation(slate.operation("nudge", {
		"x" : "+"+pixelWidth/2,
		"y" : "+"+pixelHeight/2
	}));
});

//throw
slate.bind("[:ctrl;cmd", function(win){slateThrowProportional(win, "left");});
slate.bind(",:ctrl;cmd", function(win){slateThrowProportional(win, "left");});//lolwut, this works at home. I have serously configured my keyboard too much and can't keep up anymore
slate.bind("':ctrl;cmd", function(win){slateThrowProportional(win, "right");});

//flip
slate.bind("f:ctrl;alt;cmd", function(){
	slate.eachApp(function(app){
		app.eachWindow(function(win){
			if (win.screen().id() == 0) {
				slateThrowProportional(win, "right");
			} else {
				slateThrowProportional(win, "left");
			}
		});
	});
});

function slateThrowProportional(win, direction){
	if (win == null) {return;};

	var rect = win.screen().visibleRect();
    
    var topLeftX = (win.topLeft().x-rect.x)/rect.width;
    var topLeftY = (win.topLeft().y-rect.y)/rect.height;
    
    var width = win.size().width/rect.width;
    var height = win.size().height/rect.height;
    
    win.doOperation(slate.operation("throw", { "screen" : direction }));
    
    var newRect = win.screen().visibleRect();
    
    var destX = newRect.x + (topLeftX * newRect.width);
    var destY = newRect.y + (topLeftY * newRect.height);
    
    var destWidth = newRect.width * width;
    var destHeight = newRect.height * height;
    
    win.doOperation(slate.operation("move", {
                                    "x" : destX,
                                    "y" : destY,
                                    "width" : destWidth,
                                    "height" : destHeight
    }));
	
}

var runIfMap  = {
	"Jump Desktop": "/Applications/Jump Desktop.app",
	"Google Chrome": "/Applications/Google Chrome.app",
	"Parallels Desktop": "/Applications/Parallels Desktop.app",
	"HipChat": "/Applications/HipChat.app",
	"Skype": "/Applications/Skype.app",
	"SourceTree": "/Applications/SourceTree.app",
	"Notes": "/Applications/Notes.app",
	"Finder": "System/Library/CoreServices/Finder.app",
	"Xcode": "/Applications/Xcode.app",
	"Terminal": "/Applications/Utilities/Terminal.app",
	"Sublime Text": "/Applications/Sublime Text.app",
	"Spotify": "/Applications/Spotify.app",
	"iPhoneTunnel": "/Applications/iPhoneTunnel.app",
	"Unity": "/Applications/Unity/Unity.app",
	"Activity Monitor": "/Applications/Utilities/Activity Monitor.app",
	"Messages": "/Applications/Messages.app",
	"Slack": "Applications/Slack.app",
};

function isAppRunning(name){
	var running = false;
	slate.eachApp(function (app) {
		if (app.name() == name) {
			running = true;
		}
	});
	return running;
}

function openApplication(name){
	if (runIfMap[name]) {
		var str = "/usr/bin/open \"" + runIfMap[name] + "\"";
		slate.shell(str);
	}
}

function runIfAndFocus(name) {
	if(!isAppRunning(name)){
		openApplication(name);
	}
	slate.doOperation("focus", {"app" : name});
	slate.doOperation("show", {"app" : "current"});
}

function runOrQuit(name){
	if (!isAppRunning(name)) {
		openApplication(name);
	} else {
		//this isn't working D:
		var str = "osascript -e 'quit app \"" + runIfMap[name] + "\"'";
		slate.shell(str);
	}
}

//toggle wifi
slate.bind("w:ctrl;cmd", function() { wifiToggle(); });
var wifiOn = false;
function wifiToggle() {
 if(wifiOn) {
   slate.shell("/usr/sbin/networksetup -setairportpower airport off");
 } else {
   slate.shell("/usr/sbin/networksetup -setairportpower airport on");
 }
 wifiOn = !wifiOn;
}

slate.bind("a:ctrl;cmd", function(){runIfAndFocus("Parallels Desktop");});
slate.bind("b:ctrl;cmd", function(){runIfAndFocus("Sublime Text");});
slate.bind("c:ctrl;cmd", function(){runIfAndFocus("Google Chrome");});
slate.bind("g:ctrl;cmd", function(){runIfAndFocus("SourceTree");});
slate.bind("l:ctrl;cmd", function(){runIfAndFocus("Slack");});
slate.bind("m:ctrl;cmd", function(){runIfAndFocus("Messages");});
slate.bind("n:ctrl;cmd", function(){runIfAndFocus("Notes");});
slate.bind("o:ctrl;cmd", function(){runIfAndFocus("Spotify");});
slate.bind("p:ctrl;cmd", function(){runIfAndFocus("Parallels Desktop");});
slate.bind("s:ctrl;cmd", function(){runIfAndFocus("Skype");});
slate.bind("t:ctrl;cmd", function(){runIfAndFocus("Terminal");});
slate.bind("u:ctrl;cmd", function(){runIfAndFocus("Unity");});
slate.bind("x:ctrl;cmd", function(){runIfAndFocus("Xcode");});
slate.bind("q:ctrl;cmd", function(){runIfAndFocus("Activity Monitor");}); //unfortunately, when I need this something has usually crashed in a way that slate also stops working

slate.bind("e:ctrl;cmd", function(){
	runIfAndFocus("Finder");
	if (slate.app().mainWindow == undefined) {
		//did not work, try something else later
		slate.shell("/usr/bin/open/Applications/");
	};
});

/*
slate.bind("l:ctrl;alt;cmd", function(){
	slate.log("window name: " + slate.window().title());
	slate.log("app name: " + slate.app().name());
});
*/