(function() {
   
   // Initialize keymaps for 26 letters
   var keymaps = {};
   var index = 65;
   "abcdefghijklmnopqrstuvwxyz".split('').map(function(item) {
      keymaps[item]= index++;
   })

   var onePageHeight = window.innerHeight;
   // The height of One line is 40px 
   var oneLineHeight = 40;
   var keystrokes = 0;

   function keyHandler(e) {
      // If the active element is not body, say 'input' element, we should do nothing
      if (document.activeElement.tagName !== 'BODY') return;
    
      keystrokes += 1;
      if (e.which !== keymaps['g']) keystrokes = 0;

      if (e.which === keymaps['f']) {
         // Downwards scroll one page 
         window.scrollBy(0, onePageHeight);
      } else if (e.which === keymaps['b']) {
         // Upwards scroll one page
         window.scrollBy(0, -onePageHeight);
      } else if (e.which === keymaps['j']) {
         // Downwards scroll one line
         window.scrollBy(0, oneLineHeight);
      } else if (e.which === keymaps['k']) {
         // Upwards scroll one line
         window.scrollBy(0, -oneLineHeight);
      } else if (e.which === keymaps['g']) {
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

   document.addEventListener('keydown', keyHandler, false);

})();


