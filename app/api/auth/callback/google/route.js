import axios from 'axios';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../[...nextauth]/route';
import APP_CONFIG from '@/config';
export async function GET(request) {
  try {
    console.log('Starting GET handler');

    // Get the session and log it for debugging
    const session = await getServerSession({ req: request, options: authOptions });
    console.log('Session retrieved:', session);

    if (!session ) {
      console.error('Session or access token not found');
      return new Response('Unauthorized', { status: 401 });
    }

    // const accessToken = session.accessToken;

    // Make sure the email exists in the session object
    if (!session.user || !session.user.email) {
      console.error('Email not found in session');
      return new Response('Unauthorized', { status: 401 });
    }

    const email = session.user.email;

    // Log the access token and email
    // console.log('Access Token:', accessToken);
    console.log('Email:', email);

    const response = await axios.post(`${APP_CONFIG.BACKEND_URL}/signupByGoogle`, {
      email: email,
      store_id: generateStoreId(),
      password: "abc"
    }, {
      // headers: {
      //   Authorization: `Bearer ${accessToken}`,
      // },
    });

    // const { customToken } = response.data;
    const queryString = new URLSearchParams({
      token: response.data.token,
      user: response.data.user
  }).toString();
    // Log the customToken for debugging
    // console.log('Custom Token:', customToken);

    return Response.redirect(`${APP_CONFIG.REDIRECT_URL_SUCCESS}/?${queryString}`);
  } catch (error) {
    console.error('Error fetching token:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

function generateStoreId() {
  console.log("generated is")
  const randomNumber = Math.floor(Math.random() * 9000000) + 1000000;
  const storeId = `store_${randomNumber}`;
  return storeId;
}
