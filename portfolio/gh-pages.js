import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/iAniket23/iAniket23.github.io.git', // Update to point to your repository
    user: {
      name: 'iAniket23', // update to use your name
      email: 'ianiket23@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);