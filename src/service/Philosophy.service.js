import axios from 'axios';

const PhilosophyService = {};

PhilosophyService.List = async  () => {
    let res = await axios.get('http://localhost:3001/books?kategorija=Filozofija');
    
    return res.data;
}
export default  PhilosophyService;