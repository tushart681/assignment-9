import { useLoaderData } from 'react-router-dom';
import Structure from './Structure';

const Statics = () => {
    const {data} = useLoaderData()
    console.log(data);
    return (
        <div>
            <Structure data={data}/>
        </div>
    );
};

export default Statics;