/* import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'; */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import axios from 'axios';

function DeleteModal(props){
    
    const handleSubmit = async (movieData) => {
        movieData.preventDefault();
    

            const serverUrl = `${process.env.REACT_APP_SERVER_URL}/getMovies/${props.movieData.id}`;
            /* const data = {
                id: movieData.target.id.value,
                title: movieData.target.title.value,
                release_date: movieData.target.release_date.value,
                poster_path: movieData.target.poster_path.value,
                overview:movieData.target.overview.value

            }; */
            console.log("sssssss");
            const axiosRes = await axios.delete(serverUrl);


            props.handleClose();
           // props.takeNewArrFromDeleteChild(axiosRes.data);

            
        
    };

    return(
        <>

<Modal show={props.showFlag} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movieData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={`https://image.tmdb.org/t/p/original${props.movieData.poster_path}`} rounded width='100%' />
                    {/* <div>
                        <label htmlFor='op'> Write Your Opinion </label>
                        <br></br>
                        <input placeholder='write opinion' type="text" value={Opinion} size='50' onChange={(event) => setOpinion(event.target.value)} />
                    </div> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit }>
                        Delete it
                    </Button>
                </Modal.Footer>
            </Modal>
        
       {/*  <Modal show={props.showFlag} onHide={props.handleclose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Movie ID</Form.Label>
                            <Form.Control
                                name="id"
                                type="text"
                                defaultValue={props.movieData.id}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Movie Title</Form.Label>
                            <Form.Control
                                name="title"
                                type="text"
                                defaultValue={props.movieData.title}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Movie Date</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name="release_date"
                                    defaultValue={props.movieData.release_date}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Movie Image</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name="poster_path"
                                    defaultValue={props.movieData.poster_path}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Movie overview</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name="overview"
                                    defaultValue={props.movieData.overview}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleclose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> */}
        
        
        </>
    )
    
}
export default DeleteModal