// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const greeting = (req, res) => {
  res.status(200).json({ name: "Mickey Facts" });
};

export default greeting;
