import { create } from 'apisauce';
import { REQ_RES_ENDPOINT } from 'src/const';

const ReqresIn = create({
  baseURL: REQ_RES_ENDPOINT
});

export { ReqresIn };
