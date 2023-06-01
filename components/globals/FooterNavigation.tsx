import { use } from 'react'
import { Business, FooterNavigation as FooterNavigationType } from '../../payload-types';
import FooterNavigationLayout from './FooterNavigationLayout';
import getPayloadClient from '../../payload/payloadClient';

const FooterNavigation = async () => {
  const payload = await getPayloadClient();

  const data = await payload.find({
    global: 'footer-navigation',
  });
  const business = await payload.find({
    global: 'business',
  });
  
    return (
        <div><FooterNavigationLayout data={data} business={business} /></div>
  )
}

export default FooterNavigation