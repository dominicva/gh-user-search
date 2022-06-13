const cleanUserMetaData = user => {
  const userMetaData = {
    location: user.location || null,
    blog: user.blog || null,
    twitterUsername: user.twitter_username || null,
    company: user.company || null,
  };

  const { location, blog, twitterUsername, company } = userMetaData;

  return {
    location,
    blog,
    twitterUsername,
    company,
  };
};

export default cleanUserMetaData;
