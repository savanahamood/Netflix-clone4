import {useEffect,useState} from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Movie from "./Movie"

function MovieList(props){
    const [movList, setmoList] = useState([]);
    const sendReq = async () => {
        const serverUrl = `${process.env.REACT_APP_SERVER_URL}/trending`;
        
        const result = await axios.get(serverUrl);
        console.log(result.data);
        setmoList(result.data);

    }
    
    const handleSubmit = async (movieData) => {
      /*   movieData.preventDefault(); */
    

            const serverUrl = `${process.env.REACT_APP_SERVER_URL}/getMovies`;
            const data = {
                id: movieData.id,
                title: movieData.title,
                release_date: movieData.release_date,
                poster_path: movieData.poster_path,
                overview:movieData.overview
            };
            console.log(data);
            const axiosRes = await axios.post(serverUrl, data);
console.log(axiosRes)

            };
    
    useEffect(() => {
        sendReq();
    },[]);
    return(
    <>
    <h1>Home</h1>
            {/* <button onClick={sendReq} >send req</button> */}
            <Row xs={1} md={4} className="g-4">
                {movList.map((item, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <p>{item.release_date}</p>
                                    <p>{item.overview}</p>
                                </Card.Text>
                                <Button variant="primary" onClick={()=>{handleSubmit(item)}}>Add to Favarites List</Button>
                               {/*  <Button variant="success" onClick={() => { props.handleupdate(item) }}>Update</Button>
                                <Button variant="danger" onClick={() => { props.hadleDelete(item) }}>Delete</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
    </>
    )
}
export default MovieList;