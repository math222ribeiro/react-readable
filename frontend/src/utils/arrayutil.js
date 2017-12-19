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

export function filterPostsBy(category, posts) {
  if (category === "all") return posts;

  return posts.filter((post) => post.category === category);
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}