# Short Response Questions

Answer each of these questions completely but concisely. Use the proper technical terminology. You may refer to the [Marcy Lab School Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) or Google but do NOT copy and paste definitions or explanations verbatim.

You can earn up to 6 points for each response (3 points for writing quality, 3 points for technical content).

Before submitting your responses, use a spell checker / AI to ensure that you have no grammar or spelling mistakes.

## Question 1: Asynchronous Code

Functions like `fetch()` are "asynchronous". Explain what that means and why it is so important to be able to execute code asynchronously?

**Your Answer:**

- `fetch()` is an asynchronous function which describes a function that starts a process that takes a certain amount of time to execute, but does not prevent code following that function from running.
- This is important because while code runs top to bottom in JavaScript and needs to finish executing one line before the next, calling `fetch()` and then a synchronous function _after_ allows `fetch()` to keep processing in the background while said function runs. Using asynchronous functions allows a program to keep running _while_ processes that might take a while run at the same time as the rest of the program.

## Question 2: GET vs. POST

What is the difference between a `GET` request and a `POST` request? Provide examples in real world applications where each might be used under the hood?

**Your Answer:**

- A `GET` request describes a request that is asking for data from an API. An example of this in the real world is social media sites, where the websites first load the surrounding elements, while the site loads posts on to the page. The page makes a request to receive said posts before having them appear.
- A `POST` request describes a request to add data to an API. An example of this in the real world is making an account for a website. You input information such as an email and password and then that account information gets added to the website's information, which allows you to log in with said information.

## Question 3: What is Vite and Why Use It?

What is Vite? What problem does it solve? And are there alternatives?

**Your Answer:**

- Vite is a **development server** that simulates using the `https://` protocol that deployed websites use, allowing you to see your webpage in the browser and any changes that are made live.
- The problem it solves is that without Vite, API calls are unable to be made due to a **CORS** (Cross-Origin Resource Sharing) error. This is because loading local files on a browser uses the `file://` protocol, which cannot fetch third-party APIs.
- The alternative is using the Five Server VS Code extension, which does not simulate the `https://` protocol.
