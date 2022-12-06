import { RequestHandler } from 'express';

export type ErrorType = {
    log: string;
    status: number;
    message: { err: string };
  };