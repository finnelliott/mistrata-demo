import { use } from 'react'
import { HeaderNavigation as HeaderNavigationType } from '../../payload-types';
import HeaderNavigationLayout from './HeaderNavigationLayout';

const HeaderNavigation = () => {

    const data = use(fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/header-navigation`).then(res => res.json()).then(data => data as HeaderNavigationType))

    return (
        <div><HeaderNavigationLayout data={data} /></div>
  )
}

export default HeaderNavigation