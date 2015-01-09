"use strict";
var DASHBOARD =  DASHBOARD || {};
DASHBOARD.createBoard = DASHBOARD.createBoard || {};
DASHBOARD.createDock = DASHBOARD.createDock || {};
DASHBOARD.Window = DASHBOARD.Window || {};
DASHBOARD.addDockIcons = DASHBOARD.addDockIcons || {};

DASHBOARD.init = function(){
    DASHBOARD.createBoard();
    DASHBOARD.createDock();
    DASHBOARD.addDockIcons();

}

