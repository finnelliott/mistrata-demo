import { use } from 'react'
import { FooterNavigation as FooterNavigationType } from '../../payload-types';
import FooterNavigationLayout from './FooterNavigationLayout';

const FooterNavigation = () => {

    const data = use(fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/footer-navigation`).then(res => res.json()).then(data => data as FooterNavigationType))

    return (
        <div><FooterNavigationLayout data={data} /></div>
  )
}

export default FooterNavigation