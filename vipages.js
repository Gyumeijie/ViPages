(function(c, d){
   
   // Initialize keymaps for 26 letters
   var keymaps = {};
   var index = 65;
   "abcdefghijklmnopqrstuvwxyz".split('').map(function(item) {
      keymaps[item]= index++;
   })

   var onePageHeight = window.innerHeight;
   var keystrokes = 0;

   function keyHandler(e) {
      // If the active element is not body, say 'input' element, we should do nothing
      if (document.activeElement.tagName !== 'BODY') return;
    
      keystrokes += 1;
      if (e.which !== keymaps['g']) keystrokes = 0;

      if (e.which === keymaps['j']) {
         // Downwards scroll one page height
         window.scrollBy(0, onePageHeight);
      } else if ( e.which === keymaps['k']) {
         // Upwards scroll one page height
         window.scrollBy(0, -onePageHeight);
      } else if ( e.which === keymaps['g']) {
         // Scroll to bottom
         if (e.getModifierState('CapsLock')) {
            window.scrollTo(0, document.body.scrollHeight);
         } else {
            if (keystrokes === 2) {
               // If two 'g' was stroked continuously, then scroll to top
               keystrokes = 0;
               window.scrollTo(0, 0);
            }
         }
      } else if (e.which === keymaps['d']) {
         // Downwards move 1px
         window.scrollTo(0, window.scrollY+1);
      } else if (e.which === keymaps['u']) {
         // Upwardars move 1px
         window.scrollTo(0, window.scrollY-1);
      }
   }
   
   // Readjust page height when window resized
   window.onresize = function() {
      onePageHeight = window.innerHeight;
   };

   d.addEventListener('keydown', keyHandler, false);

})(chrome, document);


