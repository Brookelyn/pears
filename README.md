This project was started from [my default template project](https://github.com/Brookelyn/template), where I've taken the time to set up most of what's required for a modern FE application - although this is still a work in progress. This starts with a base set up using [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). 

I've additionally added Cypress for integration and e2e testing functionality, and React Query for data handling. I've used these as I have years of experience with both, if not necessarily in their most up to date forms - a polite description of the project I've been working on for the past year is 'legacy', despite my best efforts to bring it into the modern world.

Tailwind is handling all the styling and no changes have been made to the default settings, including the font. 

Thank you very much for taking the time to review it, and I look forward to discussing and extending it with you!

## Getting Started

You can get this project started locally by installing its dependencies and the running `npm run dev` from the root directory. You'll be able to see the result at [http://localhost:3000](http://localhost:3000).

With the development server running, you can see the single Cypress flow by running `npm run cypress`.

## Thoughts, in no particular order
I time-boxed this exercise and there are quite a few areas I'd like to tighten up - especially around test coverage. I firmly believe that good test coverage makes me able to build faster as I have almost immediate feedback when I break something, and prevents bugs from being put in front of our users.

- I've got some type errors, specifically around the unit test set up, that I'd resolve with more time.
- Based on my previous experience, I'm anticipating being asked to extend my solution by posting the answers from the collected questions to an API - so I've created an appropriate hook using React Query's `useMutation` that's currently just returning the answers provided. This means that if we need to hook it up to an API, we've already got things set up.
- More conversation around how the flow should work is needed. Should users be able to go back and change the answer to a previous question? Should the answers and current step persist even if the user reloads the page? Should they be able to click on the step indicator to move between steps?
- This could look much nicer! This is very bare bones styling and could use some love from a design colleague.
- I chose to push the user to a new route after starting their consultation, as this would potentially allow us in future to make the landing page more generic and use other signals - such as a URL param - to decide which consultation the user needed.
- I've tried to make everything as reusable and easily extendable as possible.

