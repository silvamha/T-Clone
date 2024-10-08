import { tweetsData } from "./data.js";

for (let tweet of tweetsData) {
  for (let tweetObeject in tweet) {
    console.log(tweetObeject);
  }
  console.log(tweet);
}
