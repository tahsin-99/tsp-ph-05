Questions:
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answers:

 #1.
 getElementById calls the 'Id' tag, getElementsByClassName calls the 'Class' tag,querySelector calls the 
the first element but  querySelectorAll calls the all element of same class name.

#2.
const newElement = document.creatElement('p')
newElement.innerText='Hlw Js'
document.body.appendChild(newElement)

#3.
Event bubbling means when an event is triggered on a child element, it automatically goes to its  parent elements and then to its document root.

a.The event fires on the target element first.

b.Then it goes to its parent, then grandparent, and so on.

c.At each level, if an event listener is present, it will be activated unless stopped.
                    
#4.
Event Delegation is a technique where a single event listener is attached to a parent element to handle events on its child elements.If we add child 
later it will work properly. We need not adding separate child each time.It delegate the childrent to its parent.

Benifits:
a.We can run it in one even listener instead of many.
b.We can handle elements added later via JavaScript.
c.It will be a cleaner Code.


#5.
a.preventDefault() stops the browser’s default action
<a href="https://hlw.com" id="link">Click me</a>


document.getElementById('link').addEventListener('click', function(e) {
  e.preventDefault(); 
  console.log("Link click prevented!");
});

b.stopPropagation() stops the event from bubbling up to parent elements.


<div id="parent">
  <button id="child">Click Me</button>
</div>
document.getElementById('child').addEventListener('click', function(e) {
  e.stopPropagation();
  console.log("Button clicked only");
});
