import NextAuth from "next-auth"
import FacebookProvider from 'next-auth/providers'

export default NextAuth({
    providers: [
      Providers.Facebook({
        clientId: '1200486314265115',
        clientSecret: '34cd1da00d0857a8df6380a24478e49a',
      }),
    ],
  });