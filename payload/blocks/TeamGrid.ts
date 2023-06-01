import { Block } from 'payload/types';
import LinkBlock from './Link';

const TeamGridBlock: Block = {
  slug: 'team-grid',
  imageURL: '/components/team-grid.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
  labels: {
    singular: 'Team Grid',
    plural: 'Team Grids',
  },
  fields: [
  ]
};

export default TeamGridBlock;