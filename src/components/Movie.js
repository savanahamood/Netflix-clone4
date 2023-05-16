import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import ModalMovie from './ModalMovie';

import { useState } from 'react';
import UpdateModal from './UpdateModal';
import DeleteModal from './DeleteModal';
import MovieList from './MovieList';
function Movie(props) {
    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [clickedMovie,setClickedMovie]=useState({});
    const handleShow = (item) => {
        
        setShow(true);
        setClickedMovie(item);
    }
    const handleClose=()=>{
        setShow(false);
        setShowUpdate(false);
        setShowDelete(false);
    }
    const handleupdate = (item) => {
        
        setShowUpdate(true);
        setClickedMovie(item);
    }
    const hadleDelete = (item) => {
        
        setShowDelete(true);
        setClickedMovie(item);
    }
    const takeNewArrFromChild = (arr) => {
        props.takeNewArr(arr);
    }
  /*   const takeNewArrFromDeleteChild = (arr) => {
        props.takeNewArrDetele(arr);
    } */
    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {props.favData.map((item, idx) => (
                    <Col key={idx}>
                        <Card>
                            
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <p>{item.release_date}</p>
                                    <p>{item.overview}</p>
                                </Card.Text>
                                {/* <Button variant="primary" onClick={()=>{handleShow(item)}}>Add </Button> */}
                                <Button variant="success" onClick={() => { handleupdate(item) }}>Update</Button>
                                <Button variant="danger" onClick={() => { hadleDelete(item) }}>Delete</Button>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <ModalMovie showFlag={show} handleClose={handleClose} movieData={clickedMovie}/>
            <UpdateModal showFlag={showUpdate} handleClose={handleClose} movieData={clickedMovie} takeNewArrFromChild={takeNewArrFromChild}/>
            <DeleteModal showFlag={showDelete} handleClose={handleClose} movieData={clickedMovie} takeNewArrFromChild={takeNewArrFromChild}/>
{/* <MovieList handleClose={handleClose} handleupdate={handleupdate} hadleDelete={hadleDelete}/>
 */}        </>
    )
}
export default Movie;