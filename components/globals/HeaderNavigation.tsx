import { use } from 'react'
import { Business, HeaderNavigation as HeaderNavigationType } from '../../payload-types';
import HeaderNavigationLayout from './HeaderNavigationLayout';

const HeaderNavigation = () => {

    const data = use(fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/header-navigation`).then(res => res.json()).then(data => data as HeaderNavigationType))
    const business = use(fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/business`).then(res => res.json()).then(data => data as Business))

    return (
        <div><HeaderNavigationLayout data={data} business={business} /></div>
  )
}

export default HeaderNavigation