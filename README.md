This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Educational Video Player
This is a [showcase project from 10fold](https://app.10foldhiring.com/showcase/1). The project is a web application that allows users to watch educational videos. The application is built with Next.js, TypeScript, and Tailwind CSS. The application is responsive and works on all devices.

## An overview of your solution and its features.
- Home page with a list of videos to watch. The videos are ones uploaded from the user defined in the `config.ts` file.
- Video player page with a video player to watch the video. The video player has a play/pause button, a volume control, a progress bar, and a fullscreen button.
- The video player is responsive and works on all devices.
- Videos have comments that users can read and add new comments.
- Users can also upload new videos by clicking the "Upload Video" button on the home page and filling out the required fields.

### Techincal Design Details
- The application is built with Next.js, TypeScript, and Tailwind CSS. It uses the Next.js app router to navigate between pages.
- Server Actions are defined in the `actions` folder. The actions are responsible for fetching the videos, uploading a video, and adding a comment.
  - All UI components that require interaction with the FastAPI server will use these server actions. 
  - Under the hood, when server actions are invoked, Next.js sends a `POST` request to an internally generated API endpoint. The code that runs on the API endpoint ends up interacting with the FastAPI server.
- `ui-components` folder contains all the components used in the application. The components are reusable and can be used in other parts of the application. They are a mix of client and server components.
- The root `page.tsx` in the app folder is the main page of the application. It fetches the videos and renders the home page for the specified user in the `config.ts` file.
- The `(routes)` folder contains the page(s) of the application. In here, there is a `video` folder that designates the video player page and corresponds to the url `/video/`. However, in the `video` folder we have a dynamic route `[id].tsx` that allows us to view a specific video by its id. Visiting `/video` will not work as it is not a valid route and will throw a 404.

## Instructions on how to build and run the application on the web.
- Clone the repository.
- Run `npm install` to install the dependencies.
- Run `npm run dev` to start the development server.
- Open [http://localhost:3000](http://localhost:3000) to view the application.
- Click on a video to watch it.
- Click on the "Upload Video" button to upload a new video.
- Fill out the required fields and click the "Upload" button to upload the video.
- Click on the logo "LearnWell" to go back to the home page.
- You can change the hardcoded user in the `config.ts` file to see different user's videos.

## Screenshots of the platform.

### Home page
![Home Page](./screenshots/HomePage.png?raw=true "Home Page")

### Video player page
![Video Player Page](./screenshots/VideoPlayerPage2.png?raw=true "Video Player Page")

### Upload video page
![Upload Video Page](./screenshots/UploadForm.png?raw=true "Upload Video Page")


## Any other necessary information to test the application.

