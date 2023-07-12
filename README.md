# faq_card
FAQ accordion card with javascript

This is a solution to the FAQ accordion card challenge on Frontend Mentor(https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). 

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot


### Links

- Solution URL: (https://github.com/Arkadiusz-coder/faq_card/tree/main)
- Live Site URL:(https://arkadiusz-coder.github.io/faq_card/)

## My process

I have partialy failed with that project. It took me about four times longer than I planned and I did not finished it properly. I did succeed with hover states and with hide/show answer featcher. I could not figure out how to make pictures on full screen mode visible, in the way anables to display three pictures, one over the other. I have tried every option I know, I even used chatGPT, but I didn't find solution to that problem. Instead of this I display mobile version of the picture. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

The Frontend Mentor's sugestion is to try build the page only with CSS, instead of JS, but I wanned to learn the last one so I used JS where I could. I learned some of JS logic, including how to rotate "arrows" to show an answer.
```````JS
questions.forEach(q => {
      q.classList.remove('active');
      q.querySelector('.question').style.fontWeight = 'normal';
      q.querySelector('.arrow-img').style.transform = 'rotate(0)';
`````````````
I aslo spend a lot of time checking many configurations and dependensies between image position and different form of sizes (px, em, rem, v), so I understand it much better. 

### Continued development

I still have a lot to learn about CSS. It seem to be easy to change picture visibility with media="(min-width:)". I doesn't work this time.


