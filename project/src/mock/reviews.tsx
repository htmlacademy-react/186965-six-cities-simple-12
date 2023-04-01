import { Reviews } from '../types/review';
import { IMAGE_START_URL } from './offers';

export const reviews: Reviews = [
  {
    id: 1,
    userImage: `${IMAGE_START_URL}avatar-max.jpg`,
    userName: 'Penny',
    rating: 5,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'April 2019',
  },
  {
    id: 2,
    userImage: `${IMAGE_START_URL}avatar-max.jpg`,
    userName: 'Sheldon',
    rating: 4.1,
    text: 'Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.”',
    date: 'April 2019',
  },
  {
    id: 3,
    userImage: `${IMAGE_START_URL}avatar-max.jpg`,
    userName: 'Leonard',
    rating: 4.5,
    text: 'I am the king of the nerds',
    date: 'April 2019',
  },
  {
    id: 4,
    userImage: `${IMAGE_START_URL}avatar-max.jpg`,
    userName: 'Howard',
    rating: 4.3,
    text: 'That is a good point. But I didn’t marry you for good points. I married you to blindly support me no matter how ridiculous I’m being.',
    date: 'April 2019',
  },
  {
    id: 5,
    userImage: `${IMAGE_START_URL}avatar-max.jpg`,
    userName: 'Raj',
    rating: 4.8,
    text: 'I haven’t cried this hard since Toy Story 3.”',
    date: 'April 2019',
  },
  {
    id: 6,
    userImage: `${IMAGE_START_URL}avatar-max.jpg`,
    userName: 'Amy',
    rating: 4.5,
    text: 'As my mom used to say, ‘When you’re doing a puzzle, it’s like you’ve got a thousand friends.’ She was full of fun lies like that',
    date: 'April 2019',
  },
  {
    id: 6,
    userImage: `${IMAGE_START_URL}avatar-max.jpg`,
    userName: 'Bernadette',
    rating: 4.9,
    text: 'I told you you shouldn’t have espresso after dinner. I know the little cups make you feel big but it’s not worth it.',
    date: 'April 2019',
  }
];
