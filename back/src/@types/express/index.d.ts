declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        isAdm: boolean;
      };
      foundUser: object;
    }
  }
}

export {};
