# DevStack

DevStack is a simple React project where users can explore different technologies and create their own development stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Icons
- React Toastify

## Features

- Users can explore different technologies.
- Users can add and remove technologies from their stack.
- Users can remove all selected technologies at once.

## Question And Answer

1.What is JSX, and why is it used in React?
- ans:Jsx is a HTML like code. It is use for making Ui in React.

2.What is the difference between props and state?
- ans: Props is use to pass data parent to child. State is use to store and change data.

3.What does the useState hook do, and where did you use it in this project?
- ans: UseState is use for manage data. i use it for selected technology in my project.

4.What does the useEffect hook do, and why did you need it to load the JSON data?
- ans: UseEffect is use for side. It can use to load Json data after component render.

5. Why does every item in a .map() list need a unique key prop?
- ans: Key help React to index every item and update them corectly.

6.What is conditional rendering? Show one place you used it (example: the empty stack message).
- ans: Conditional rendering mean showing ui by condition. i use it for showing empty stack message.

7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- ans: parent send data by props. chiald can send data back by calling a function from props.