/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'HomePage2',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'HomePage2',
            symbolName:'HomePage'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1136px'],
            ["style", "width", '640px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"HomePage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'mockups',
      type: 'image',
      rect: ['0px','0px','640px','1136px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mockups.png','0px','0px']
   },
   {
      id: 'logo',
      type: 'image',
      rect: ['0px','121px','640px','329px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/logo.png','0px','0px']
   },
   {
      id: 'bottomRowModule',
      type: 'rect',
      rect: ['0','923','auto','auto','auto','auto']
   },
   {
      id: 'bottomRowModule2',
      type: 'rect',
      rect: ['213','923','auto','auto','auto','auto']
   },
   {
      id: 'bottomRowModule3',
      type: 'rect',
      rect: ['431','923','auto','auto','auto','auto']
   },
   {
      id: 'middleRowModule',
      type: 'rect',
      rect: ['0','710','auto','auto','auto','auto']
   },
   {
      id: 'middleRowModule2',
      type: 'rect',
      rect: ['320','710','auto','auto','auto','auto']
   },
   {
      id: 'TopRowHome',
      type: 'rect',
      rect: ['0','497','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'middleRowModule',
      symbolName: 'middleRowModule'
   },
   {
      id: 'bottomRowModule2',
      symbolName: 'bottomRowModule'
   },
   {
      id: 'middleRowModule2',
      symbolName: 'middleRowModule'
   },
   {
      id: 'bottomRowModule3',
      symbolName: 'bottomRowModule'
   },
   {
      id: 'bottomRowModule',
      symbolName: 'bottomRowModule'
   },
   {
      id: 'TopRowHome',
      symbolName: 'TopRowHome'
   }   ]
   },
   states: {
      "Base State": {
         "${_logo}": [
            ["style", "height", '329px'],
            ["style", "top", '121px'],
            ["style", "left", '0px'],
            ["style", "width", '640px']
         ],
         "${_bottomRowModule3}": [
            ["style", "left", '427px']
         ],
         "${symbolSelector}": [
            ["style", "height", '1136px'],
            ["style", "width", '640px'],
            ["style", "overflow", 'hidden']
         ],
         "${_mockups}": [
            ["style", "height", '1136px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '640px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid1", tween: [ "style", "${_bottomRowModule3}", "left", '427px', { fromValue: '427px'}], position: 0, duration: 0 }         ]
      }
   }
},
"bottomRowModule": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [1,'rgba(0,0,0,0.50)','solid'],
      rect: ['0px','0px','213px','213px','auto','auto'],
      fill: ['rgba(0,0,0,0.20)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '213px'],
            ["style", "width", '213px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(0,0,0,0.20)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "border-color", 'rgba(0,0,0,0.50)'],
            ["style", "height", '213px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '213px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"middleRowModule": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle3',
      stroke: [1,'rgba(0,0,0,0.50)','solid'],
      rect: ['0px','0px','320px','213px','auto','auto'],
      fill: ['rgba(0,0,0,0.20)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '213px'],
            ["style", "width", '320px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,0,0,0.20)'],
            ["style", "left", '0px'],
            ["color", "border-color", 'rgba(0,0,0,0.50)'],
            ["style", "height", '213px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '320px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"topRowModule": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','640px','213px','auto','auto'],
      id: 'Rectangle4',
      stroke: [1,'rgba(0,0,0,0.50)','solid'],
      type: 'rect',
      fill: ['rgba(0,0,0,0.20)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(0,0,0,0.20)'],
            ["style", "top", '0px'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '213px'],
            ["color", "border-color", 'rgba(0,0,0,0.50)'],
            ["style", "left", '0px'],
            ["style", "width", '640px']
         ],
         "${symbolSelector}": [
            ["style", "height", '215px'],
            ["style", "width", '642px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"TopRowHome": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'topRowModule',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      rect: ['20px','20','auto','auto','auto','auto'],
      id: 'Text',
      text: 'Newsfeed',
      font: ['Arial, Helvetica, sans-serif',32,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   },
   {
      rect: ['10px','70px','618px','121px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'Rectangle',
      stroke: [1,'rgba(0, 0, 0, 0.496094)','solid'],
      type: 'rect',
      fill: ['rgba(0,0,0,0.20)']
   },
   {
      rect: ['20px','80px','600px','103px','auto','auto'],
      id: 'Untitled',
      opacity: 0.5625,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Untitled.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'topRowModule',
      symbolName: 'topRowModule'
   }   ]
   },
   states: {
      "Base State": {
         "${_Untitled}": [
            ["style", "top", '80px'],
            ["style", "height", '103px'],
            ["style", "opacity", '0.5625'],
            ["style", "left", '20px'],
            ["style", "width", '600px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '20px'],
            ["style", "font-size", '32px']
         ],
         "${symbolSelector}": [
            ["style", "height", '214px'],
            ["style", "width", '640px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,0.20)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '10px'],
            ["style", "width", '618px'],
            ["style", "top", '70px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '121px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_topRowModule}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-31425734");
