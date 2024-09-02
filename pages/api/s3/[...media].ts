import {
  mediaHandlerConfig,
  createMediaHandler,
} from "next-tinacms-s3/dist/handlers";
import { TinaAuthJSOptions, AuthJsBackendAuthProvider } from "tinacms-authjs";
import databaseClient from "../../../tina/__generated__/databaseClient";
export const config = mediaHandlerConfig;

export default createMediaHandler(
  {
    config: {
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY || "",
        secretAccessKey: process.env.S3_SECRET_KEY || "",
      },
      region: process.env.S3_REGION,
      endpoint: process.env.S3_ENDPOINT,
    },
    bucket: process.env.S3_BUCKET || "",
    authorized: async (req, res) => {
      // if (process.env.NODE_ENV === 'development') {
      //   return true
      // }

      const isAuthorized = await AuthJsBackendAuthProvider({
        authOptions: TinaAuthJSOptions({
          databaseClient: databaseClient,
          secret: process.env.NEXTAUTH_SECRET!,
        }),
      }).isAuthorized(req, res);

      if (!isAuthorized) {
        return false;
      }

      return isAuthorized.isAuthorized;
    },
  },
  {
    cdnUrl: "https://s3.tebi.io/page-formation",
  }
);
