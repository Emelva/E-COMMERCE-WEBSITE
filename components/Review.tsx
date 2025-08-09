import { faCheckCircle, faStar, faStarHalf } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Review({name, review}){
    return (
        <div className="m-5 border lg:p-4 p-2 rounded-2xl">
            <div>
                <FontAwesomeIcon className="text-amber-600" icon={faStar} />
                <FontAwesomeIcon className="text-amber-600" icon={faStar} />
                <FontAwesomeIcon className="text-amber-600" icon={faStar} />
                <FontAwesomeIcon className="text-amber-600" icon={faStar} />
                <FontAwesomeIcon className="text-amber-600" icon={faStarHalf} />
            </div>
            <p className="font-bold my-2">{name} 
                <FontAwesomeIcon className="text-green-700" icon={faCheckCircle}/>
            </p>
            <p>"{review}"</p>
        </div>
    )
}