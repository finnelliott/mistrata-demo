import { use } from 'react'
import { Business, HeaderNavigation as HeaderNavigationType } from '../../payload-types';
import HeaderNavigationLayout from './HeaderNavigationLayout';

const HeaderNavigation = () => {

    const data = use(fetch(`${""}/api/globals/header-navigation`).then(res => res.json()).then(data => data as HeaderNavigationType))
    const business = use(fetch(`${""}/api/globals/business`).then(res => res.json()).then(data => data as Business))

    return (
        <HeaderNavigationLayout data={data} business={business} />
  )
}

export default HeaderNavigation