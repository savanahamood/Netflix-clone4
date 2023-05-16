import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

function UpdateModal(props){
    
    const handleSubmit = async (movieData) => {
        movieData.preventDefault();
    

            const serverUrl = `${process.env.REACT_APP_SERVER_URL}/getMovies/${props.movieData.id}`;
            const data = {
                id: movieData.target.id.value,
                title: movieData.target.title.value,
                release_date: movieData.target.release_date.value,
                poster_path: movieData.target.poster_path.value,
                overview:movieData.target.overview.value

            };
            console.log("sssssss");
            const axiosRes = await axios.put(serverUrl, data);


            props.handleClose();
            props.takeNewArrFromChild(axiosRes.data);

            
        
    };

    return(
        <>
        
        <Modal show={props.showFlag} onHide={props.handleClose}>
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
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        
        
        </>
    )
    
}
export default UpdateModal