import { use } from 'react'
import { Business, FooterNavigation as FooterNavigationType } from '../../payload-types';
import FooterNavigationLayout from './FooterNavigationLayout';

const FooterNavigation = () => {

    const data = use(fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/footer-navigation`).then(res => res.json()).then(data => data as FooterNavigationType))
    const business = use(fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/business`).then(res => res.json()).then(data => data as Business))

    return (
        <div><FooterNavigationLayout data={data} business={business} /></div>
  )
}

export default FooterNavigation