import { useEffect, useState } from "react";
import Bookmark from "./component/Bookmark/Bookmark";
import Card from "./component/Card/Card";
import Header from "./component/Header/Header";
import Blogs from "./component/Blogs/Blogs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCards(data));
  }, [])


  const [number, setNumber] = useState(0);
  const [description, setDescription] = useState([]);

  const handleBookmark = (title) => {
      if(description.includes(title)){
        toast("Already added");
        return
      }
      else{
        setDescription([...description, title]);
        setNumber(number + 1);
      }
      
      
  };

  useEffect(() => {

  }, [])

  const [spentTime, setSpentTime] = useState(0);
  const handleSpentTime = (readTime) => {
    setSpentTime(spentTime + readTime);
  }


  return (
    <div className="container">
      <div>
        <Header></Header>
      </div>
      <div className="row">
        <div className="col-lg-8">
          {
            cards.map(card => <Card key={card.id} card={card} handleBookmark={handleBookmark} handleSpentTime={handleSpentTime}></Card>)
          }

        </div>
        <div className="col-lg-4">
          <Bookmark number={number} spentTime={spentTime} description={description}></Bookmark>
        </div>
      </div>

      <div>
        <Blogs></Blogs>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;