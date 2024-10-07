import axios from "axios";

class StudentPanelServices{
    applyPass(link,e,config){
        return axios.post(link,e,config);
    }
    
};
export default new StudentPanelServices();