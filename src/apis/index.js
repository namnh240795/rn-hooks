import { create } from 'apisauce';
import { REQ_RES_ENDPOINT, END_POINT } from 'src/const';

const ReqresIn = create({
  baseURL: REQ_RES_ENDPOINT
});

const SuperIdApis = create({
  baseURL: END_POINT
});

export { ReqresIn, SuperIdApis };
