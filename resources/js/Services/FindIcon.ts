import {IconName, IconPrefix} from '@fortawesome/fontawesome-common-types';
import {
  findIconDefinition,
  IconDefinition,
} from '@fortawesome/fontawesome-svg-core';

export default function FindIcon(iconString: string): IconDefinition {
  /* @ts-ignore */
  const icon: [IconPrefix, IconName] = iconString.split(' ');
  /* @ts-ignore */
  icon[1] = icon[1].replace('fa-', '');

  return findIconDefinition({
    prefix: icon[0],
    iconName: icon[1],
  });
}
