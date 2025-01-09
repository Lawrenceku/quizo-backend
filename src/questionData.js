const quizData = [
    {
        category: 'HTML',
        question: 'What does HTML stand for?',
        options: [
            { answer: 'Hyper Text Markup Language', isCorrect: true },
            { answer: 'High Text Machine Language', isCorrect: false },
            { answer: 'Hyper Tool Markup Language', isCorrect: false },
            { answer: 'Hyperlinks and Text Markup Language', isCorrect: false },
        ],
    },
    {
        category: 'CSS',
        question: 'Which property is used to change the text color in CSS?',
        options: [
            { answer: 'color', isCorrect: true },
            { answer: 'font-color', isCorrect: false },
            { answer: 'text-color', isCorrect: false },
            { answer: 'background-color', isCorrect: false },
        ],
    },
    {
        category: 'JavaScript',
        question: 'Which method is used to add elements to the end of an array?',
        options: [
            { answer: 'push()', isCorrect: true },
            { answer: 'pop()', isCorrect: false },
            { answer: 'shift()', isCorrect: false },
            { answer: 'unshift()', isCorrect: false },
        ],
    },
    {
        category: 'HTML',
        question: 'Which tag is used to create a hyperlink?',
        options: [
            { answer: '<a>', isCorrect: true },
            { answer: '<link>', isCorrect: false },
            { answer: '<href>', isCorrect: false },
            { answer: '<nav>', isCorrect: false },
        ],
    },
    {
        category: 'CSS',
        question: 'Which CSS property controls the stacking order of elements?',
        options: [
            { answer: 'z-index', isCorrect: true },
            { answer: 'position', isCorrect: false },
            { answer: 'display', isCorrect: false },
            { answer: 'float', isCorrect: false },
        ],
    },
    {
        category: 'JavaScript',
        question: 'Which keyword is used to declare a constant in JavaScript?',
        options: [
            { answer: 'const', isCorrect: true },
            { answer: 'let', isCorrect: false },
            { answer: 'var', isCorrect: false },
            { answer: 'static', isCorrect: false },
        ],
    },
    {
        category: 'General',
        question: 'What is the full form of API?',
        options: [
            { answer: 'Application Programming Interface', isCorrect: true },
            { answer: 'Application Protocol Interface', isCorrect: false },
            { answer: 'Advanced Programming Interface', isCorrect: false },
            { answer: 'Application Program Input', isCorrect: false },
        ],
    },
    {
        category: 'HTML',
        question: 'Which attribute specifies the URL of an image in the <img> tag?',
        options: [
            { answer: 'src', isCorrect: true },
            { answer: 'href', isCorrect: false },
            { answer: 'link', isCorrect: false },
            { answer: 'path', isCorrect: false },
        ],
    },
    {
        category: 'CSS',
        question: 'Which unit is NOT relative in CSS?',
        options: [
            { answer: 'px', isCorrect: true },
            { answer: '%', isCorrect: false },
            { answer: 'em', isCorrect: false },
            { answer: 'rem', isCorrect: false },
        ],
    },
    {
        category: 'JavaScript',
        question: 'Which built-in method returns the character at a specified index in a string?',
        options: [
            { answer: 'charAt()', isCorrect: true },
            { answer: 'indexOf()', isCorrect: false },
            { answer: 'substring()', isCorrect: false },
            { answer: 'slice()', isCorrect: false },
        ],
    }
,
{
    category: 'HTML',
    question: 'Which tag is used to define an unordered list?',
    options: [
        { answer: '<ul>', isCorrect: true },
        { answer: '<ol>', isCorrect: false },
        { answer: '<li>', isCorrect: false },
        { answer: '<list>', isCorrect: false },
    ],
},
{
    category: 'CSS',
    question: 'Which property is used to change the background color?',
    options: [
        { answer: 'background-color', isCorrect: true },
        { answer: 'color', isCorrect: false },
        { answer: 'bgcolor', isCorrect: false },
        { answer: 'background', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to remove the last element from an array?',
    options: [
        { answer: 'pop()', isCorrect: true },
        { answer: 'push()', isCorrect: false },
        { answer: 'shift()', isCorrect: false },
        { answer: 'unshift()', isCorrect: false },
    ],
},
{
    category: 'HTML',
    question: 'Which tag is used to define a table row?',
    options: [
        { answer: '<tr>', isCorrect: true },
        { answer: '<td>', isCorrect: false },
        { answer: '<th>', isCorrect: false },
        { answer: '<table>', isCorrect: false },
    ],
},
{
    category: 'CSS',
    question: 'Which property is used to change the font size?',
    options: [
        { answer: 'font-size', isCorrect: true },
        { answer: 'text-size', isCorrect: false },
        { answer: 'font-style', isCorrect: false },
        { answer: 'text-style', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to convert a JSON string into a JavaScript object?',
    options: [
        { answer: 'JSON.parse()', isCorrect: true },
        { answer: 'JSON.stringify()', isCorrect: false },
        { answer: 'parseJSON()', isCorrect: false },
        { answer: 'convertJSON()', isCorrect: false },
    ],
},
{
    category: 'HTML',
    question: 'Which attribute is used to specify an alternate text for an image?',
    options: [
        { answer: 'alt', isCorrect: true },
        { answer: 'title', isCorrect: false },
        { answer: 'src', isCorrect: false },
        { answer: 'href', isCorrect: false },
    ],
},
{
    category: 'CSS',
    question: 'Which property is used to change the font family?',
    options: [
        { answer: 'font-family', isCorrect: true },
        { answer: 'font-style', isCorrect: false },
        { answer: 'font-weight', isCorrect: false },
        { answer: 'font-size', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to join two or more arrays?',
    options: [
        { answer: 'concat()', isCorrect: true },
        { answer: 'join()', isCorrect: false },
        { answer: 'merge()', isCorrect: false },
        { answer: 'append()', isCorrect: false },
    ],
},
{
    category: 'HTML',
    question: 'Which tag is used to define a table header?',
    options: [
        { answer: '<th>', isCorrect: true },
        { answer: '<tr>', isCorrect: false },
        { answer: '<td>', isCorrect: false },
        { answer: '<thead>', isCorrect: false },
    ],
},
{
    category: 'CSS',
    question: 'Which property is used to change the text alignment?',
    options: [
        { answer: 'text-align', isCorrect: true },
        { answer: 'align', isCorrect: false },
        { answer: 'text-align', isCorrect: false },
        { answer: 'align-text', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to find the index of an element in an array?',
    options: [
        { answer: 'indexOf()', isCorrect: true },
        { answer: 'findIndex()', isCorrect: false },
        { answer: 'search()', isCorrect: false },
        { answer: 'find()', isCorrect: false },
    ],
},
{
    category: 'HTML',
    question: 'Which tag is used to define a form?',
    options: [
        { answer: '<form>', isCorrect: true },
        { answer: '<input>', isCorrect: false },
        { answer: '<button>', isCorrect: false },
        { answer: '<fieldset>', isCorrect: false },
    ],
},
{
    category: 'CSS',
    question: 'Which property is used to change the border color?',
    options: [
        { answer: 'border-color', isCorrect: true },
        { answer: 'color', isCorrect: false },
        { answer: 'border-style', isCorrect: false },
        { answer: 'border-width', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to add one or more elements to the beginning of an array?',
    options: [
        { answer: 'unshift()', isCorrect: true },
        { answer: 'shift()', isCorrect: false },
        { answer: 'push()', isCorrect: false },
        { answer: 'pop()', isCorrect: false },
    ],
},
{
    category: 'HTML',
    question: 'Which tag is used to define a list item?',
    options: [
        { answer: '<li>', isCorrect: true },
        { answer: '<ul>', isCorrect: false },
        { answer: '<ol>', isCorrect: false },
        { answer: '<list>', isCorrect: false },
    ],
},
{
    category: 'CSS',
    question: 'Which property is used to change the text decoration?',
    options: [
        { answer: 'text-decoration', isCorrect: true },
        { answer: 'text-style', isCorrect: false },
        { answer: 'text-align', isCorrect: false },
        { answer: 'text-transform', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to remove the first element from an array?',
    options: [
        { answer: 'shift()', isCorrect: true },
        { answer: 'unshift()', isCorrect: false },
        { answer: 'pop()', isCorrect: false },
        { answer: 'push()', isCorrect: false },
    ],
},
{
    category: 'HTML',
    question: 'Which tag is used to define a division or section in an HTML document?',
    options: [
        { answer: '<div>', isCorrect: true },
        { answer: '<section>', isCorrect: false },
        { answer: '<article>', isCorrect: false },
        { answer: '<span>', isCorrect: false },
    ],
},
{
    category: 'CSS',
    question: 'Which property is used to change the width of an element?',
    options: [
        { answer: 'width', isCorrect: true },
        { answer: 'height', isCorrect: false },
        { answer: 'size', isCorrect: false },
        { answer: 'length', isCorrect: false },
    ],
}
,
{
    category: 'Data Structures',
    question: 'Which data structure uses LIFO (Last In First Out) principle?',
    options: [
        { answer: 'Stack', isCorrect: true },
        { answer: 'Queue', isCorrect: false },
        { answer: 'Linked List', isCorrect: false },
        { answer: 'Tree', isCorrect: false },
    ],
},
{
    category: 'Data Structures',
    question: 'Which data structure uses FIFO (First In First Out) principle?',
    options: [
        { answer: 'Queue', isCorrect: true },
        { answer: 'Stack', isCorrect: false },
        { answer: 'Array', isCorrect: false },
        { answer: 'Graph', isCorrect: false },
    ],
},
{
    category: 'Algorithms',
    question: 'Which algorithm is used to find the shortest path in a graph?',
    options: [
        { answer: 'Dijkstra\'s Algorithm', isCorrect: true },
        { answer: 'Prim\'s Algorithm', isCorrect: false },
        { answer: 'Kruskal\'s Algorithm', isCorrect: false },
        { answer: 'Bellman-Ford Algorithm', isCorrect: false },
    ],
},
{
    category: 'Algorithms',
    question: 'Which sorting algorithm has the best average case time complexity?',
    options: [
        { answer: 'Merge Sort', isCorrect: true },
        { answer: 'Bubble Sort', isCorrect: false },
        { answer: 'Insertion Sort', isCorrect: false },
        { answer: 'Selection Sort', isCorrect: false },
    ],
},
{
    category: 'Data Structures',
    question: 'Which data structure is used to implement recursion?',
    options: [
        { answer: 'Stack', isCorrect: true },
        { answer: 'Queue', isCorrect: false },
        { answer: 'Heap', isCorrect: false },
        { answer: 'Graph', isCorrect: false },
    ],
},
{
    category: 'Algorithms',
    question: 'Which algorithm is used for finding the minimum spanning tree in a graph?',
    options: [
        { answer: 'Kruskal\'s Algorithm', isCorrect: true },
        { answer: 'Dijkstra\'s Algorithm', isCorrect: false },
        { answer: 'Bellman-Ford Algorithm', isCorrect: false },
        { answer: 'Floyd-Warshall Algorithm', isCorrect: false },
    ],
},
{
    category: 'Data Structures',
    question: 'Which data structure is used to implement a priority queue?',
    options: [
        { answer: 'Heap', isCorrect: true },
        { answer: 'Stack', isCorrect: false },
        { answer: 'Queue', isCorrect: false },
        { answer: 'Linked List', isCorrect: false },
    ],
},
{
    category: 'Algorithms',
    question: 'Which algorithm is used for sorting an array in O(n log n) time complexity?',
    options: [
        { answer: 'Quick Sort', isCorrect: true },
        { answer: 'Bubble Sort', isCorrect: false },
        { answer: 'Insertion Sort', isCorrect: false },
        { answer: 'Selection Sort', isCorrect: false },
    ],
},
{
    category: 'Data Structures',
    question: 'Which data structure is used to implement a graph?',
    options: [
        { answer: 'Adjacency List', isCorrect: true },
        { answer: 'Stack', isCorrect: false },
        { answer: 'Queue', isCorrect: false },
        { answer: 'Heap', isCorrect: false },
    ],
},
{
    category: 'Algorithms',
    question: 'Which algorithm is used for finding the longest common subsequence?',
    options: [
        { answer: 'Dynamic Programming', isCorrect: true },
        { answer: 'Greedy Algorithm', isCorrect: false },
        { answer: 'Divide and Conquer', isCorrect: false },
        { answer: 'Backtracking', isCorrect: false },
    ],
}
,
{
    category: 'Networking',
    question: 'What does HTTP stand for?',
    options: [
        { answer: 'HyperText Transfer Protocol', isCorrect: true },
        { answer: 'HyperText Transmission Protocol', isCorrect: false },
        { answer: 'HyperText Transfer Program', isCorrect: false },
        { answer: 'HyperText Transmission Program', isCorrect: false },
    ],
},
{
    category: 'Networking',
    question: 'Which protocol is used to send email?',
    options: [
        { answer: 'SMTP', isCorrect: true },
        { answer: 'FTP', isCorrect: false },
        { answer: 'HTTP', isCorrect: false },
        { answer: 'SNMP', isCorrect: false },
    ],
},
{
    category: 'Networking',
    question: 'Which layer of the OSI model is responsible for routing?',
    options: [
        { answer: 'Network Layer', isCorrect: true },
        { answer: 'Data Link Layer', isCorrect: false },
        { answer: 'Transport Layer', isCorrect: false },
        { answer: 'Application Layer', isCorrect: false },
    ],
},
{
    category: 'Networking',
    question: 'What does DNS stand for?',
    options: [
        { answer: 'Domain Name System', isCorrect: true },
        { answer: 'Domain Name Service', isCorrect: false },
        { answer: 'Domain Network System', isCorrect: false },
        { answer: 'Domain Network Service', isCorrect: false },
    ],
},
{
    category: 'Networking',
    question: 'Which protocol is used to securely transfer files over the internet?',
    options: [
        { answer: 'SFTP', isCorrect: true },
        { answer: 'FTP', isCorrect: false },
        { answer: 'HTTP', isCorrect: false },
        { answer: 'SMTP', isCorrect: false },
    ],
}
,
{
    category: 'Backend',
    question: 'Which database is a NoSQL database?',
    options: [
        { answer: 'MongoDB', isCorrect: true },
        { answer: 'MySQL', isCorrect: false },
        { answer: 'PostgreSQL', isCorrect: false },
        { answer: 'SQLite', isCorrect: false },
    ],
},
{
    category: 'Backend',
    question: 'Which HTTP method is used to update a resource?',
    options: [
        { answer: 'PUT', isCorrect: true },
        { answer: 'GET', isCorrect: false },
        { answer: 'POST', isCorrect: false },
        { answer: 'DELETE', isCorrect: false },
    ],
},
{
    category: 'Backend',
    question: 'Which framework is used for building RESTful APIs in Node.js?',
    options: [
        { answer: 'Express.js', isCorrect: true },
        { answer: 'React.js', isCorrect: false },
        { answer: 'Angular', isCorrect: false },
        { answer: 'Vue.js', isCorrect: false },
    ],
},
{
    category: 'Backend',
    question: 'Which command is used to initialize a new Node.js project?',
    options: [
        { answer: 'npm init', isCorrect: true },
        { answer: 'npm start', isCorrect: false },
        { answer: 'npm install', isCorrect: false },
        { answer: 'npm run', isCorrect: false },
    ],
},
{
    category: 'Backend',
    question: 'Which tool is used for version control?',
    options: [
        { answer: 'Git', isCorrect: true },
        { answer: 'Docker', isCorrect: false },
        { answer: 'Jenkins', isCorrect: false },
        { answer: 'Kubernetes', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to convert a JavaScript object into a JSON string?',
    options: [
        { answer: 'JSON.stringify()', isCorrect: true },
        { answer: 'JSON.parse()', isCorrect: false },
        { answer: 'toJSON()', isCorrect: false },
        { answer: 'convertToJSON()', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which keyword is used to declare a variable in JavaScript?',
    options: [
        { answer: 'var', isCorrect: true },
        { answer: 'let', isCorrect: false },
        { answer: 'const', isCorrect: false },
        { answer: 'variable', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to remove whitespace from both ends of a string?',
    options: [
        { answer: 'trim()', isCorrect: true },
        { answer: 'strip()', isCorrect: false },
        { answer: 'cut()', isCorrect: false },
        { answer: 'slice()', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which operator is used to assign a value to a variable?',
    options: [
        { answer: '=', isCorrect: true },
        { answer: '==', isCorrect: false },
        { answer: '===', isCorrect: false },
        { answer: '=>', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to find the length of a string?',
    options: [
        { answer: 'length', isCorrect: true },
        { answer: 'size', isCorrect: false },
        { answer: 'count', isCorrect: false },
        { answer: 'index', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to create a new array with all elements that pass a test?',
    options: [
        { answer: 'filter()', isCorrect: true },
        { answer: 'map()', isCorrect: false },
        { answer: 'reduce()', isCorrect: false },
        { answer: 'forEach()', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to sort the elements of an array?',
    options: [
        { answer: 'sort()', isCorrect: true },
        { answer: 'order()', isCorrect: false },
        { answer: 'arrange()', isCorrect: false },
        { answer: 'sequence()', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to combine all elements of an array into a string?',
    options: [
        { answer: 'join()', isCorrect: true },
        { answer: 'concat()', isCorrect: false },
        { answer: 'merge()', isCorrect: false },
        { answer: 'append()', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to execute a function for each array element?',
    options: [
        { answer: 'forEach()', isCorrect: true },
        { answer: 'map()', isCorrect: false },
        { answer: 'reduce()', isCorrect: false },
        { answer: 'filter()', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to create a new array with the results of calling a function for every array element?',
    options: [
        { answer: 'map()', isCorrect: true },
        { answer: 'forEach()', isCorrect: false },
        { answer: 'filter()', isCorrect: false },
        { answer: 'reduce()', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to check if an array includes a certain value?',
    options: [
        { answer: 'includes()', isCorrect: true },
        { answer: 'contains()', isCorrect: false },
        { answer: 'has()', isCorrect: false },
        { answer: 'exists()', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to return the first element in an array that satisfies a provided testing function?',
    options: [
        { answer: 'find()', isCorrect: true },
        { answer: 'filter()', isCorrect: false },
        { answer: 'search()', isCorrect: false },
        { answer: 'locate()', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to return a new array with all sub-array elements concatenated into it?',
    options: [
        { answer: 'flat()', isCorrect: true },
        { answer: 'concat()', isCorrect: false },
        { answer: 'merge()', isCorrect: false },
        { answer: 'join()', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to test whether at least one element in the array passes the test implemented by the provided function?',
    options: [
        { answer: 'some()', isCorrect: true },
        { answer: 'every()', isCorrect: false },
        { answer: 'filter()', isCorrect: false },
        { answer: 'find()', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to test whether all elements in the array pass the test implemented by the provided function?',
    options: [
        { answer: 'every()', isCorrect: true },
        { answer: 'some()', isCorrect: false },
        { answer: 'filter()', isCorrect: false },
        { answer: 'find()', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to create a new array from an array-like or iterable object?',
    options: [
        { answer: 'Array.from()', isCorrect: true },
        { answer: 'Array.of()', isCorrect: false },
        { answer: 'Array.create()', isCorrect: false },
        { answer: 'Array.make()', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to fill all the elements in an array with a static value?',
    options: [
        { answer: 'fill()', isCorrect: true },
        { answer: 'set()', isCorrect: false },
        { answer: 'assign()', isCorrect: false },
        { answer: 'replace()', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to copy a portion of an array to another location in the same array?',
    options: [
        { answer: 'copyWithin()', isCorrect: true },
        { answer: 'copy()', isCorrect: false },
        { answer: 'move()', isCorrect: false },
        { answer: 'transfer()', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to reverse the order of the elements in an array?',
    options: [
        { answer: 'reverse()', isCorrect: true },
        { answer: 'invert()', isCorrect: false },
        { answer: 'flip()', isCorrect: false },
        { answer: 'turn()', isCorrect: false },
    ],
},
{
    category: 'JavaScript',
    question: 'Which method is used to return a shallow copy of a portion of an array into a new array object?',
    options: [
        { answer: 'slice()', isCorrect: true },
        { answer: 'splice()', isCorrect: false },
        { answer: 'cut()', isCorrect: false },
        { answer: 'divide()', isCorrect: false },
    ],
},
{
    category: 'TypeScript',
    question: 'Which keyword is used to define a type alias in TypeScript?',
    options: [
        { answer: 'type', isCorrect: true },
        { answer: 'alias', isCorrect: false },
        { answer: 'interface', isCorrect: false },
        { answer: 'typedef', isCorrect: false },
    ],
},
{
    category: 'TypeScript',
    question: 'Which keyword is used to define an interface in TypeScript?',
    options: [
        { answer: 'interface', isCorrect: true },
        { answer: 'type', isCorrect: false },
        { answer: 'class', isCorrect: false },
        { answer: 'struct', isCorrect: false },
    ],
},
{
    category: 'TypeScript',
    question: 'Which of the following is a valid way to declare a variable with a specific type in TypeScript?',
    options: [
        { answer: 'let x: number;', isCorrect: true },
        { answer: 'let x = number;', isCorrect: false },
        { answer: 'let x: Number;', isCorrect: false },
        { answer: 'let x = Number;', isCorrect: false },
    ],
},
{
    category: 'TypeScript',
    question: 'Which of the following is a valid way to define a function with typed parameters in TypeScript?',
    options: [
        { answer: 'function add(a: number, b: number): number', isCorrect: true },
        { answer: 'function add(a, b): number', isCorrect: false },
        { answer: 'function add(a: number, b): number', isCorrect: false },
        { answer: 'function add(a, b: number): number', isCorrect: false },
    ],
},
{
    category: 'TypeScript',
    question: 'Which of the following is a valid way to define a class in TypeScript?',
    options: [
        { answer: 'class MyClass { }', isCorrect: true },
        { answer: 'class MyClass() { }', isCorrect: false },
        { answer: 'class MyClass[] { }', isCorrect: false },
        { answer: 'class MyClass<> { }', isCorrect: false },
    ],
},
{
    category: 'TypeScript',
    question: 'Which of the following is a valid way to define a generic function in TypeScript?',
    options: [
        { answer: 'function identity<T>(arg: T): T { return arg; }', isCorrect: true },
        { answer: 'function identity<T>(arg: T) { return arg; }', isCorrect: false },
        { answer: 'function identity(arg: T): T { return arg; }', isCorrect: false },
        { answer: 'function identity<T>(arg): T { return arg; }', isCorrect: false },
    ],
},
{
    category: 'TypeScript',
    question: 'Which of the following is a valid way to define an enum in TypeScript?',
    options: [
        { answer: 'enum Color { Red, Green, Blue }', isCorrect: true },
        { answer: 'enum Color = { Red, Green, Blue }', isCorrect: false },
        { answer: 'enum Color: { Red, Green, Blue }', isCorrect: false },
        { answer: 'enum Color { Red: 1, Green: 2, Blue: 3 }', isCorrect: false },
    ],
},
{
    category: 'TypeScript',
    question: 'Which of the following is a valid way to define a tuple in TypeScript?',
    options: [
        { answer: 'let tuple: [number, string] = [1, "hello"];', isCorrect: true },
        { answer: 'let tuple: (number, string) = [1, "hello"];', isCorrect: false },
        { answer: 'let tuple: [number, string] = (1, "hello");', isCorrect: false },
        { answer: 'let tuple: (number, string) = (1, "hello");', isCorrect: false },
    ],
},
{
    category: 'TypeScript',
    question: 'Which of the following is a valid way to define a union type in TypeScript?',
    options: [
        { answer: 'let value: number | string;', isCorrect: true },
        { answer: 'let value: number || string;', isCorrect: false },
        { answer: 'let value: number && string;', isCorrect: false },
        { answer: 'let value: number & string;', isCorrect: false },
    ],
},
{
    category: 'TypeScript',
    question: 'Which of the following is a valid way to define an intersection type in TypeScript?',
    options: [
        { answer: 'type Person = Name & Age;', isCorrect: true },
        { answer: 'type Person = Name | Age;', isCorrect: false },
        { answer: 'type Person = Name && Age;', isCorrect: false },
        { answer: 'type Person = Name || Age;', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL statement is used to retrieve data from a database?',
    options: [
        { answer: 'SELECT', isCorrect: true },
        { answer: 'INSERT', isCorrect: false },
        { answer: 'UPDATE', isCorrect: false },
        { answer: 'DELETE', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL statement is used to insert new data into a database?',
    options: [
        { answer: 'INSERT', isCorrect: true },
        { answer: 'SELECT', isCorrect: false },
        { answer: 'UPDATE', isCorrect: false },
        { answer: 'DELETE', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL statement is used to update existing data in a database?',
    options: [
        { answer: 'UPDATE', isCorrect: true },
        { answer: 'SELECT', isCorrect: false },
        { answer: 'INSERT', isCorrect: false },
        { answer: 'DELETE', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL statement is used to delete data from a database?',
    options: [
        { answer: 'DELETE', isCorrect: true },
        { answer: 'SELECT', isCorrect: false },
        { answer: 'INSERT', isCorrect: false },
        { answer: 'UPDATE', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL clause is used to filter records?',
    options: [
        { answer: 'WHERE', isCorrect: true },
        { answer: 'ORDER BY', isCorrect: false },
        { answer: 'GROUP BY', isCorrect: false },
        { answer: 'HAVING', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL clause is used to sort the result set?',
    options: [
        { answer: 'ORDER BY', isCorrect: true },
        { answer: 'WHERE', isCorrect: false },
        { answer: 'GROUP BY', isCorrect: false },
        { answer: 'HAVING', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL clause is used to group rows that have the same values?',
    options: [
        { answer: 'GROUP BY', isCorrect: true },
        { answer: 'ORDER BY', isCorrect: false },
        { answer: 'WHERE', isCorrect: false },
        { answer: 'HAVING', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL function is used to count the number of rows?',
    options: [
        { answer: 'COUNT()', isCorrect: true },
        { answer: 'SUM()', isCorrect: false },
        { answer: 'AVG()', isCorrect: false },
        { answer: 'MAX()', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL function is used to calculate the average value?',
    options: [
        { answer: 'AVG()', isCorrect: true },
        { answer: 'SUM()', isCorrect: false },
        { answer: 'COUNT()', isCorrect: false },
        { answer: 'MAX()', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL function is used to calculate the sum of a numeric column?',
    options: [
        { answer: 'SUM()', isCorrect: true },
        { answer: 'AVG()', isCorrect: false },
        { answer: 'COUNT()', isCorrect: false },
        { answer: 'MAX()', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL function is used to find the highest value?',
    options: [
        { answer: 'MAX()', isCorrect: true },
        { answer: 'SUM()', isCorrect: false },
        { answer: 'COUNT()', isCorrect: false },
        { answer: 'AVG()', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL function is used to find the lowest value?',
    options: [
        { answer: 'MIN()', isCorrect: true },
        { answer: 'SUM()', isCorrect: false },
        { answer: 'COUNT()', isCorrect: false },
        { answer: 'AVG()', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL keyword is used to create a new table?',
    options: [
        { answer: 'CREATE TABLE', isCorrect: true },
        { answer: 'INSERT INTO', isCorrect: false },
        { answer: 'UPDATE TABLE', isCorrect: false },
        { answer: 'DELETE TABLE', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL keyword is used to add a column to an existing table?',
    options: [
        { answer: 'ALTER TABLE', isCorrect: true },
        { answer: 'ADD COLUMN', isCorrect: false },
        { answer: 'UPDATE TABLE', isCorrect: false },
        { answer: 'INSERT INTO', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL keyword is used to remove a column from an existing table?',
    options: [
        { answer: 'ALTER TABLE', isCorrect: true },
        { answer: 'DROP COLUMN', isCorrect: false },
        { answer: 'DELETE COLUMN', isCorrect: false },
        { answer: 'REMOVE COLUMN', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL keyword is used to remove a table from a database?',
    options: [
        { answer: 'DROP TABLE', isCorrect: true },
        { answer: 'DELETE TABLE', isCorrect: false },
        { answer: 'REMOVE TABLE', isCorrect: false },
        { answer: 'ALTER TABLE', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL keyword is used to create an index on a table?',
    options: [
        { answer: 'CREATE INDEX', isCorrect: true },
        { answer: 'ADD INDEX', isCorrect: false },
        { answer: 'UPDATE INDEX', isCorrect: false },
        { answer: 'INSERT INDEX', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL keyword is used to remove an index from a table?',
    options: [
        { answer: 'DROP INDEX', isCorrect: true },
        { answer: 'DELETE INDEX', isCorrect: false },
        { answer: 'REMOVE INDEX', isCorrect: false },
        { answer: 'ALTER INDEX', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL keyword is used to create a view?',
    options: [
        { answer: 'CREATE VIEW', isCorrect: true },
        { answer: 'ADD VIEW', isCorrect: false },
        { answer: 'UPDATE VIEW', isCorrect: false },
        { answer: 'INSERT VIEW', isCorrect: false },
    ],
},
{
    category: 'Databases',
    question: 'Which SQL keyword is used to remove a view?',
    options: [
        { answer: 'DROP VIEW', isCorrect: true },
        { answer: 'DELETE VIEW', isCorrect: false },
        { answer: 'REMOVE VIEW', isCorrect: false },
        { answer: 'ALTER VIEW', isCorrect: false },
    ],
}
];

module.exports = quizData;