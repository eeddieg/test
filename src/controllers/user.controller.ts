import { Request, RequestHandler, Response } from "express";
// @ts-ignore
export const getTeamById: RequestHandler = (req: IGetTeamReq, res: Response) => {
  const team = USERS.find((user) => user.id === +req.params.id && team.isActive);
  res.send(user);
};