This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies:

```bash
npm install
```

then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Finally, open [http://localhost:3000](http://localhost:3000) with your browser to see the application.


## Educational Video Player
LearnWell is an educational video platform where users can create, comment on, and watch educational videos. The platform is designed with a modern and sleek user interface and provides a seamless and engaging experience for users.

This is a [showcase project from 10fold](https://app.10foldhiring.com/showcase/1). The project is a web application that allows users to watch educational videos. The application is built with Next.js, TypeScript, and Tailwind CSS. The application is responsive and works on all devices. 

## Features
- **Video Grid**: Display a grid of videos fetched from a FastAPI server.
- **Video Details**: View details of a video, including a custom video player and comments section.
- **Video Upload**: Upload new videos with title, description, and URL.
- **Comments**: Comment on videos and view comments from other users.
- **Video Player**: HTML5 video player with playback controls.

## An overview of the solution.
- Home page with a list of videos to watch. The videos are ones uploaded from the user defined in the `config.ts` file.
- Video player page with a video player to watch the video. The video player has a play/pause button, a volume control, a progress bar, and a fullscreen button.
- The video player is responsive and works on all devices.
- Videos have comments that users can read and add new comments.
- Users can also upload new videos by clicking the "Upload Video" button on the home page and filling out the required fields.

### High-level Techincal Design Points
- The application is built with Next.js, TypeScript, and Tailwind CSS. It uses the Next.js app router to navigate between pages.
- Server Actions are defined in the `actions` folder. The actions are responsible for fetching the videos, uploading a video, and adding a comment.
  - All UI components that require interaction with the FastAPI server will use these server actions. 
  - Under the hood, when server actions are invoked, Next.js sends a `POST` request to an internally generated API endpoint. The code that runs on the API endpoint ends up interacting with the FastAPI server.
- `ui-components` folder contains all the components used in the application. The components are reusable and can be used in other parts of the application. They are a mix of client and server components.
- The root `page.tsx` in the app folder is the main page of the application. It fetches the videos and renders the home page for the specified user in the `config.ts` file.
- The `(routes)` folder contains the page(s) of the application. In here, there is a `video` folder that designates the video player page and corresponds to the url `/video/`. However, in the `video` folder we have a dynamic route `[id].tsx` that allows us to view a specific video by its id. Visiting `/video` will not work as it is not a valid route and will throw a 404.

## Usage

### Home Page (Video Grid)
- Displays a grid of videos for a specified user (defined in `config.ts`).
- Each video card shows the video title, uploader, upload time, and number of comments.
- Clicking a video card navigates to the video details page.

### Video Details Page
- Displays video player and video metadata.
- Shows comments section where users can view and add comments.
- Custom video player supports playback controls including speed and volume adjustments.

### Upload Video
- Modal form to upload new videos.
- Requires title, description, and URL (hosted file like .mp4).
- Integrates with the FastAPI POST endpoint to create new videos.

## Components

### `Header.tsx`
- Contains the header layout with search bar(*not functional*) and upload button.
- Handles modal state for video upload.

### `GridComponent.tsx`
- Fetches and displays a grid of video cards.
- Uses the `fetchVideos` action to get video data.

### `VideoCard.tsx`
- Displays individual video card with video metadata.
- Uses `Link` from Next.js for navigation.

### `VideoPlayer.tsx`
- HTML5 video player component.
- Fetches and displays video details using the `fetchSingleVideo` action.

### `CommentSection.tsx`
- Displays comments for a video and provides a form to add new comments.
- Uses the `fetchComments` and `addComment` actions.

## Actions

### `fetchVideos.ts`
- Fetches all videos uploaded by the user `user_id` in the `config.ts` file from the FastAPI server.

### `fetchSingleVideo.ts`
- Fetches single video details from the FastAPI server.

### `fetchComments.ts`
- Fetches comments for a specific video.

### `addVideo.ts`
- Adds a new video to the FastAPI server.

### `addComment.ts`
- Adds a new comment to a video on the FastAPI server.


## Instructions on how to use the platform.
- Open [http://localhost:3000](http://localhost:3000) to view the application.
- Click on a video to watch it. You can also leave a comment on the video.
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


## Additional Information

For more details on the API endpoints and their usage, please refer to the [API Documentation](https://take-home-assessment-423502.uc.r.appspot.com/docs).

---

Feel free to reach out if you have any questions or need further assistance.

---
