import axios from 'axios';
import commonErrorInterceptor from './interceptors/commonErrorInterceptor';
import tokenInterceptor from './interceptors/tokenInterceptor';
import accessInterceptor from './interceptors/accessInterceptor';

const reqInstance = axios.create();
reqInstance.interceptors.request.use(tokenInterceptor);
reqInstance.interceptors.response.use(accessInterceptor);
reqInstance.interceptors.response.use(commonErrorInterceptor);

export default reqInstance;
