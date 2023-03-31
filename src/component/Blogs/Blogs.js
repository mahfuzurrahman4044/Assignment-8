import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-5'>
            <h2>
                What is the difference between props and state in React?
            </h2>
            <p>
                props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).
            </p>
            <h2>
                How does useState work?
            </h2>
            <p>
                useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
            </p>
            <h2>
                What does useEffect do other than load data?
            </h2>
            <p>
                After rendering finishes, useEffect will check the list of dependency values against the values from the last render, and will call your effect function if any one of them has changed.
            </p>
            <h2>
                How does react work?
            </h2>
            <p>
                React divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.
            </p>
        </div>
    );
};

export default Blogs;