import { use } from 'react'
import { Business, HeaderNavigation as HeaderNavigationType } from '../../payload-types';
import HeaderNavigationLayout from './HeaderNavigationLayout';
import getPayloadClient from '../../payload/payloadClient';

const HeaderNavigation = async () => {
  const payload = await getPayloadClient();

  const data = await payload.findGlobal({
    slug: 'header-navigation',
  });
  const business = await payload.findGlobal({
    slug: 'business',
  });

  return (
    <HeaderNavigationLayout data={data} business={business} />
  )
}

export default HeaderNavigation