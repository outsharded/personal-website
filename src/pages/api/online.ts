import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `https://api.lanyard.rest/v1/users/798929927318536263`
  ).then((res) => res.json());

  res.status(200).json(response);
};

export default handler;
