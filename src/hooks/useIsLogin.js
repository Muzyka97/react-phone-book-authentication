import { useSelector, shallowEqual } from 'react-redux';

import { getIsLoggedIn } from '../redux/auth/authSelectors';

const useIsLogin = () => {
    const isLogin = useSelector(getIsLoggedIn, shallowEqual);

    return isLogin
};

export default useIsLogin;