# faq_card
FAQ card with javascript

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I have failed with that project. It took me about three times as long as I plnned and I did not finished it properly. I did succeed with hover states and with hide/show answer featcher. I could not figure out how to make pictures onm full screen mode visible. I have tryied every option I know, I even used chatGPT, but I didn't find solution to that problem.

Experimenting with pictures visibility I ended up with .card div too heigh so the distance from FAQ element and the picture on mobile mode is too big. 

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

### Continued development

I still have a lot to learn about CSS. It seem to be easy to change picture visibility with media="(min-width:)". I doesn't work this time.


