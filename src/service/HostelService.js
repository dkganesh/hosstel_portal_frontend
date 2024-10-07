import axios from "axios";
import { SERVER_URL } from "./AuthenticationServices";

export const ADMIN_BASE_URL=SERVER_URL+"/admin"
class HostelService{
    addRoomService(link,e,config){
       return axios.post(link,e,config);
    }
    addStaff(link,e,config){
        return axios.post(link,e,config);
    }
    getStaff(link,config){
        return axios.get(link,config);
    }
    updateStaff(link,e,config){
        return axios.put(link,e,config);
    }
    getStudentsOfBlock(link,config){
        return axios.get(link,config);
    }

}
export default new HostelService();