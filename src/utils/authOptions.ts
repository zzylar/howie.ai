import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const bcrypt = require("bcryptjs");

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const storedUsername = process.env.PUBLIC_USER;
        const storedHashedPassword = process.env.PASSWORD;
        console.log(storedUsername, storedHashedPassword)
        // const plainPassword = "HS_chatbot2023!";
        if (
          credentials?.username === storedUsername &&
          (await bcrypt.compare(credentials?.password, storedHashedPassword))
        ) {
          return {
            id: "1",
            username: storedUsername,
          };
        } else {
          return null;
        }
      },
    }),
  ],
};
