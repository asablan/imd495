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
            ["style", "width", '320px'],
            ["style", "height", '568px'],
            ["style", "overflow", 'hidden']
         ],
         "${_HomePage2}": [
            ["transform", "scaleX", '0.5'],
            ["style", "top", '-284px'],
            ["transform", "scaleY", '0.5'],
            ["style", "left", '-160px']
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
            { id: "eid9", tween: [ "style", "${_HomePage2}", "top", '-284px', { fromValue: '-284px'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_HomePage2}", "left", '-160px', { fromValue: '-160px'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "transform", "${_HomePage2}", "scaleY", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "transform", "${_HomePage2}", "scaleX", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 }         ]
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
      id: 'topRowModule',
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
      id: 'topRowModule',
      symbolName: 'topRowModule'
   }   ]
   },
   states: {
      "Base State": {
         "${_logo}": [
            ["style", "top", '121px'],
            ["style", "height", '329px'],
            ["style", "left", '0px'],
            ["style", "width", '640px']
         ],
         "${_mockups}": [
            ["style", "top", '0px'],
            ["style", "height", '1136px'],
            ["style", "left", '0px'],
            ["style", "width", '640px']
         ],
         "${_bottomRowModule3}": [
            ["style", "left", '427px']
         ],
         "${symbolSelector}": [
            ["style", "height", '1136px'],
            ["style", "overflow", 'hidden'],
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
      rect: ['0px','0px','213px','213px','auto','auto'],
      id: 'Rectangle2',
      stroke: [1,'rgba(0,0,0,0.50)','solid'],
      type: 'rect',
      fill: ['rgba(0,0,0,0.20)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["color", "background-color", 'rgba(0,0,0,0.20)'],
            ["style", "height", '213px'],
            ["color", "border-color", 'rgba(0,0,0,0.50)'],
            ["style", "left", '0px'],
            ["style", "width", '213px']
         ],
         "${symbolSelector}": [
            ["style", "height", '213px'],
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
      rect: ['0px','0px','320px','213px','auto','auto'],
      id: 'Rectangle3',
      stroke: [1,'rgba(0,0,0,0.50)','solid'],
      type: 'rect',
      fill: ['rgba(0,0,0,0.20)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,0,0,0.20)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "height", '213px'],
            ["color", "border-color", 'rgba(0,0,0,0.50)'],
            ["style", "left", '0px'],
            ["style", "width", '320px']
         ],
         "${symbolSelector}": [
            ["style", "height", '213px'],
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
            ["style", "left", '0px'],
            ["color", "border-color", 'rgba(0,0,0,0.50)'],
            ["style", "height", '213px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '640px']
         ],
         "${symbolSelector}": [
            ["style", "height", '213px'],
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
