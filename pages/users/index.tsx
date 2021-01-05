import { useRouter } from "next/router";
import fire from "../../config/fire-config";
import { NextPage } from 'next'

interface Props {
  userAgent: string;
}

const User: NextPage<Props> = ({ userAgent }) => (
  <main>Your user agent: {userAgent}</main>
)

User.getInitialProps = async ({req}) => {
  const users = await fire.firestore().collection('users').get();
  // console.log('users', users.docs);
  fire.firestore().collection('users').add({testing: 'string'});
  const userAgent = 'testing'
  return { userAgent }
}


export default User