import greyLoader from '../../img/greyLoader.gif'
import blueLoader from '../../img/blueLoader.gif'
import './Loader.css'

type LoaderProps = {
    color: 'grey' | 'blue'
}

export default function Loader({ color }: LoaderProps){
    if (color == "grey"){
        return (
            <img className='loader' src={greyLoader} />
        )
    } else {
        return (
            <img className='loader' src={blueLoader} />
        )
    }
}