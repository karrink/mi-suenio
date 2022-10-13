import {Item} from "./Item"

export const List = ({items}) => {
    return (
        <section className="cards">
            {items.map((item) =>( 
                <Item key={item.id} item={item}/> 
            ))};
        </section>
    );
}