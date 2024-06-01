
const config = {
    appName: "LearnWell",
    appDescription:
      "A educational video player app that allows users to upload and watch educational videos.",
    // REQUIRED: The default user_id for the app. All API requests will use this user_id if not overwritten.
    // All videos uploaded will be associated with this user_id.
    // When videos are retrieved, the app will retrieve videos associated with this user_id.
    user_id: "aram_dovlatyan",
    // https://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=aram_dovlatyan'
    base_videos_api: "https://take-home-assessment-423502.uc.r.appspot.com/api/videos",
}

export default config;