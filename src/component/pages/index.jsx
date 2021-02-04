import React,{useEffect} from 'react'
import LeftSide from './leftSide'
import Bodys from './body'
import { TransverseLoading } from 'react-loadingg'
const Index = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    useEffect(() => {
        setTimeout(() => {
          setIsLoaded(true);

        }, 3000);
      }, [isLoaded]);
    return (
        <div>
            {isLoaded === true ?
            <div className="row clearfix" style={{margin:'0',padding:"0"}}>
        <div className="col-md-3 column wel"style={{margin:'0',padding:"0"}}>
<LeftSide/>
        </div>
        <div className=" col-md-9 column"style={{margin:'0',padding:"0"}}>
        <Bodys />
        </div>
            </div>
            :
            <div style=        {{zIndex:999999}}>
            <TransverseLoading />
             </div>
 }
        </div>
    )
}

export default Index
