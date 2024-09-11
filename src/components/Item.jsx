import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { MapPinIcon } from "lucide-react"
import { Link } from 'react-router-dom'

const Item = (props) => {
    return(
        <Card className="w-full mt-[60px] max-w-sm overflow-hidden">
            <img 
                src={props.imageUrls[0]} 
                alt={props.name}
                className="w-full h-48 object-cover"
            />
            <CardHeader>
                <CardTitle className="text-[17px] font-bold">{props.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPinIcon className="w-4 h-4" />
                <span> {props.location}</span>
                </div>
                <p className="mt-2 font-semibold">{props.price}</p>
            </CardContent>
            <CardFooter>
                <Link to={`/packages/${props.id}`} >
                    <Button className="w-full">View More</Button>
                </Link>
                
            </CardFooter>
    </Card>
    )
};
export default Item