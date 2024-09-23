const identity={name:"Robert C. Langefeld",image:"robert_pic"},data={NavBar:{...identity,links:["Home","About","Portfolio","Training","Achievement","Contact"]},Home:{introduction:"I am a PhD student at the University of Michigan in Biostatistics focusing on statistical genetics and spatial transcriptomics. I have an MS in Biostatistics from the University of Michigan and a double BS in Math and CS from Wake Forest University.",resumeLink:"1m70DJBsddH4GNSySSQrWDXP4_PugX1bL",typedElement:["Robert Langefeld","Biostatistician","HPC Developer","Statistical Geneticist","DL Engineer","Data Scientist","ML Researcher"]},About:{...identity,NavTabs:[{id:"story",name:"About",placement:"top"},{id:"skill",name:"Skills",placement:"bottom"},{id:"education",name:"Education",placement:"top"}],about:{"tech-stats":"Statistical Geneticist, Machine Learning Engineer, and HPC Programmer",bio:"I'm a PhD student at the University of Michigan in Biostatistics focusing on statistical genetics, spatial transcriptomics, and machine learning. I've previously worked with multiple research groups on image segmentation algorithms, HPC software, and statistical analyses. I'm currently interested in finding ways to design computational methods to handle big data and helping translate computational tools and genetics research into the clinic.",Tools:["Visual Studio Code","JetBrains IDEs","Anaconda","Spack","Python","MPI","CUDA","SLURM"],Interests:["Statistical Genetics","Spatial Transcriptomics","Deep Learning","High Performance Computing"],"Outside of Class":["Tae Kwon Do","Learning Foreign Languages","Cooking"]},skills:[[{skill:"Deep Learning",progress:"100"},{skill:"AI Technologies",progress:"100"},{skill:"Linux Systems",progress:"100"},{skill:"Git/GitHub",progress:"100"}],[{skill:"High Performance Computing",progress:"100"},{skill:"Cluster Administration",progress:"100"},{skill:"Cloud Computing",progress:"100"},{skill:"Software/Package Development",progress:"100"}]],programmingLanguages:[[{skill:"C/C++",progress:"100",logo:"fa-brands fa-cuttlefish"},{skill:"CUDA (NVIDIA GPUs)",progress:"100",logo:"fa-solid fa-cubes"},{skill:"JAVA",progress:"100",logo:"fa-brands fa-java"}],[{skill:"Python",progress:"100",logo:"fa-brands fa-python"},{skill:"R/Rcpp",progress:"100",logo:"fa-brands fa-r-project"},{skill:"Bash",progress:"100",logo:"fa-brands fa-linux"}]],languages:[[{skill:"English",progress:"100"},{skill:"\ud55c\uad6d\uc5b4 (Korean)",progress:"85"}],[{skill:"Spanish",progress:"95"},{skill:"\u4e2d\u6587 (Chinese)",progress:"70"}]],education:[{animationClass:"Right left",textAlignment:"right",degree:"Bachelor of Science (B.S.), Double Major in Mathematics and Computer Science, both with Honors",college:"Wake Forest University",location:"Winston-Salem, NC",duration:"2018 - 2022",percentage:"GPA: 4.0",imageUrl:"assets/images/education/wfu.png"},{animationClass:"Left right",textAlignment:"left",degree:"Master of Science (M.S.), Biostatistics",college:"University of Michigan",location:"Ann Arbor, MI",duration:"2022 - 2024",percentage:"GPA 4.14",imageUrl:"assets/images/education/um_biostat.png"},{animationClass:"Right left",textAlignment:"right",degree:"PhD, Biostatistics",college:"University of Michigan",location:"Ann Arbor, MI",duration:"2024 - Present",percentage:"",imageUrl:"assets/images/education/um_biostat.png"}]},Quote:{images:[{src:"https://prod.wp.cdn.aws.wfu.edu/sites/22/2022/02/20220206campus0551.blog_.jpg",alt:"Wake Forest University"},{src:"https://sph.umich.edu/news/2021posts/images/sph-building-exterior.jpg",alt:"University of Michigan"},{src:"assets/images/robert/robert_alt.png",alt:"SC21 Profile Picture"},{src:"assets/images/robert/ashg_logo.png",alt:"ASHG Logo"},{src:"assets/images/robert/ashg_poster.png",alt:"ASHG Poster"},{src:"assets/images/robert/graduation.png",alt:"Wake Forest University Graduation"},{src:"assets/images/robert/dubois.webp",alt:"With DuBois Bowman"},{src:"assets/images/robert/friends.png",alt:"With Friends"},{src:"assets/images/robert/sc_trip.png",alt:"Trip to SC"},{src:"assets/images/robert/hs_grad.png",alt:"HS Graduation"},{src:"assets/images/robert/inference.png",alt:"Inference Group"}]},Portfolio:[{animationClass:"rotateInDownLeft",delay:"0.5s",project:"pyGEMMA",description:"A Python/R implementation of linear mixed models based on GEMMA. We also incorperate efficient algorithms that scale to HPC systems for efficient analysis of biobank-scale data.",placement:"top",url:"https://github.com/rlangefe/pygemma"},{animationClass:"slideInUp",delay:"0",project:"Panoptic-Segmentation-For-Remote-Sensing",description:"The pipeline runs object detection and instance segmentation. We applied it to drone data to detect objects associated with illegal mining in the Amazon.",placement:"top",url:"https://github.com/IRSC-WFU/panoptic-pipeline",image:"/assets/images/portfolio/panoptic_pipeline.png"},{animationClass:"rotateInDownRight",delay:"0.5s",project:"Undergraduate-Honors-Theses",description:"For my CS BS, I rewrote the PaLD clustering algorithm for GPUs and multicore systems. For my Math BS, I modified PaLD for supervised learning.",placement:"top",url:"https://github.com/rlangefe/PaLD",image:"/assets/images/portfolio/Undergraduate-Theses.webp"}],Training:{background:"footer-cloud.svg",sun:["stream z-1 d-block","stream z-1 d-block","stream z-1 d-block","stream z-1 d-block","stream z-1 d-block","stream z-1 d-block","stream z-1 d-block","stream z-1 d-block","circle z-2 height-full width-full","circle-night z-2 height-full width-full"],developTime:[{time:"1",style:{left:"66px",top:"-10px"}},{time:"2",style:{left:"88px",top:"-20px"}},{time:"3",style:{left:"110px",top:"-10px"}}],moon:{dot:["dot","dot","dot"],name:["Moon-dark","Moon"]},training:[[{class:"Left",title:"Xiang Zhou's Lab (University of Michigan)",subtitle:"Graduate Student Research Assistant",date:"August 2022 - Present",description:"I'm currently a PhD and MS student in Biostatistics at UM with Dr. Xiang Zhou, working on GWAS and spatial transcriptomics methods.",link:"https://xiangzhou.github.io/"},{class:"Down",title:"Intelligent Remote Sensing in Conservation & Discovery Group (WFU)",subtitle:"Researcher",date:"December 2020 - August 2022",description:"I developed deep learning and statistical models to analyze remote sensing data and detect illegal mining in the Amazon. Projects were conducted with WFU, Dartmouth, and CINCIA in Peru.",link:"https://irsc-wfu.github.io/"},{class:"Right",title:"Student Cluster Competition (SCC) for Wake Forest University",subtitle:"Team Captain",date:"SC20 and SC21",description:"I was team captain of Wake's SCC team for SC20 and SC21. I was in charge of software installation and cluster administration both years. Our team was supported by Cisco.",link:"https://www.studentclustercompetition.us/"}],[{class:"Left",title:"Clinical Image Analysis Lab (CIALab) at Wake Forest University",subtitle:"Student Researcher",date:"May 2018 - May 2022",description:"I worked on a variety of projects in the CIALab, mainly focused on deep learning methods to analyze medical images with clinical applications. I also maintained the lab software stack and trained new members.",link:"https://school.wakehealth.edu/research/labs/clinical-image-analysis-lab"},{class:"Up",title:"Parallel GPU-Optimized Verlet Neighbor List Algorithm for Molecular Dynamics Simulations - Wake Forest URECA Grant with Dr. Sam Cho",subtitle:"Researcher",date:"June 2020 - August 2020",description:"I designed GPU algorithms to dramatically improve the speed of molecular dynamics simulations. Given the timing, I validated my results through simulations of over new 100 COVID-19 proteins.",link:"https://ureca.wfu.edu/"},{class:"Right",title:"WFU Datafest",subtitle:"Competitor",date:"April 2020, April 2022",description:"I competed on a team of students two years for Datafest. We performd analysis of a dataset provided by the competition and reported our results. In 2020, my team won 'Best Insight through Modeling'.",link:""}]]},Achievement:[{animationClass:"Left",title:"NIH Pre-Doctoral Traineeship in Genomic Sciences",description:"The Genome Science Training Program is a T32 grant for predoctoral training in statistical, computational, and molecular genetics.",location:"University of Michigan",image:"um_biostat.png",link:"https://sph.umich.edu/csg/gstp.html"},{animationClass:"Up",title:"John W. Sawyer Award in Computer Science",description:"The Sawyer Prize is awarded each year to the most outstanding graduating senior in computer science as selected by the faculty.",location:"Wake Forest University",link:"https://cs.wfu.edu/2022-john-w-sawyer-award-recipients/",image:"wfu.png"},{animationClass:"Up",title:"John Y. Phillips Prize in Mathematics",description:"The John Y. Phillips Prize is awarded each year to the outstanding graduating senior in mathematics in the Department of Mathematics and Statistics",location:"Wake Forest University",link:"https://prod.wp.cdn.aws.wfu.edu/sites/59/2022/05/COMM_HonorsAwards2022-2.pdf",image:"wfu.png"},{animationClass:"Right",title:"Thomas E. & Ruth Mullen Scholarship",description:"The Committee on Scholarships and Student Aid annually recognizes up to ten students as Thomas E. and Ruth Mullen Scholars as part of the Carswell Scholarship Program for returning students.",location:"Wake Forest University",link:"https://financialaid.wfu.edu/types-of-aid/scholarships/scholarship-opportunities-for-upperclass-students/#20220726174230",image:"wfu.png"}],Contact:[{animationClass:"Left",title:"Location",icon:"fas fa-street-view",links:[{type:"https://maps.google.com/?q=",title:"Department of Biostatistics\n1415 Washington Heights,\nAnn Arbor, MI 48109-2029"}]},{animationClass:"Up",title:"GitHub",icon:"fab fa-github",links:[{type:"https://github.com/",title:"rlangefe"}]},{animationClass:"Right",title:"E-Mail",icon:"far fa-envelope",links:[{type:"mailto:",title:"email@stuff.lol"}]}],Social:[[{link:"https://github.com/rlangefe",class:"fab fa-github",name:"GitHub",placement:"left"},{link:"https://www.linkedin.com/in/robert-langefeld",class:"fab fa-linkedin-in",name:"LinkedIn",placement:"top"},{link:"https://gist.github.com/rlangefe",class:"fas fa-laptop-code",name:"Gist",placement:"top"}],[]],Footer:{dev:{name:"GitHub",link:"https://github.com/rlangefe",image:"axolotl"},citation:{...identity,animationClass:"flipInX",icon:"fas fa-heart"}}};!function(u,l){"object"==typeof exports&&"object"==typeof module?module.exports=l():"function"==typeof define&&define.amd?define([],l):"object"==typeof exports?exports.Typed=l():u.Typed=l()}(this,function(){return function(u){function l(i){if(t[i])return t[i].exports;var n=t[i]={exports:{},id:i,loaded:!1};return u[i].call(n.exports,n,n.exports,l),n.loaded=!0,n.exports}var t={};return l.m=u,l.c=t,l.p="",l(0)}([function(u,l,t){"use strict";var i=function(){function o(s,a){for(var e=0;e<a.length;e++){var h=a[e];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(s,h.key,h)}}return function(s,a,e){return a&&o(s.prototype,a),e&&o(s,e),s}}(),n=t(1),r=t(3),c=function(){function o(s,a){(function(e,h){if(!(e instanceof h))throw new TypeError("Cannot call a class as a function")})(this,o),n.initializer.load(this,a,s),this.begin()}return i(o,[{key:"begin",value:function(){var s=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){s.currentElContent&&0!==s.currentElContent.length?s.backspace(s.currentElContent,s.currentElContent.length):s.typewrite(s.strings[s.sequence[s.arrayPos]],s.strPos)},this.startDelay)}},{key:"typewrite",value:function(s,a){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var h=this.humanizer(this.typeSpeed),p=1;return!0===this.pause.status?void this.setPauseStatus(s,a,!0):void(this.timeout=setTimeout(function(){a=r.htmlParser.typeHtmlChars(s,a,e);var d=0,m=s.substr(a);if("^"===m.charAt(0)&&/^\^\d+/.test(m)){var g=1;g+=(m=/\d+/.exec(m)[0]).length,d=parseInt(m),e.temporaryPause=!0,e.options.onTypingPaused(e.arrayPos,e),s=s.substring(0,a)+s.substring(a+g),e.toggleBlinking(!0)}if("`"===m.charAt(0)){for(;"`"!==s.substr(a+p).charAt(0)&&!(a+ ++p>s.length););var f=s.substring(0,a),v=s.substring(f.length+1,a+p),y=s.substring(a+p+1);s=f+v+y,p--}e.timeout=setTimeout(function(){e.toggleBlinking(!1),a>=s.length?e.doneTyping(s,a):e.keepTyping(s,a,p),e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e))},d)},h))}},{key:"keepTyping",value:function(s,a,e){0===a&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var h=s.substr(0,a+=e);this.replaceText(h),this.typewrite(s,a)}},{key:"doneTyping",value:function(s,a){var e=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){e.backspace(s,a)},this.backDelay))}},{key:"backspace",value:function(s,a){var e=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var h=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){a=r.htmlParser.backSpaceHtmlChars(s,a,e);var p=s.substr(0,a);if(e.replaceText(p),e.smartBackspace){var d=e.strings[e.arrayPos+1];e.stopNum=d&&p===d.substr(0,a)?a:0}a>e.stopNum?(a--,e.backspace(s,a)):a<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],a))},h)}else this.setPauseStatus(s,a,!1)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"toggleBlinking",value:function(s){this.cursor&&(this.pause.status||this.cursorBlinking!==s&&(this.cursorBlinking=s,s?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(s){return Math.round(Math.random()*s/2)+s}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"replaceText",value:function(s){this.attr?this.el.setAttribute(this.attr,s):this.isInput?this.el.value=s:"html"===this.contentType?this.el.innerHTML=s:this.el.textContent=s}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),o}();l.default=c,u.exports=l.default},function(u,l,t){"use strict";var i,n=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var h=arguments[e];for(var p in h)Object.prototype.hasOwnProperty.call(h,p)&&(a[p]=h[p])}return a},r=function(){function a(e,h){for(var p=0;p<h.length;p++){var d=h[p];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(e,d.key,d)}}return function(e,h,p){return h&&a(e.prototype,h),p&&a(e,p),e}}(),c=(i=t(2))&&i.__esModule?i:{default:i},o=function(){function a(){!function(e,h){if(!(e instanceof h))throw new TypeError("Cannot call a class as a function")}(this,a)}return r(a,[{key:"load",value:function(e,h,p){if(e.el="string"==typeof p?document.querySelector(p):p,e.options=n({},c.default,h),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(v){return v.trim()}),e.stringsElement="string"==typeof e.options.stringsElement?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.display="none";var d=Array.prototype.slice.apply(e.stringsElement.children),m=d.length;if(m)for(var g=0;g<m;g+=1)e.strings.push(d[g].innerHTML.trim())}for(var g in e.strPos=0,e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.sequence=[],e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.strings)e.sequence[g]=g;e.currentElContent=this.getCurrentElContent(e),e.autoInsertCss=e.options.autoInsertCss,this.appendAnimationCss(e)}},{key:"getCurrentElContent",value:function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent}},{key:"appendAnimationCss",value:function(e){var h="data-typed-js-css";if(e.autoInsertCss&&(e.showCursor||e.fadeOut)&&!document.querySelector("["+h+"]")){var p=document.createElement("style");p.type="text/css",p.setAttribute(h,!0);var d="";e.showCursor&&(d+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),e.fadeOut&&(d+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==p.length&&(p.innerHTML=d,document.body.appendChild(p))}}}]),a}();l.default=o;var s=new o;l.initializer=s},function(u,l){l.default={strings:[],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,i){},onStringTyped:function(t,i){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,i){},onTypingResumed:function(t,i){},onReset:function(t){},onStop:function(t,i){},onStart:function(t,i){},onDestroy:function(t){}},u.exports=l.default},function(u,l){"use strict";var t=function(){function r(c,o){for(var s=0;s<o.length;s++){var a=o[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(c,a.key,a)}}return function(c,o,s){return o&&r(c.prototype,o),s&&r(c,s),c}}(),i=function(){function r(){!function(c,o){if(!(c instanceof o))throw new TypeError("Cannot call a class as a function")}(this,r)}return t(r,[{key:"typeHtmlChars",value:function(c,o,s){if("html"!==s.contentType)return o;var a=c.substr(o).charAt(0);if("<"===a||"&"===a){var e;for(e="<"===a?">":";";c.substr(o+1).charAt(0)!==e&&!(1+ ++o>c.length););o++}return o}},{key:"backSpaceHtmlChars",value:function(c,o,s){if("html"!==s.contentType)return o;var a=c.substr(o).charAt(0);if(">"===a||";"===a){var e;for(e=">"===a?"<":"&";c.substr(o-1).charAt(0)!==e&&!(--o<0););o--}return o}}]),r}();l.default=i;var n=new i;l.htmlParser=n}])});const pJS=function(u){const l=document.querySelector("#"+u+" > .particles-js-canvas-el");var t={canvas:{el:l,w:l.offsetWidth,h:l.offsetHeight},particles:{number:{value:29,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#000000"}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:80,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:300,color:"#ff9800",opacity:.4,width:2},move:{enable:!0,speed:12,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}},array:[]},fps_limit:250,interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:800,line_linked:{opacity:1}},bubble:{distance:800,size:80,duration:2,opacity:.8,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};t.tmp.obj={size_value:t.particles.size.value,size_anim_speed:t.particles.size.anim.speed,move_speed:t.particles.move.speed,line_linked_distance:t.particles.line_linked.distance,line_linked_width:t.particles.line_linked.width,mode_grab_distance:t.interactivity.modes.grab.distance,mode_bubble_distance:t.interactivity.modes.bubble.distance,mode_bubble_size:t.interactivity.modes.bubble.size,mode_repulse_distance:t.interactivity.modes.repulse.distance},t.fn.retinaInit=function(){t.retina_detect&&window.devicePixelRatio>1?(t.canvas.pxratio=window.devicePixelRatio,t.tmp.retina=!0):(t.canvas.pxratio=1,t.tmp.retina=!1),t.canvas.w=t.canvas.el.offsetWidth*t.canvas.pxratio,t.canvas.h=t.canvas.el.offsetHeight*t.canvas.pxratio,t.particles.size.value=t.tmp.obj.size_value*t.canvas.pxratio,t.particles.size.anim.speed=t.tmp.obj.size_anim_speed*t.canvas.pxratio,t.particles.move.speed=t.tmp.obj.move_speed*t.canvas.pxratio,t.particles.line_linked.distance=t.tmp.obj.line_linked_distance*t.canvas.pxratio,t.interactivity.modes.grab.distance=t.tmp.obj.mode_grab_distance*t.canvas.pxratio,t.interactivity.modes.bubble.distance=t.tmp.obj.mode_bubble_distance*t.canvas.pxratio,t.particles.line_linked.width=t.tmp.obj.line_linked_width*t.canvas.pxratio,t.interactivity.modes.bubble.size=t.tmp.obj.mode_bubble_size*t.canvas.pxratio,t.interactivity.modes.repulse.distance=t.tmp.obj.mode_repulse_distance*t.canvas.pxratio},t.fn.canvasInit=function(){t.canvas.ctx=t.canvas.el.getContext("2d")},t.fn.canvasSize=function(){t.canvas.el.width=t.canvas.w,t.canvas.el.height=t.canvas.h,t&&t.interactivity.events.resize&&window.addEventListener("resize",function(){t.canvas.w=t.canvas.el.offsetWidth,t.canvas.h=t.canvas.el.offsetHeight,t.canvas.el.width=t.canvas.w,t.canvas.el.height=t.canvas.h,t.fn.vendors.densityAutoParticles()})},t.fn.canvasPaint=function(){t.canvas.ctx.fillRect(0,0,t.canvas.w,t.canvas.h)},t.fn.particle=function(i,n,r){this.radius=(t.particles.size.random?Math.random():1)*t.particles.size.value,this.x=r?r.x:Math.random()*t.canvas.w,this.y=r?r.y:Math.random()*t.canvas.h,this.x>t.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>t.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),this.color={},this.color=i,this.color.rgb=hexToRgb(this.color.value),this.opacity=(t.particles.opacity.random?Math.random():1)*t.particles.opacity.value,this.vx=Math.random()-.5,this.vy=Math.random()-.5,this.vx_i=this.vx,this.vy_i=this.vy,this.shape=t.particles.shape.type},t.fn.particle.prototype.draw=function(){var i=this,n=i.radius;t.canvas.ctx.fillStyle="rgba("+i.color.rgb.r+","+i.color.rgb.g+","+i.color.rgb.b+","+i.opacity+")",t.canvas.ctx.beginPath(),t.canvas.ctx.arc(i.x,i.y,n,0,2*Math.PI,!1),t.canvas.ctx.closePath(),t.canvas.ctx.fill()},t.fn.particlesCreate=function(){for(var i=0;i<t.particles.number.value;i++)t.particles.array.push(new t.fn.particle(t.particles.color,t.particles.opacity.value))},t.fn.particlesUpdate=function(){for(var i=0;i<t.particles.array.length;i++){var n=t.particles.array[i];if(t.particles.move.enable){var r=t.particles.move.speed/2;n.x+=n.vx*r,n.y+=n.vy*r}let s={x_left:-n.radius,x_right:t.canvas.w+n.radius,y_top:-n.radius,y_bottom:t.canvas.h+n.radius};if(n.x-n.radius>t.canvas.w?(n.x=s.x_left,n.y=Math.random()*t.canvas.h):n.x+n.radius<0&&(n.x=s.x_right,n.y=Math.random()*t.canvas.h),n.y-n.radius>t.canvas.h?(n.y=s.y_top,n.x=Math.random()*t.canvas.w):n.y+n.radius<0&&(n.y=s.y_bottom,n.x=Math.random()*t.canvas.w),t.fn.modes.grabParticle(n),t.particles.line_linked.enable)for(var c=i+1;c<t.particles.array.length;c++)t.fn.interact.linkParticles(n,t.particles.array[c])}},t.fn.particlesDraw=function(){t.canvas.ctx.clearRect(0,0,t.canvas.w,t.canvas.h),t.fn.particlesUpdate();for(var i=0;i<t.particles.array.length;i++)t.particles.array[i].draw()},t.fn.interact.linkParticles=function(i,n){var r=i.x-n.x,c=i.y-n.y,o=Math.sqrt(r*r+c*c);if(o<=t.particles.line_linked.distance){var s=t.particles.line_linked.opacity-o/(1/t.particles.line_linked.opacity)/t.particles.line_linked.distance;if(s>0){var a=t.particles.line_linked.color_rgb_line;t.canvas.ctx.strokeStyle="rgba("+a.r+","+a.g+","+a.b+","+s+")",t.canvas.ctx.lineWidth=t.particles.line_linked.width,t.canvas.ctx.beginPath(),t.canvas.ctx.moveTo(i.x,i.y),t.canvas.ctx.lineTo(n.x,n.y),t.canvas.ctx.stroke(),t.canvas.ctx.closePath()}}},t.fn.modes.pushParticles=function(i,n){t.tmp.pushing=!0;for(var r=0;r<i;r++)t.particles.array.push(new t.fn.particle(t.particles.color,t.particles.opacity.value,{x:n?n.pos_x:Math.random()*t.canvas.w,y:n?n.pos_y:Math.random()*t.canvas.h}))},t.fn.modes.removeParticles=function(i){t.particles.array.splice(0,i),t.particles.move.enable||t.fn.particlesDraw()},t.fn.modes.grabParticle=function(i){if(t.interactivity.events.onhover.enable&&"mousemove"===t.interactivity.status){var n=i.x-t.interactivity.mouse.pos_x,r=i.y-t.interactivity.mouse.pos_y,c=Math.sqrt(n*n+r*r);if(c<=t.interactivity.modes.grab.distance){var o=t.interactivity.modes.grab.line_linked.opacity-c/(1/t.interactivity.modes.grab.line_linked.opacity)/t.interactivity.modes.grab.distance;if(o>0){var s=t.particles.line_linked.color_rgb_line;t.canvas.ctx.strokeStyle="rgba("+s.r+","+s.g+","+s.b+","+o+")",t.canvas.ctx.lineWidth=t.particles.line_linked.width,t.canvas.ctx.beginPath(),t.canvas.ctx.moveTo(i.x,i.y),t.canvas.ctx.lineTo(t.interactivity.mouse.pos_x,t.interactivity.mouse.pos_y),t.canvas.ctx.stroke(),t.canvas.ctx.closePath()}}}},t.fn.vendors.eventsListeners=function(){t.interactivity.el="window"===t.interactivity.detect_on?window:t.canvas.el,(t.interactivity.events.onhover.enable||t.interactivity.events.onclick.enable)&&(t.interactivity.el.addEventListener("mousemove",function(i){let r=i.offsetY||i.clientY;t.interactivity.mouse.pos_x=i.offsetX||i.clientX,t.interactivity.mouse.pos_y=r,t.tmp.retina&&(t.interactivity.mouse.pos_x*=t.canvas.pxratio,t.interactivity.mouse.pos_y*=t.canvas.pxratio),t.interactivity.status="mousemove"}),t.interactivity.el.addEventListener("mouseleave",function(i){t.interactivity.mouse.pos_x=null,t.interactivity.mouse.pos_y=null,t.interactivity.status="mouseleave"})),t.interactivity.el.addEventListener("click",function(){t.interactivity.mouse.click_pos_x=t.interactivity.mouse.pos_x,t.interactivity.mouse.click_pos_y=t.interactivity.mouse.pos_y,t.interactivity.mouse.click_time=(new Date).getTime(),t.fn.modes.pushParticles(t.interactivity.modes.push.particles_nb,t.interactivity.mouse)})},t.fn.vendors.densityAutoParticles=function(){if(t.particles.number.density.enable){var i=t.canvas.el.width*t.canvas.el.height/1e3;t.tmp.retina&&(i/=2*t.canvas.pxratio);var r=t.particles.array.length-i*t.particles.number.value/t.particles.number.density.value_area;r<0?t.fn.modes.pushParticles(Math.abs(r)):t.fn.modes.removeParticles(r)}},t.fn.vendors.draw=function(){var i=t.fps_limit;i<=0||setTimeout(function(){t.fn.particlesDraw(),t.particles.move.enable?t.fn.drawAnimFrame=requestAnimFrame(t.fn.vendors.draw):cancelRequestAnimFrame(t.fn.drawAnimFrame)},1e3/i)},t.fn.vendors.init=function(){t.fn.retinaInit(),t.fn.canvasInit(),t.fn.canvasSize(),t.fn.canvasPaint(),t.fn.particlesCreate(),t.fn.vendors.densityAutoParticles(),t.particles.line_linked.color_rgb_line=hexToRgb(t.particles.line_linked.color)},t.fn.vendors.start=function(){t.fn.vendors.init(),t.fn.vendors.draw()},t.fn.vendors.eventsListeners(),t.fn.vendors.start()};function hexToRgb(u){u=u.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,i,n,r){return i+i+n+n+r+r});var l=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(u);return l?{r:parseInt(l[1],16),g:parseInt(l[2],16),b:parseInt(l[3],16)}:null}window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(u){window.setTimeout(u,1e3/60)},window.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,window.pJSDom=[],window.particlesJS=function(u){document.getElementById(u).getElementsByClassName("particles-js-canvas-el");var l=document.createElement("canvas");l.className="particles-js-canvas-el",l.style.width="100%",l.style.height="100%",l.style.position="absolute",l.style.top="0px",null!==document.getElementById(u).appendChild(l)&&pJSDom.push(new pJS(u))},window.particlesJS.load=function(u){setTimeout(()=>{window.particlesJS(u)},0)};var VanillaTilt=function(){"use strict";class u{constructor(t,i={}){if(!(t instanceof Node))throw"Can't initialize VanillaTilt because "+t+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=t,this.settings=this.extendSettings(i),this.reverse=this.settings.reverse?-1:1,this.glare=u.isSettingTrue(this.settings.glare),this.glarePrerender=u.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=u.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=u.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.updateInitialPosition()}static isSettingTrue(t){return""===t||!0===t||1===t}getElementListener(){if(this.fullPageListening)return window.document;if("string"==typeof this.settings["mouse-event-element"]){const t=document.querySelector(this.settings["mouse-event-element"]);if(t)return t}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}onDeviceOrientation(t){if(null===t.gamma||null===t.beta)return;this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);const o=(t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero))/((this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX)/this.width),s=(t.beta-(this.settings.gyroscopeMinAngleY+this.betazero))/((this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY)/this.height);null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:o+this.left,clientY:s+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}onMouseEnter(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.event={clientX:this.left+this.width/2,clientY:this.top+this.height/2},this.element&&this.element.style&&(this.element.style.transform=`perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`),this.resetGlare()}resetGlare(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}updateInitialPosition(){if(0===this.settings.startX&&0===this.settings.startY)return;this.onMouseEnter(),this.event=this.fullPageListening?{clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:{clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};let t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()}getValues(){let t,i;return this.fullPageListening?(t=this.event.clientX/this.clientWidth,i=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,i=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),i=Math.min(Math.max(i,0),1),{tiltX:(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),tiltY:(this.reverse*(i*this.settings.max*2-this.settings.max)).toFixed(2),percentageX:100*t,percentageY:100*i,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}}updateElementPosition(){let t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(){let t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${t.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=""+t.percentageY*this.settings["max-glare"]/100),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="",this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(t){let i={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},n={};for(var r in i)if(r in t)n[r]=t[r];else if(this.element.hasAttribute("data-tilt-"+r)){let c=this.element.getAttribute("data-tilt-"+r);try{n[r]=JSON.parse(c)}catch{n[r]=c}}else n[r]=i[r];return n}static init(t,i){t instanceof Node&&(t=[t]),t instanceof NodeList&&(t=[].slice.call(t)),t instanceof Array&&t.forEach(n=>{"vanillaTilt"in n||(n.vanillaTilt=new u(n,i))})}}return typeof document<"u"&&(window.VanillaTilt=u,u.init(document.querySelectorAll("[data-tilt]"))),u}();