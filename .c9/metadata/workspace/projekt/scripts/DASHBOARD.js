{"changed":true,"filter":false,"title":"DASHBOARD.js","tooltip":"/projekt/scripts/DASHBOARD.js","value":"\"use strict\";\n\nvar DASHBOARD = DASHBOARD || {};\nDASHBOARD.createBoard = DASHBOARD.createBoard || {};\nDASHBOARD.createDock = DASHBOARD.createDock || {};\nDASHBOARD.Window = DASHBOARD.Window || {};\nDASHBOARD.addDockIcons = DASHBOARD.addDockIcons || {};\nDASHBOARD.setPosition = DASHBOARD.setPosition || {};\n\nDASHBOARD.init = function() {\n    DASHBOARD.createBoard();\n    DASHBOARD.createDock();\n    DASHBOARD.addDockIcons();\n}\n\n","undoManager":{"mark":87,"position":90,"stack":[[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":1},"end":{"row":6,"column":2},"action":"insert","lines":["S"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":2},"end":{"row":6,"column":3},"action":"insert","lines":["H"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":2},"end":{"row":6,"column":3},"action":"remove","lines":["H"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":1},"end":{"row":6,"column":2},"action":"remove","lines":["S"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"remove","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"insert","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"remove","lines":["D"]},{"start":{"row":6,"column":0},"end":{"row":6,"column":9},"action":"insert","lines":["DASHBOARD"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":10},"end":{"row":6,"column":13},"action":"remove","lines":["set"]},{"start":{"row":6,"column":10},"end":{"row":6,"column":21},"action":"insert","lines":["setPosition"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":["S"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"remove","lines":["S"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"insert","lines":["S"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":24},"end":{"row":6,"column":27},"action":"remove","lines":["DAS"]},{"start":{"row":6,"column":24},"end":{"row":6,"column":33},"action":"insert","lines":["DASHBOARD"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":33},"end":{"row":6,"column":34},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":34},"end":{"row":6,"column":35},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":35},"end":{"row":6,"column":36},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":36},"end":{"row":6,"column":37},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":34},"end":{"row":6,"column":37},"action":"remove","lines":["set"]},{"start":{"row":6,"column":34},"end":{"row":6,"column":45},"action":"insert","lines":["setPosition"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":45},"end":{"row":6,"column":46},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":46},"end":{"row":6,"column":47},"action":"insert","lines":["\\"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":47},"end":{"row":6,"column":48},"action":"insert","lines":["\\"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":47},"end":{"row":6,"column":48},"action":"remove","lines":["\\"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":46},"end":{"row":6,"column":47},"action":"remove","lines":["\\"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":46},"end":{"row":6,"column":47},"action":"insert","lines":["|"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":47},"end":{"row":6,"column":48},"action":"insert","lines":["|"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":48},"end":{"row":6,"column":49},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":49},"end":{"row":6,"column":50},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":50},"end":{"row":6,"column":51},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":51},"end":{"row":6,"column":52},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":52},"end":{"row":7,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":4},"end":{"row":12,"column":5},"action":"insert","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":4},"end":{"row":12,"column":5},"action":"remove","lines":["D"]},{"start":{"row":12,"column":4},"end":{"row":12,"column":13},"action":"insert","lines":["DASHBOARD"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":13},"end":{"row":12,"column":14},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":13},"end":{"row":12,"column":14},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":12},"end":{"row":12,"column":13},"action":"remove","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":11},"end":{"row":12,"column":12},"action":"remove","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":10},"end":{"row":12,"column":11},"action":"remove","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":9},"end":{"row":12,"column":10},"action":"remove","lines":["O"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":8},"end":{"row":12,"column":9},"action":"remove","lines":["B"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":7},"end":{"row":12,"column":8},"action":"remove","lines":["H"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":6},"end":{"row":12,"column":7},"action":"remove","lines":["S"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":5},"end":{"row":12,"column":6},"action":"remove","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":4},"end":{"row":12,"column":5},"action":"remove","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":29},"end":{"row":12,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":28},"end":{"row":11,"column":29},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":28},"end":{"row":11,"column":29},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":29},"end":{"row":12,"column":0},"action":"insert","lines":["",""]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":4},"end":{"row":12,"column":5},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":4},"end":{"row":12,"column":5},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":4},"end":{"row":12,"column":5},"action":"insert","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":5},"end":{"row":12,"column":6},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":6},"end":{"row":12,"column":7},"action":"insert","lines":["À"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":6},"end":{"row":12,"column":7},"action":"remove","lines":["À"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":6},"end":{"row":12,"column":7},"action":"insert","lines":["S"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":4},"end":{"row":12,"column":7},"action":"remove","lines":["DAS"]},{"start":{"row":12,"column":4},"end":{"row":12,"column":13},"action":"insert","lines":["DASHBOARD"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":13},"end":{"row":12,"column":14},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":15},"end":{"row":12,"column":18},"action":"remove","lines":["set"]},{"start":{"row":12,"column":15},"end":{"row":12,"column":26},"action":"insert","lines":["setPosition"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":26},"end":{"row":12,"column":28},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":28},"end":{"row":12,"column":29},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":4},"end":{"row":12,"column":28},"action":"remove","lines":["DASHBOARD.setPosition();"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":4},"end":{"row":13,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":5},"end":{"row":13,"column":0},"action":"insert","lines":["",""]},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":4},"end":{"row":14,"column":0},"action":"insert","lines":["",""]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":4},"end":{"row":14,"column":37},"action":"insert","lines":["window.onload = DASHBOARD.init();"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":16},"end":{"row":1,"column":17},"action":"remove","lines":[" "]},{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"insert","lines":[" "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"remove","lines":["    "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"remove","lines":["    "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"remove","lines":["    "]},{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":13},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"remove","lines":["window.onload = DASHBOARD.init();",""]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"insert","lines":["window.onload = DASHBOARD.init();",""]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":15,"column":33},"action":"remove","lines":["","window.onload = DASHBOARD.init();"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":15,"column":0},"end":{"row":15,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1421099519050}