import React, { useState } from "react";
import Card from "./Card";

const List = () => {
    
    const [filter, setFilter] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [level, setLevel] = useState('');

    const [data, setData] = useState([
        {id: 0, title: 'HTML', description: 'Шарю', level: 90},
        {id: 1,title: 'CSS', description: 'Тоже шарю', level: 90},
        {id: 2,title: 'React', description: 'Чуть-чуть шарю', level: 20},
        {id: 3,title: 'MongoDB', description: 'Понимаю', level: 40},
        {id: 4,title: 'MySQL', description: 'Тоже понимаю', level: 40},
    ]);

    const AddCard = () => {
        const newCard = {
            id: data.length,
            title: title,
            description: description,
            level: parseInt(level)
        };
        setData([...data, newCard]);
        setTitle("");
        setDescription("");
        setLevel('');
    }

    const DeleteCard = (id) => {
        setData(data.filter(card => card.id !== id));
    }

    return (
        <div>
            <div>
                <button className="button" onClick={() => setFilter('>50')}>Больше 50</button>
                <button className="button" onClick={() => setFilter('<50')}>Меньше 50</button>
                <div className="newCard">
                    <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <input type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <input type="number" placeholder="level" value={level} onChange={(e) => setLevel(e.target.value)}/>
                    <button className="button" onClick={AddCard}>Добавить</button>
                </div>
            </div>
            <div className="list">
                {data.map(card => {
                    if (filter === ">50" && card.level >= 50){
                        return <Card key={card.id} id={card.id} title={card.title} description={card.description} level={card.level} onDelete={DeleteCard}/>;
                    }
                    if (filter === "<50" && card.level <= 50){
                        return <Card key={card.id} id={card.id} title={card.title} description={card.description} level={card.level} onDelete={DeleteCard}/>;
                    }
                    if (!filter){
                        return <Card key={card.id} id={card.id} title={card.title} description={card.description} level={card.level} onDelete={DeleteCard}/>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default List;
