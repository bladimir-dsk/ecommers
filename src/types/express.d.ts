// src/types/express.d.ts

declare namespace Express {
    export interface Request {
      file: Multer.File;
      files: { [fieldname: string]: Multer.File[] } | Multer.File[];
    }
  }
  