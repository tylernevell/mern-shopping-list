import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from 'uuid';

function ShoppingList() {
    const [items, setItems] = useState([
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Milk' },
        { id: uuid(), name: 'Steak' },
        { id: uuid(), name: 'Water' },
    ]);

    function handleClick() {
        const name = prompt('Enter Item');
        if (name) {
            setItems(prevItems => {
                return [...prevItems, { id: uuid(), name }];
            })
        }
    }

    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter((item => item.id !== id))
        })
    }

    return (
        <Container>
            <Button color="dark" style={{marginBottom: '2rem'}}
            onClick={handleClick}>
                Add Item
            </Button>

            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({ id, name }) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={() => {
                                    deleteItem(id);
                                }}>
                                    &times;
                                </Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    );
}

export default ShoppingList;