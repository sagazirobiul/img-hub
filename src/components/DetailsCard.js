import React from 'react';
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {Row, Col, Card, Button} from 'react-bootstrap'
import imgData from '../data/imgData.json'
import swal from 'sweetalert';

const DetailsCard = () => {
    const {id} = useParams()
    const [service, setService] = useState({})

    useEffect(() => {
         const getService = imgData.find(data => data.id == id)
         setService(getService)
    }, [id])

    const handleOrder = () => {
        swal({
            title: "Success!",
            text: "Your order placed successfully.",
            icon: "success",
            button: "Ok",
          });
    }

    return (
        <div className="overflow-hidden">
            <Button onClick={() => window.history.back()} className="m-2 ml-2 py-2 px-4">Back</Button>
            <Row>
                <Col md={5} className='my-3 mx-auto' >
                    <Card style={{
                    backgroundImage: ` linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.7)), url(${service.img})`,
                    backgroundSize: 'cover',
                    color: '#2c3e50',
                    }} className='detailsCard'>
                        <Card.Body>
                            <div className="text-center">
                                <h3>Service {id}</h3>
                                <h5 className="my-4">Price: <span className="text-primary fw-bold">{service.id * service.id + 5}$</span></h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis facilis iure? Consequatur deserunt minus voluptas qui mollitia laborum aliquid iure nam illum quibusdam? Deleniti cupiditate quam nostrum magnam fuga, ab ducimus sequi ratione, quis facilis est, repellat magni excepturi.</p>
                            <div className="text-center">
                                <Button onClick={handleOrder} variant="success">Order Now</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default DetailsCard;