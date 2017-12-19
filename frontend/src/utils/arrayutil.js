export function sortPostBy(type, posts) {
  switch (type) {
    case "newest":
      return posts.sort((a, b) => a.timestamp - b.timestamp);
    case "oldest":
      return posts.sort((a, b) => b.timestamp - a.timestamp);
    case "highestVote":
      return posts.sort((a, b) => b.voteScore - a.voteScore);
    case "lowestVote":
      return posts.sort((a, b) => a.voteScore - b.voteScore);
  }
}